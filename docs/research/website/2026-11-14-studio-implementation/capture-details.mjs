import { chromium } from '../../../../website/node_modules/playwright/index.mjs';
import { writeFile } from 'node:fs/promises';

const directory=new URL('screenshots/',import.meta.url);
const browser=await chromium.launch({headless:true,channel:'chrome'});
const records=[];
for (const width of [1440,390]) {
  const context=await browser.newContext({viewport:{width,height:width===390?844:1000},reducedMotion:'reduce'});
  const page=await context.newPage();
  for (const locale of ['en','zh-CN']) for (const [kind,path] of [['home',''],['start','getting-started/'],['guides','guides/'],['quote','examples/quote-calculator/'],['case','case-study/bookmark-export/'],['article','build-log/working-methods/']]) {
    await page.goto('http://127.0.0.1:4322/solo-vibe-coding/'+(locale==='en'?'':'zh-CN/')+path,{waitUntil:'networkidle'});
    await page.evaluate(async()=>{
      for(let y=0;y<document.documentElement.scrollHeight;y+=800){scrollTo(0,y);await new Promise(resolve=>setTimeout(resolve,50));}
    });
    const images=await page.locator('img:visible').evaluateAll(async images=>{
      await Promise.all(images.map(image=>image.decode().catch(()=>{})));
      return images.map(image=>({src:image.getAttribute('src'),loaded:image.complete&&image.naturalWidth>0}));
    });
    await page.evaluate(()=>scrollTo(0,0));
    const name=`${kind}.${locale}.${width}.full.jpg`;
    await page.screenshot({path:new URL(name,directory).pathname,type:'jpeg',quality:80,fullPage:true});
    if(kind==='home') for(const [name,selector] of [['methods','#how-it-helps'],['install','#install']]) await page.locator(selector).screenshot({path:new URL(`${name}.${locale}.${width}.jpg`,directory).pathname,type:'jpeg',quality:88});
    records.push({kind,locale,width,file:name,fullPage:true,images,overflow:await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth)});
  }
  await context.close();
}
await writeFile(new URL('full-page-audit.json',import.meta.url),JSON.stringify(records,null,2));
console.log(JSON.stringify({pages:records.length,overflow:records.filter(item=>item.overflow),imageFailures:records.flatMap(item=>item.images.filter(image=>!image.loaded))},null,2));
await browser.close();
