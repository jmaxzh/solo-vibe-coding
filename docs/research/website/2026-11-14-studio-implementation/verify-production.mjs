import { chromium } from '../../../../website/node_modules/playwright/index.mjs';
import { parseHTML } from '../../../../website/node_modules/linkedom/esm/index.js';
import { createHash } from 'node:crypto';
import { writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

const sourceCommit=process.argv[2];
assert(sourceCommit&&/^[0-9a-f]{40}$/.test(sourceCommit));
const base='https://jmaxzh.github.io/solo-vibe-coding/';
const files=new Map();
async function get(url) {
  if(files.has(url)) return files.get(url);
  const response=await fetch(url,{signal:AbortSignal.timeout(30000)});
  assert.equal(response.status,200,url);
  const bytes=Buffer.from(await response.arrayBuffer());
  const record={url,status:response.status,bytes:bytes.length,sha256:createHash('sha256').update(bytes).digest('hex'),etag:response.headers.get('etag')};
  files.set(url,record);
  return {record,text:bytes.toString('utf8')};
}
const home=await get(base+'zh-CN/');
assert(home.text.includes('workflow-assistant'),'The public homepage must contain the studio implementation');
assert(home.text.includes('给编程助手的专业指导包'));
const index=await get(base+'sitemap-index.xml');
const sitemapURLs=[...index.text.matchAll(/<loc>(.*?)<\/loc>/g)].map(match=>match[1]);
const routes=[];
for (const url of sitemapURLs) {
  const result=await get(url);
  routes.push(...[...result.text.matchAll(/<loc>(.*?)<\/loc>/g)].map(match=>match[1]));
}
const assets=new Set([base+'social-card.png',base+'favicon.svg']);
for(const url of new Set(routes)) {
  const result=await get(url);
  // A cached record is only returned for the already-read Chinese homepage.
  const text=result.text ?? home.text;
  const {document}=parseHTML(text);
  assert.equal(document.querySelectorAll('h1').length,1,url);
  assert(document.querySelector('link[rel="canonical"]'),url);
  for(const element of document.querySelectorAll('[src],link[href],a[href]')) {
    const value=element.getAttribute('src')??element.getAttribute('href');
    if(!value) continue;
    const asset=new URL(value,url);
    if(asset.origin===new URL(base).origin&&/\.(css|js|woff2|png|webp|svg|zip|txt)$/.test(asset.pathname)) assets.add(asset.href);
  }
}
for(const url of assets) {
  const result=await get(url);
  if(url.endsWith('.css')) for(const match of result.text.matchAll(/url\(["']?([^\s)"']+)["']?\)/g)) {
    const asset=new URL(match[1],url);
    if(asset.origin===new URL(base).origin) assets.add(asset.href);
  }
}
const robots=await fetch('https://jmaxzh.github.io/robots.txt',{signal:AbortSignal.timeout(30000)});
const robotsText=await robots.text();
const browser=await chromium.launch({channel:'chrome',headless:true});
const checks=[];
for(const width of [1440,390]) {
  const context=await browser.newContext({viewport:{width,height:width===390?844:1000},reducedMotion:'reduce'});
  const page=await context.newPage();
  const errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  await page.goto(base+'zh-CN/',{waitUntil:'networkidle'});
  assert(await page.locator('[data-workflow="development"]').isVisible());
  await page.screenshot({path:new URL(`screenshots/production.zh-CN.${width}.png`,import.meta.url).pathname});
  await page.locator('[data-choice="design"]').click();
  assert(await page.locator('[data-workflow="design"]').isVisible());
  await page.locator('.product-actions [data-home-start]').click();
  await page.waitForLoadState('networkidle');
  await page.locator('[data-task-picker][data-selected-task="design"]').waitFor();
  assert.equal(new URL(page.url()).searchParams.get('task'),'design');
  assert(await page.locator('#task-design').isVisible());
  await page.locator('[data-language-switch]').click();
  await page.waitForLoadState('networkidle');
  await page.locator('[data-task-picker][data-selected-task="design"]').waitFor();
  assert.equal(await page.locator('html').getAttribute('lang'),'en');
  assert.equal(new URL(page.url()).searchParams.get('task'),'design');
  assert(await page.locator('#task-design').isVisible());
  assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  assert.equal(errors.length,0);
  checks.push({width,task:'design',startAndLanguageContinuity:true,errors});
  await context.close();
}
await browser.close();
const report={checkedAt:new Date().toISOString(),sourceCommit,site:base,pageCount:new Set(routes).size,files:[...files.values()],robots:{status:robots.status,text:robots.status===200?robotsText:null},browserChecks:checks,scope:'Published content, resource availability and selected-task continuity after page load. No real-user preference, comprehension or completed installation was tested.'};
await writeFile(new URL('production.json',import.meta.url),JSON.stringify(report,null,2));
console.log(JSON.stringify({sourceCommit,pages:report.pageCount,resourcesAndPages:files.size,browserChecks:checks},null,2));
