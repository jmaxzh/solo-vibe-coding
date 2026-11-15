// Run from the repository root. Requires website dependencies and local Chrome.
import { createRequire } from 'node:module';
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve, join, relative } from 'node:path';
import assert from 'node:assert/strict';
const require = createRequire(resolve('website/package.json'));
const { chromium, expect } = require('@playwright/test');
const { parseHTML } = require('linkedom');
const origin = 'https://jmaxzh.github.io';
const base = '/solo-vibe-coding/';
const root = resolve('website/dist');
const archive = resolve('docs/research/website/2026-11-15-open-workbench');
const sourceCommit = 'd540b7cd2b17cafa7d6f242993825cd6b798aa86';
const pages = [], assets = new Set(), responses = [];
async function files(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(entries.map(entry => entry.isDirectory() ? files(join(dir, entry.name)) : [join(dir, entry.name)]));
  return nested.flat();
}
async function get(url, expected = 200) {
  const response = await fetch(url, { signal: AbortSignal.timeout(30000) });
  responses.push({ url, status: response.status });
  assert.equal(response.status, expected, url);
  return response.text();
}
for (const file of (await files(root)).filter(file => file.endsWith('.html') && !file.endsWith('/404.html'))) {
  const route = relative(root, file).replace(/index\.html$/, '');
  const url = origin + base + route;
  const html = await get(url);
  const { document } = parseHTML(html);
  assert.equal(document.querySelectorAll('h1').length, 1, url);
  assert.equal(document.querySelector('link[rel="canonical"]').getAttribute('href'), url);
  if (route === '' || route === 'zh-CN/') assert.ok(document.querySelector('[data-workbench-art]'), 'New homepage missing: ' + url);
  for (const element of document.querySelectorAll('link[rel="stylesheet"], link[rel="icon"], script[src], img[src]')) {
    const asset = new URL(element.getAttribute('src') ?? element.getAttribute('href'), url);
    if (asset.origin === origin) assets.add(asset.href);
  }
  pages.push({ url, title: document.querySelector('title').textContent });
}
for (const asset of assets) {
  const body = await get(asset);
  if (asset.endsWith('.css')) for (const match of body.matchAll(/url\(["']?([^"')]+)["']?\)/g)) {
    const font = new URL(match[1], asset);
    if (font.origin === origin && !assets.has(font.href)) assets.add(font.href);
  }
}
const sitemapIndex = await get(origin + base + 'sitemap-index.xml');
for (const match of sitemapIndex.matchAll(/<loc>(.*?)<\/loc>/g)) await get(match[1]);
const notFound = await get(origin + base + 'publication-check-missing/', 404);
assert.ok(notFound.includes('Solo Vibe Coding'));
const robots = await fetch(origin + '/robots.txt', { signal: AbortSignal.timeout(30000) });
assert.ok(robots.status === 404 || robots.status === 200);
const robotsResult = { url: origin + '/robots.txt', status: robots.status };
if (robots.status === 200) robotsResult.content = await robots.text();

const browser = await chromium.launch({ channel: 'chrome' });
const smoke = [], browserErrors = [], resourceErrors = [];
try {
  for (const locale of ['en', 'zh-CN']) for (const [device, width, height] of [['desktop',1440,1000],['mobile',390,844]]) {
    const context = await browser.newContext({ viewport:{width,height}, reducedMotion:'reduce', acceptDownloads:true });
    const page = await context.newPage();
    page.on('pageerror', error => browserErrors.push(error.message));
    page.on('response', response => { if (response.status() >= 400) resourceErrors.push({url:response.url(),status:response.status()}); });
    const url = origin + base + (locale === 'en' ? '' : 'zh-CN/');
    await page.goto(url, {waitUntil:'networkidle'});
    await page.evaluate(() => document.fonts.ready);
    assert.equal(await page.locator('[data-workbench-art]').count(),1);
    assert.ok(await page.locator('h1').innerText());
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    await page.screenshot({path:join(archive,`published-${locale}-${device}.png`)});
    await page.locator('[data-choice="deployment"]').click();
    await page.locator('[data-task-start="deployment"]').click();
    await expect(page.locator('[data-task-picker]')).toHaveAttribute('data-selected-task','deployment',{timeout:15000});
    await page.locator('[data-language-switch]').click();
    await expect(page.locator('[data-task-picker]')).toHaveAttribute('data-selected-task','deployment',{timeout:15000});
    await page.goto(url+'examples/quote-calculator/',{waitUntil:'networkidle'});
    const form = page.locator('[data-calculator]');
    await form.locator('[name="hours"]').fill('-1');
    await expect(form.locator('[data-calculator-error]')).toBeVisible();
    await expect(form.locator('[data-download]')).toBeDisabled();
    for (const [name,value] of Object.entries({hours:'20',rate:'80',extras:'100',reserve:'15'})) await form.locator(`[name="${name}"]`).fill(value);
    await expect(form.locator('[data-total]')).toContainText('1,955.00');
    const wait = page.waitForEvent('download');
    await form.locator('[data-download]').click();
    const download = await wait;
    const csv = await readFile(await download.path(),'utf8');
    assert.ok(csv.startsWith('\uFEFF'));
    assert.ok(csv.includes('1955.00'));
    smoke.push({locale,device,taskContinuation:true,languageContinuation:true,invalidInput:true,calculation:true,csvDownload:true,noHorizontalOverflow:true});
    await context.close();
  }
} finally { await browser.close(); }
assert.deepEqual(browserErrors,[]);
assert.deepEqual(resourceErrors,[]);
await mkdir(archive,{recursive:true});
const result = {checkedAt:new Date().toISOString(),sourceCommit,origin:origin+base,pages,assetCount:assets.size,responses,robots:robotsResult,smoke,browserErrors,resourceErrors};
await writeFile(join(archive,'publication-checks.json'),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify({pages:pages.length,assets:assets.size,smoke:smoke.length,browserErrors,resourceErrors,robots:robotsResult}));
