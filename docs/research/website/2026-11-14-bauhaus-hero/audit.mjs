import {createRequire} from 'node:module';
import {writeFile} from 'node:fs/promises';
const require=createRequire('/Users/zhangjin/rich-workspace/my-dev-skills/website/package.json');
const {chromium}=require('playwright');
const {expect}=require('@playwright/test');
const browser=await chromium.launch({channel:'chrome',headless:true});
const base='http://127.0.0.1:4321/solo-vibe-coding/';
const pages=[],states=[];
const rgb=c=>c.match(/[\d.]+/g).slice(0,3).map(Number);
const lum=c=>rgb(c).map(v=>v/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((s,v,i)=>s+v*[.2126,.7152,.0722][i],0);
const ratio=(a,b)=>(Math.max(lum(a),lum(b))+.05)/(Math.min(lum(a),lum(b))+.05);
const settle=p=>p.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));
async function measure(page,name,selector,role='text') {
 await settle(page);
 const values=await page.locator(selector).first().evaluate(el=>{
  const s=getComputedStyle(el);
  function bg(start) {for(let p=start;p;p=p.parentElement){const c=getComputedStyle(p).backgroundColor;if(c!=='rgba(0, 0, 0, 0)')return c;}}
  return {color:s.color,background:bg(el),outer:bg(el.parentElement),outline:s.outlineColor,outlineStyle:s.outlineStyle,outlineWidth:s.outlineWidth,border:s.borderColor,disabled:el.matches(':disabled'),opacity:s.opacity};
 });
 const a=role==='focus'?values.outline:role==='boundary'?values.border:values.color;
 const b=role==='focus'?values.outer:values.background;
 const contrast=ratio(a,b);const threshold=role==='text'?4.5:3;
 const pass=values.disabled?'disabled exemption':contrast>=threshold&&(role!=='focus'||(values.outlineStyle!=='none'&&parseFloat(values.outlineWidth)>=2));
 states.push({name,role,...values,contrast,threshold,pass});
}
for(const width of [1440,768,390,320]) {
 const context=await browser.newContext({viewport:{width,height:1000},reducedMotion:'reduce'});
 const page=await context.newPage();
 for(const locale of ['en','zh-CN']) {
  const response=await page.goto(base+(locale==='en'?'':'zh-CN/'),{waitUntil:'networkidle'});
  await page.evaluate(()=>document.fonts.ready);
  for(const img of await page.locator('.hero-art img').all())await img.evaluate(i=>i.decode());
  const record=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,background:getComputedStyle(document.querySelector('.hero-canvas')).backgroundColor,images:[...document.querySelectorAll('.hero-art img')].every(i=>i.complete&&i.naturalWidth>0)}));
  pages.push({width,locale,status:response.status(),...record});
  if([1440,390].includes(width))await page.screenshot({path:'/tmp/solo-vibe-bauhaus-release/'+locale+'-'+width+'.png'});
  if(width===1440&&locale==='zh-CN') {
   for(const [name,selector] of [['headline','.hero-copy h1'],['description','.hero-description'],['definition','.product-definition'],['note','.product-note'],['reference caption','.hero-art figcaption'],['comparison toolbar','.compare-toolbar'],['comparison hint','.compare-hint'],['reference label','.compare-study'],['footer','.hero-footnote'],['primary default','.product-actions .button-primary'],['secondary','.quiet-link']])await measure(page,name,selector);
   await page.locator('.product-actions .button-primary').hover();await measure(page,'primary hover','.product-actions .button-primary');
   await page.keyboard.press('Tab');await page.locator('.product-actions .button-primary').focus();await measure(page,'primary keyboard focus','.product-actions .button-primary','focus');
   await page.locator('[data-compare-input]').focus();await measure(page,'comparison keyboard focus','[data-image-compare]','focus');
   const input=page.locator('[data-compare-input]');const previous=Number(await input.inputValue());await page.keyboard.press('ArrowRight');await expect(input).toHaveValue(String(previous+1));
   await measure(page,'motion disabled','[data-motion-toggle]');
  }
 }
 await context.close();
}
const context=await browser.newContext({viewport:{width:390,height:844},javaScriptEnabled:false});
const page=await context.newPage();await page.goto(base+'zh-CN/',{waitUntil:'networkidle'});
await expect(page.locator('.compare-before img')).toBeVisible();await expect(page.locator('.compare-after img')).toBeVisible();
await page.screenshot({path:'/tmp/solo-vibe-bauhaus-release/no-js-390.png'});await context.close();
const visionContext=await browser.newContext({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
const visionPage=await visionContext.newPage();await visionPage.goto(base+'zh-CN/',{waitUntil:'networkidle'});
const cdp=await visionContext.newCDPSession(visionPage);await cdp.send('Emulation.setEmulatedVisionDeficiency',{type:'achromatopsia'});await visionPage.screenshot({path:'/tmp/solo-vibe-bauhaus-release/grayscale.png'});
await browser.close();
const report={pages,states,checks:{noJS:'both original images visible',grayscale:'screenshot for visual review'}};
await writeFile('/tmp/solo-vibe-bauhaus-release/audit.json',JSON.stringify(report,null,2)+'\n');
const failed=states.filter(s=>s.pass===false);console.log(JSON.stringify({pages:pages.length,overflow:pages.filter(p=>p.overflow),states:states.length,minimumText:Math.min(...states.filter(s=>s.role==='text'&&!s.disabled).map(s=>s.contrast)),failed}));
if(failed.length||pages.some(p=>p.overflow||!p.images||p.status!==200))process.exitCode=1;
