import { chromium } from '../../../../website/node_modules/playwright-core/index.mjs';
import { readdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
const origin = 'https://jmaxzh.github.io';
const base = origin + '/solo-vibe-coding/';
const directory = fileURLToPath(new URL('../../../../website/dist/', import.meta.url));
const root = fileURLToPath(new URL('./', import.meta.url));
const result = { commit: process.argv[2], checkedAt: new Date().toISOString(), pages: [], resources: [], browsers: [] };
const walk = async path => (await Promise.all((await readdir(directory + path, { withFileTypes: true })).map(entry => entry.isDirectory() ? walk(path + entry.name + '/') : [path + entry.name]))).flat();
const resources = new Set();
const check = async url => {
  const response = await fetch(url, { headers: { 'Cache-Control': 'no-cache' }, signal: AbortSignal.timeout(30000) });
  assert.equal(response.status, 200, `${url} returns ${response.status}`);
  return response;
};
for (const file of (await walk('')).filter(file => file.endsWith('.html'))) {
  const relative = file === 'index.html' ? '' : file.replace(/index\.html$/, '');
  const response = await check(base + relative);
  const html = await response.text();
  if (relative === '') assert.match(html, /Expert methods\./);
  if (relative === 'zh-CN/') assert.match(html, /补上专业方法。/);
  result.pages.push({ url: response.url, status: response.status });
  for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    const url = new URL(match[1], response.url);
    if (url.origin === origin && /\.(css|js|png|webp|svg|zip|woff2)$/.test(url.pathname)) resources.add(url.href);
  }
}
for (const url of [...resources]) {
  const response = await check(url);
  result.resources.push({ url, status: response.status });
  if (url.endsWith('.css')) {
    const css = await response.text();
    for (const match of css.matchAll(/url\(["']?([^)'"\s]+)["']?\)/g)) if (!match[1].startsWith('data:')) resources.add(new URL(match[1], url).href);
  }
}
for (const url of [...resources].filter(url => !result.resources.some(item => item.url === url))) {
  const response = await check(url);
  result.resources.push({ url, status: response.status });
}
const sitemapIndex = await check(base + 'sitemap-index.xml');
const sitemap = await sitemapIndex.text();
for (const match of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) await check(match[1]);
const robots = await fetch(origin + '/robots.txt');
const robotsText = await robots.text();
result.robots = { status: robots.status, blocksRoot: robots.ok && /^Disallow:\s*\/\s*$/mi.test(robotsText) };
assert.equal(result.robots.blocksRoot, false);
const browser = await chromium.launch({ channel: 'chrome' });
try {
  for (const locale of ['en', 'zh-CN']) {
    for (const width of [390, 820, 1440]) {
      const page = await browser.newPage({ viewport: { width, height: width === 390 ? 844 : 1000 }, reducedMotion: 'reduce' });
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      const home = base + (locale === 'en' ? '' : 'zh-CN/');
      await page.goto(home);
      await page.evaluate(async () => { await document.fonts.ready; await Promise.all([...document.images].map(image => { image.loading = 'eager'; return image.decode(); })); });
      const reading = await page.evaluate(() => {
        const copy = document.querySelector('.hero-copy').getBoundingClientRect();
        const art = document.querySelector('.hero-art').getBoundingClientRect();
        return { overflow: document.documentElement.scrollWidth > innerWidth, separated: innerWidth > 800 ? art.left >= copy.right + 32 : art.top >= copy.bottom + 20, imagesLoaded: [...document.images].every(image => image.complete && image.naturalWidth > 0) };
      });
      assert.deepEqual(reading, { overflow: false, separated: true, imagesLoaded: true });
      await page.locator('[data-choice="growth"]').click();
      assert.equal(await page.locator('input[value="growth"]').isChecked(), true);
      await page.locator('.product-actions [data-home-start]').click();
      assert.match(page.url(), /getting-started\/\?task=growth#task-growth$/);
      await page.goto(home);
      await page.locator('[data-case-link]').first().click();
      assert.match(page.url(), /case-study\/bookmark-export\/$/);
      if (width === 390) {
        await page.goto(home + 'examples/quote-calculator/');
        const download = page.waitForEvent('download');
        await page.locator('[data-download]').click();
        assert.match((await download).suggestedFilename(), /\.csv$/);
      }
      assert.deepEqual(errors, []);
      result.browsers.push({ locale, width, ...reading, taskContinuity: true, caseLink: true, quoteDownload: width === 390, errors });
      await page.close();
    }
  }
} finally { await browser.close(); }
await writeFile(root + 'publication-checks.json', JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify({ pages: result.pages.length, resources: result.resources.length, browserConfigurations: result.browsers.length, robots: result.robots }));
