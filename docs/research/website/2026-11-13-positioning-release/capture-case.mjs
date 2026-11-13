import { createRequire } from 'node:module';
import { createServer } from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve, extname, join } from 'node:path';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';

const require = createRequire(new URL('../../../../website/package.json', import.meta.url));
const { chromium } = require('@playwright/test');
const archive = fileURLToPath(new URL('.', import.meta.url));
const destination = fileURLToPath(new URL('../../../../website/public/case-study/', import.meta.url));
await mkdir(destination, { recursive: true });
const browser = await chromium.launch({ channel: 'chrome' });
const records = [];
try {
  for (const round of [1, 2]) {
    const project = resolve(archive, `executions/20261113T080111644441Z/01-b/round-${round}/project`);
    const server = createServer(async (request, response) => {
      try {
        const pathname = new URL(request.url, 'http://localhost').pathname;
        const file = resolve(project, '.' + (pathname.endsWith('/') ? pathname + 'index.html' : pathname));
        if (!file.startsWith(project + '/')) { response.writeHead(403).end(); return; }
        const body = await readFile(file);
        response.writeHead(200, { 'Content-Type': { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8' }[extname(file)] ?? 'application/octet-stream' }).end(body);
      } catch { response.writeHead(404).end(); }
    });
    await new Promise(done => server.listen(0, '127.0.0.1', done));
    const context = await browser.newContext({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 1 });
    try {
      const page = await context.newPage();
      await page.goto(`http://127.0.0.1:${server.address().port}/`, { waitUntil: 'networkidle' });
      if (round === 2) {
        await page.getByLabel('搜索收藏', { exact: true }).fill('界面');
        await page.getByLabel('筛选分类', { exact: true }).selectOption('设计');
      }
      assert(await page.getByRole('button', { name: /导出收藏/ }).isEnabled());
      const download = page.waitForEvent('download');
      await page.getByRole('button', { name: /导出收藏/ }).click();
      const csv = (await readFile(await (await download).path())).toString('utf8');
      assert(csv.includes('界面灵感'));
      assert.equal(csv.includes('开发手册'), round === 1);
      const file = `bookmarks-round-${round}.png`;
      await page.screenshot({ path: join(destination, file), fullPage: true });
      const sourceFiles = {};
      for (const name of ['index.html', 'style.css', 'app.js', 'README.md', 'CONSTRAINTS.md', 'tests/app.test.cjs']) sourceFiles[name] = createHash('sha256').update(await readFile(join(project, name))).digest('hex');
      records.push({ round, subject: '01-b', condition: 'skill-enabled', execution: '20261113T080111644441Z', viewport: { width: 1280, height: 900 }, data: 'Three original project defaults', search: round === 2 ? '界面' : '', category: round === 2 ? '设计' : '', publicFile: file, imageSHA256: createHash('sha256').update(await readFile(join(destination, file))).digest('hex'), sourceFiles });
    } finally { await context.close(); await new Promise(done => server.close(done)); }
  }
  await writeFile(join(archive, 'screenshots.json'), JSON.stringify({ capturedAt: new Date().toISOString(), records }, null, 2) + '\n');
  console.log(JSON.stringify({ captured: records.length, destination }));
} finally { await browser.close(); }
