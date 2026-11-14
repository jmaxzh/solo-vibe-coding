import {chromium} from '../../../../website/node_modules/playwright/index.mjs';
import {spawn,execFile} from 'node:child_process';
import {promisify} from 'node:util';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {readFile,writeFile,mkdtemp,rm} from 'node:fs/promises';
import assert from 'node:assert/strict';
const output=new URL('.',import.meta.url);
const folder=await mkdtemp(join(tmpdir(),'solo-prism-bundle-'));
await promisify(execFile)('python3',['-c','import sys,zipfile;zipfile.ZipFile(sys.argv[1]).extractall(sys.argv[2])',new URL('prism-static-preview.zip',output).pathname,folder]);
const server=spawn('python3',['-m','http.server','4330','--bind','127.0.0.1','--directory',folder],{stdio:'ignore'});
const base='http://127.0.0.1:4330/solo-vibe-coding/';
const browser=await chromium.launch({channel:'chrome'});
try {
 for(let i=0;i<30;i++){try{const r=await fetch(base);if(r.ok)break;}catch{}await new Promise(r=>setTimeout(r,100));}
 const context=await browser.newContext({reducedMotion:'reduce'}),page=await context.newPage();
 const errors=[],failures=[],checks=[];
 page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)failures.push({url:r.url(),status:r.status()});});
 await page.route('**/*',route=>route.request().url().startsWith('http://127.0.0.1:4330/')?route.continue():route.abort());
 for(const [locale,prefix] of [['zh-CN','zh-CN/'],['en','']])for(const [width,height] of [[1440,1000],[390,844]]){
  await page.setViewportSize({width,height});const r=await page.goto(base+prefix,{waitUntil:'networkidle'});assert.equal(r.status(),200);
  await page.locator('.hero-art img').evaluate(e=>e.decode());assert.equal(await page.locator('.hero-art img').evaluate(e=>e.naturalWidth),1536);
  await page.locator('[data-choice=growth]').click();await page.reload({waitUntil:'networkidle'});assert.equal(await page.locator('input[value=growth]').isChecked(),true);
  await page.locator('[data-language-switch]').click();assert.equal(await page.locator('input[value=growth]').isChecked(),true);
  await page.locator('.product-actions [data-home-start]').click();await page.locator('[data-task-picker][data-selected-task=growth]').waitFor();
  await page.goto(base+prefix+'examples/quote-calculator/',{waitUntil:'networkidle'});
  const tool=page.locator('[data-calculator]');await tool.locator('input[name=hours]').fill('20');await tool.locator('input[name=rate]').fill('80');await tool.locator('input[name=extras]').fill('100');await tool.locator('input[name=reserve]').fill('15');
  assert((await tool.locator('[data-total]').innerText()).includes('1,955.00'));
  const event=page.waitForEvent('download');await tool.locator('[data-download]').click();const csv=await readFile(await (await event).path(),'utf8');assert.equal(csv.charCodeAt(0),0xfeff);assert(csv.includes('1955.00'));
  checks.push({locale,width,height,homepage200:true,artLoaded:true,taskRefreshLanguageStart:true,calculatorCSV:true});
 }
 assert.equal(errors.length,0);assert.equal(failures.length,0);
 const record={verifiedAt:new Date().toISOString(),browser:await browser.version(),bundle:'prism-static-preview.zip',externalRequestsBlocked:true,checks,errors,failures};
 await writeFile(new URL('bundle-check.json',output),JSON.stringify(record,null,2)+'\n');console.log(JSON.stringify(record,null,2));
}finally{await browser.close();server.kill('SIGTERM');await rm(folder,{recursive:true,force:true});}
