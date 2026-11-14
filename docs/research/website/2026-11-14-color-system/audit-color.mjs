import { createRequire } from 'node:module';
import { writeFile } from 'node:fs/promises';
const require = createRequire('/Users/zhangjin/rich-workspace/my-dev-skills/website/package.json');
const { chromium } = require('playwright');
const { expect } = require('@playwright/test');
const browser = await chromium.launch({ headless: true, channel: 'chrome' });
const context = await browser.newContext({ viewport: { width: 1440, height: 1050 }, reducedMotion: 'reduce' });
const page = await context.newPage();
const base = 'http://127.0.0.1:4321/solo-vibe-coding/zh-CN/';
const records = [];
const rgb = s => s.match(/[\d.]+/g).map(Number).slice(0, 3);
const luminance = color => rgb(color).map(v => v/255).map(v => v <= .04045 ? v/12.92 : ((v+.055)/1.055)**2.4).reduce((sum, v, i) => sum+v*[.2126,.7152,.0722][i], 0);
const ratio = (a,b) => (Math.max(luminance(a),luminance(b))+.05)/(Math.min(luminance(a),luminance(b))+.05);
async function record(name, selector, mode = 'text') {
 const locator = page.locator(selector).first();
 await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
 const computed = await locator.evaluate(el => {
  const style=getComputedStyle(el); const backgrounds=[];
  let parent = el;
  while(parent) {
   const cs=getComputedStyle(parent);
   const stops=cs.backgroundImage.match(/rgba?\([^)]+\)/g);
   if(stops) backgrounds.push(...stops);
   if(cs.backgroundColor !== 'rgba(0, 0, 0, 0)') { backgrounds.push(cs.backgroundColor); break; }
   parent=parent.parentElement;
  }
  let outside=el.parentElement; const outerBackgrounds=[]; while(outside) { const cs=getComputedStyle(outside); const stops=cs.backgroundImage.match(/rgba?\([^)]+\)/g); if(stops) outerBackgrounds.push(...stops); if(cs.backgroundColor!=='rgba(0, 0, 0, 0)') { outerBackgrounds.push(cs.backgroundColor);break; } outside=outside.parentElement; } const outer=outerBackgrounds.at(-1);
  return { color:style.color, backgrounds, outerBackgrounds, outer, background:style.backgroundColor, border:style.borderTopColor, outline:style.outlineColor, outlineStyle:style.outlineStyle, outlineWidth:style.outlineWidth, opacity:style.opacity, disabled:el.matches(':disabled'), ariaInvalid:el.getAttribute('aria-invalid'), selected:el.matches('[data-choice]') ? document.querySelector('input[value="'+el.dataset.choice+'"]')?.checked : undefined, fontSize:style.fontSize, fontWeight:style.fontWeight };
 });
 let ratios=[]; let min;
 if(mode==='text') { ratios=computed.backgrounds.map(b=>ratio(computed.color,b));min=Math.min(...ratios); }
 if(mode==='border') { ratios=[ratio(computed.border,computed.background),ratio(computed.border,computed.outer)];min=Math.min(...ratios); }
 if(mode==='focus') {
  ratios=computed.outerBackgrounds.map(bg=>ratio(computed.outline,bg));min=Math.min(...ratios);
  computed.visibleOutline=computed.outlineStyle!=='none'&&parseFloat(computed.outlineWidth)>=2;
 }
 const threshold=mode==='text'?4.5:3;
 records.push({name,mode,...computed,ratios,minimum:min,threshold,pass:computed.disabled ? 'disabled exemption' : min>=threshold && computed.visibleOutline!==false});

}
await page.goto(base);
await record('hero secondary over gradient stops','.hero-description');
await record('hero headline accent over gradient stops','.hero-copy h1 > span + span');
await record('primary CTA default','.product-actions .button-primary');
await page.locator('.product-actions .button-primary').hover();await page.waitForTimeout(200);await record('primary CTA hover','.product-actions .button-primary');
await page.keyboard.press('Tab');
await page.locator('.product-actions .button-primary').focus();await record('primary CTA keyboard focus','.product-actions .button-primary','focus');
await record('selected task label','[data-choice="development"]');
await page.locator('input[value="development"]').focus();await record('task radio keyboard focus','[data-choice="development"]','focus');
await record('unselected task label','[data-choice="design"]');
await page.locator('[data-choice="design"]').hover();await page.waitForTimeout(200);await record('unselected task hover','[data-choice="design"]');
await page.locator('[data-choice="design"]').click();await page.waitForTimeout(100);await record('selected task border','[data-choice="design"]','border');
await record('source attribution','.stock-scene-design .stock-source');
await page.keyboard.press('Tab');await page.locator('[data-compare-input]').focus();await page.waitForTimeout(80);await record('image comparison focus','[data-image-compare]','focus');
await record('image comparison toolbar','.compare-toolbar');
await record('motion disabled state','[data-motion-toggle]');
await page.goto(base+'getting-started/');
await record('terminal command','[data-terminal-command]');
await record('terminal secondary','.terminal-comment');
await record('reading body','.document-content p');
await record('code block foreground','.document-content .code-block');
await record('sidebar link','.on-this-page a');
await page.goto(base+'examples/quote-calculator/');
await record('input text','input[name="hours"]');
await record('input boundary','input[name="hours"]','border');
await page.keyboard.press('Tab');await page.locator('input[name="hours"]').focus();await record('input keyboard focus','input[name="hours"]','focus');
await record('quote total label','.quote-total > span');
await page.locator('input[name="hours"]').fill('-1');await page.locator('input[name="hours"]').blur();
await expect(page.locator('input[name="hours"]')).toHaveAttribute('aria-invalid','true');
await record('invalid input boundary','input[name="hours"]','border');
await record('error explanation','.quote-error');
await record('disabled download','[data-download]');
const cdp=await context.newCDPSession(page);
for(const type of ['deuteranopia','achromatopsia']) {
 await cdp.send('Emulation.setEmulatedVisionDeficiency',{type});
 await page.locator('[data-calculator]').screenshot({path:'/tmp/solo-vibe-color-release/qa/quote-error-'+type+'.png'});
 await page.goto(base);await page.locator('input[value="design"]').focus();await page.keyboard.press('ArrowRight');
 await page.locator('.task-options').screenshot({path:'/tmp/solo-vibe-color-release/qa/task-selected-'+type+'.png'});
 await page.goto(base+'examples/quote-calculator/');await page.locator('input[name="hours"]').fill('-1');
}
await writeFile('/tmp/solo-vibe-color-release/color-audit.json',JSON.stringify({browser:browser.version(),method:'WCAG 2.2 sRGB contrast; computed styles, actual hover/focus/selected/error/disabled states; both gradient stops. Disabled controls recorded separately; incidental stock image text excluded.',records},null,2));
console.log(JSON.stringify({failures:records.filter(r=>r.pass===false),states:records.length,minimumText:Math.min(...records.filter(r=>r.mode==='text'&&!r.disabled).map(r=>r.minimum)),minimumUI:Math.min(...records.filter(r=>r.mode!=='text').map(r=>r.minimum)),passed:records.every(r=>r.pass)}));
await browser.close();if(records.some(r=>r.pass===false))process.exitCode=1;
