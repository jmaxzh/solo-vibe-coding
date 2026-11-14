import { chromium } from '../../../../website/node_modules/playwright/index.mjs';
import { writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

const dir = new URL('.', import.meta.url);
const base = 'http://127.0.0.1:4322/solo-vibe-coding/';
const browser = await chromium.launch({channel:'chrome',headless:true});
const layouts=[],tasks=[],contrasts=[],screenshots=[],errors=[];
const luminance = color => color.match(/[\d.]+/g).slice(0,3).map(Number).map(v=>v/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((sum,v,i)=>sum+v*[.2126,.7152,.0722][i],0);
const ratio = (a,b) => (Math.max(luminance(a),luminance(b))+.05)/(Math.min(luminance(a),luminance(b))+.05);
for (const width of [1440,1024,390,320]) {
  const context=await browser.newContext({viewport:{width,height:width<500?844:1000},reducedMotion:'reduce'});
  const page=await context.newPage();
  page.on('pageerror',error=>errors.push(error.message));
  for (const locale of ['en','zh-CN']) {
    const prefix=locale==='en'?'':'zh-CN/';
    await page.goto(base+prefix,{waitUntil:'networkidle'});
    await page.evaluate(()=>document.fonts.ready);
    const layout=await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,header:document.querySelector('.header-inner').getBoundingClientRect().height,cta:document.querySelector('.product-actions .button').getBoundingClientRect().toJSON(),hero:document.querySelector('.hero-canvas').getBoundingClientRect().toJSON()}));
    assert(layout.scrollWidth<=width);
    assert(layout.cta.bottom< (width<500?844:1000),'The first action must be visible before scrolling');
    layouts.push({locale,...layout});
    if ([1440,390].includes(width)) {
      const name=`home.${locale}.${width}.png`;
      await page.screenshot({path:new URL('screenshots/'+name,dir).pathname});
      screenshots.push(name);
    }
    for (const task of ['development','design','deployment','growth']) {
      await page.locator(`[data-choice="${task}"]`).click();
      const scene=page.locator(`[data-workflow="${task}"]`);
      assert(await scene.isVisible());
      assert.equal(await page.locator('.workflow-scene:visible').count(),1);
      const record={width,locale,task,request:await scene.locator('.workflow-request p').innerText(),methods:await scene.locator('.workflow-methods strong').allTextContents(),output:await scene.locator('.workflow-output strong').innerText(),starts:await page.locator('[data-home-start]').evaluateAll(links=>links.map(link=>link.href)),overflow:await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth)};
      assert(!record.overflow);
      assert(record.starts.every(link=>new URL(link).searchParams.get('task')===task));
      tasks.push(record);
    }
    if (width===1440&&locale==='zh-CN') {
      for (const selector of ['.product-definition','.hero-description','.product-note','.product-actions .button','.workflow-request p','.workflow-skill','.workflow-methods strong','.workflow-output strong','.hero-art figcaption','.task-number','.task-pain-summary']) {
        const value=await page.locator(selector).filter({visible:true}).first().evaluate(element=>{
          const style=getComputedStyle(element);
          let background='rgb(244, 240, 231)';
          for(let current=element;current;current=current.parentElement) {const color=getComputedStyle(current).backgroundColor;if(color!=='rgba(0, 0, 0, 0)'){background=color;break;}}
          return {color:style.color,background,fontSize:style.fontSize};
        });
        const contrast=ratio(value.color,value.background);
        assert(contrast>=4.5,selector+' contrast');
        contrasts.push({selector,...value,contrast});
      }
    }
    if ([1440,390].includes(width)) for (const [kind,route] of [['start','getting-started/'],['guides','guides/'],['quote','examples/quote-calculator/'],['case','case-study/bookmark-export/'],['updates','build-log/'],['article','build-log/working-methods/'],['missing','404.html']]) {
      await page.goto(base+prefix+route,{waitUntil:'networkidle'});
      assert(await page.locator('h1').isVisible());
      assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
      const name=`${kind}.${locale}.${width}.jpg`;
      await page.screenshot({path:new URL('screenshots/'+name,dir).pathname,type:'jpeg',quality:88});
      screenshots.push(name);
    }
  }
  await context.close();
}
assert.equal(errors.length,0);
await writeFile(new URL('audit.json',dir),JSON.stringify({browser:await browser.version(),capturedAt:new Date().toISOString(),layouts,tasks,contrasts,screenshots,errors,scope:'Engineering layout, content continuity, default text contrast and visual inspection evidence only. Preference, beginner comprehension and completed installations need real-user validation.'},null,2));
console.log(JSON.stringify({layouts:layouts.length,tasks:tasks.length,contrasts:contrasts.length,screenshots:screenshots.length,errors},null,2));
await browser.close();
