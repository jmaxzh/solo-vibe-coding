import { chromium } from '../../../../website/node_modules/playwright/index.mjs';
import { createRequire } from 'node:module';
const sharp = createRequire(new URL('../../../../website/package.json', import.meta.url))('sharp');
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
const dir = new URL('.', import.meta.url);
const out = name => new URL(name, dir).pathname;
await mkdir(out('screenshots'), {recursive:true});
const browser = await chromium.launch({channel:'chrome'});
const context = await browser.newContext({deviceScaleFactor:1,reducedMotion:'reduce'});
const page = await context.newPage();
const errors=[];
page.on('pageerror', e=>errors.push(e.message));
const base='http://127.0.0.1:4321/solo-vibe-coding/';
const baseline='http://127.0.0.1:4322/solo-vibe-coding/';
async function ready(url) {
 await page.goto(url,{waitUntil:'networkidle'});
 await page.evaluate(()=>document.fonts.ready);
}
async function loadImages() {
 await page.evaluate(async()=>{
  const imgs=[...document.images];
  for(const img of imgs) img.loading='eager';
  await Promise.all(imgs.map(img=>img.decode().catch(()=>{})));
 });
}
const shots=[];
for(const locale of ['zh-CN','en']) for(const [device,width,height] of [['desktop',1440,1000],['mobile',390,844]]) {
 await page.setViewportSize({width,height});
 const prefix=locale==='en'?'':'zh-CN/';
 await ready(base+prefix); await loadImages();
 await page.screenshot({path:out(`screenshots/after-${locale}-${device}-hero.png`)});
 await page.screenshot({path:out(`screenshots/after-${locale}-${device}-full.png`),fullPage:true});
 shots.push({locale,device,width,height,pageHeight:await page.evaluate(()=>document.documentElement.scrollHeight),hero:await page.locator('h1').boundingBox(),demo:await page.locator('[data-hero-object]').boundingBox()});
 if(locale==='zh-CN') {
  await ready(baseline+prefix); await loadImages();
  await page.screenshot({path:out(`screenshots/before-${device}-hero.png`)});
  await page.screenshot({path:out(`screenshots/before-${device}-full.png`),fullPage:true});
  await sharp({create:{width:width*2,height,channels:3,background:'#fff'}}).composite([
   {input:await readFile(out(`screenshots/before-${device}-hero.png`)),left:0,top:0},
   {input:await readFile(out(`screenshots/after-zh-CN-${device}-hero.png`)),left:width,top:0},
  ]).png().toFile(out(`screenshots/comparison-${device}.png`));
 }
}
const layouts=[];
for(const width of [320,390,768,1024,1440]) for(const locale of ['en','zh-CN']) {
 await page.setViewportSize({width,height:1000});
 await ready(base+(locale==='en'?'':'zh-CN/'));
 for(const task of ['development','design','deployment','growth']) {
  await page.locator(`[data-choice="${task}"]`).click();
  const measurement=await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth}));
  assert(measurement.scrollWidth<=width,`${locale} ${task} ${width}: overflow`);
  assert(await page.locator(`[data-workflow="${task}"]`).isVisible());
  layouts.push({locale,task,...measurement});
 }
}
const innerPages=[];
const routes=['getting-started/','guides/','examples/quote-calculator/','case-study/bookmark-export/','build-log/','build-log/first-public-build/','build-log/working-methods/'];
async function innerSnapshot(url) {
 await ready(url); await loadImages();
 return page.evaluate(()=>({
  text:document.querySelector('main').innerText,
  links:[...document.querySelectorAll('a')].map(a=>{const u=new URL(a.href);return u.origin===location.origin ? u.pathname+u.search+u.hash : a.getAttribute('href');}),
  elements:[...document.querySelectorAll('header, main, footer, h1, h2, h3, p, a, input, button, img, pre')].filter(e=>e.getBoundingClientRect().height>0).map(e=>{
   const c=getComputedStyle(e),r=e.getBoundingClientRect();
   return {tag:e.tagName,x:r.x,y:r.y,width:r.width,height:r.height,color:c.color,background:c.backgroundColor,font:c.fontFamily,size:c.fontSize,line:c.lineHeight,radius:c.borderRadius};
  })
 }));
}
for(const [device,width,height] of [['desktop',1440,1000],['mobile',390,844]]) for(const locale of ['en','zh-CN']) for(const route of routes) {
 await page.setViewportSize({width,height});
 const prefix=locale==='en'?'':'zh-CN/';
 const before=await innerSnapshot(baseline+prefix+route);
 const after=await innerSnapshot(base+prefix+route);
 const equal=JSON.stringify(before)===JSON.stringify(after);
 innerPages.push({locale,device,route,equal,elementCount:after.elements.length});
 if(!equal) {
  await writeFile(out(`inner-difference-${locale}-${device}-${route.replaceAll('/','_')}.json`),JSON.stringify({before,after},null,2));
 }
}
await writeFile(out('audit.json'),JSON.stringify({capturedAt:new Date().toISOString(),browser:await browser.version(),shots,layouts,innerPages,errors,limits:'Desktop Chrome and Chromium mobile emulation, not physical devices or user research. Screenshots use reduced motion; source task data and static UI are unchanged by that preference.'},null,2));
console.log(JSON.stringify({shots,layoutChecks:layouts.length,innerComparisons:innerPages.length,innerDifferences:innerPages.filter(x=>!x.equal),errors},null,2));
await browser.close();
assert(innerPages.every(x=>x.equal),'Inner page content, links or computed layout changed');
assert.equal(errors.length,0,'No browser page errors');
