import { chromium } from '../../../../website/node_modules/playwright/index.mjs';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';

const dir = new URL('.', import.meta.url);
const browser = await chromium.launch({headless:true,channel:'chrome'});
const page = await browser.newPage({viewport:{width:1472,height:1032},deviceScaleFactor:1});
const errors = [];
page.on('pageerror', error => errors.push(error.message));
await page.goto('http://127.0.0.1:8766/preview.html',{waitUntil:'networkidle'});
const frame = page.frames().find(item => item !== page.mainFrame());
await frame.waitForSelector('[data-design="workbench"][data-device="mobile"]',{state:'attached'});
async function showVariant(index) {
  await frame.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
  let current=Number((await frame.locator('.viz-carousel-count').innerText()).split('/')[0].trim())-1;
  let attempts=0;
  while (current !== index && attempts++ < 8) {
    await frame.locator(current < index ? '.viz-carousel-next' : '.viz-carousel-previous').focus();
    await page.keyboard.press('Enter');
    current=Number((await frame.locator('.viz-carousel-count').innerText()).split('/')[0].trim())-1;
  }
  assert.equal(current,index,'Carousel must activate the requested variant');
  await frame.evaluate(() => window.scrollTo(0,0));
  await page.evaluate(() => window.scrollTo(0,0));
  await frame.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
}
const shots = [];
for (const [index,name,width,height] of [[0,'studio-desktop',1440,1000],[1,'studio-mobile',390,844],[2,'workbench-desktop',1440,1000],[3,'workbench-mobile',390,844]]) {
  await page.setViewportSize({width:width+32,height:height+32});
  await showVariant(index);
  await page.waitForTimeout(200);
  await page.screenshot({path:new URL('screenshots/'+name+'.png',dir).pathname,clip:{x:16,y:16,width,height}});
  const product = frame.locator('[data-variant]').nth(index).locator('.svc-frame');
  shots.push({name,width,height,productBox:await product.boundingBox(),cta:await product.locator('[data-start]').boundingBox(),figure:await product.locator('figure').boundingBox()});
}
const layouts = [];
for (const index of [0,2]) {
  for (const width of [320,390,768,1024,1440]) {
    await page.setViewportSize({width:width+32,height:1032});
    await showVariant(index);
    await frame.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
    const product = frame.locator('[data-variant]').nth(index).locator('.svc-frame');
    const layout = await product.evaluate(root => {
      const box=root.getBoundingClientRect();
      return {width:box.width,scrollWidth:root.scrollWidth,height:box.height,overflow:root.scrollWidth>box.width+1,smallestText:Math.min(...[...root.querySelectorAll('p,small,strong,a,button,figcaption')].filter(item=>item.getBoundingClientRect().height>0).map(item=>parseFloat(getComputedStyle(item).fontSize)))};
    });
    layouts.push({index,width,...layout});
  }
}
const interactions=[];
await page.setViewportSize({width:1472,height:1032});
for (const index of [0,1,2,3]) {
  await page.setViewportSize({width:index%2 === 0 ? 1472 : 422,height:1032});
  await showVariant(index);
  await frame.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
  const product = frame.locator('[data-variant]').nth(index).locator('.svc-frame');
  for (const task of ['development','design','deployment','growth']) {
    await product.locator('[data-task="'+task+'"]').focus();
    await page.keyboard.press('Enter');
    const result={index,task,input:'keyboard Enter',selected:await product.locator('[aria-pressed="true"]').count(),request:await product.locator('[data-task-request]').innerText(),steps:await product.locator('[data-step]').allTextContents(),output:await product.locator('[data-task-output]').innerText(),cta:await product.locator('[data-start]').getAttribute('href')};
    assert.equal(result.selected,1,'Exactly one task must be selected');
    assert.equal(new URL(result.cta).searchParams.get('task'),task,'Installation must preserve the chosen task at variant '+index);
    const expected={development:['访客黑屏','先重现问题','修复'],design:['设计一致','明确视觉方向','核心页面'],deployment:['接通登录','选择合适方案','线上使用流程'],growth:['有需求的人','弄清卡在哪里','推广计划']}[task];
    assert(result.request.includes(expected[0]),'Request must describe the chosen task');
    assert.equal(result.steps.length,3);
    assert.equal(result.steps[0],expected[1],'Methods must match the chosen task');
    assert(result.output.includes(expected[2]),'Delivery target must match the chosen task');
    interactions.push(result);
  }
}
const accessibility=[];
await frame.addScriptTag({path:new URL('../../../../website/node_modules/axe-core/axe.min.js',import.meta.url).pathname});
for (const index of [0,1,2,3]) {
  await page.setViewportSize({width:index%2 === 0 ? 1472 : 422,height:1032});
  await showVariant(index);
  await frame.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
  const result=await frame.evaluate(async index => axe.run(document.querySelectorAll('[data-variant]')[index].querySelector('.svc-frame'),{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}}),index);
  accessibility.push({index,violations:result.violations.map(item=>({id:item.id,impact:item.impact,description:item.description,nodes:item.nodes.map(node=>({html:node.html,summary:node.failureSummary}))})),incomplete:result.incomplete.map(item=>({id:item.id,nodes:item.nodes.map(node=>({html:node.html,summary:node.failureSummary}))}))});
}
await fs.writeFile(new URL('audit.json',dir),JSON.stringify({capturedAt:new Date().toISOString(),browser:await browser.version(),scope:'Product mockup content only. Host carousel controls are supplied by the visualization runtime; its count label has a known 3.28:1 contrast in the local light preview and is not part of the proposed website.',shots,layouts,interactions,accessibility,errors},null,2));
console.log(JSON.stringify({shots,layouts,interactions:interactions.length,accessibility,errors},null,2));
await browser.close();
