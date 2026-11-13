import { createRequire } from 'node:module';
import { createServer } from 'node:http';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve, extname, join } from 'node:path';
import assert from 'node:assert/strict';

const require = createRequire(new URL('../../../../website/package.json', import.meta.url));
const { chromium } = require('@playwright/test');
const [directory, roundText, destination] = process.argv.slice(2);
const root = resolve(directory);
const round = Number(roundText);
const dataset = [
  { id: 'design', title: '界面灵感', url: 'https://example.com/design', category: '设计', note: '下次做页面时看看。' },
  { id: 'development', title: '开发手册', url: 'https://example.com/development', category: '开发', note: '保留常用操作。' },
  { id: 'product', title: '产品案例', url: 'https://example.com/product', category: '产品', note: '看看别人怎么介绍产品。' },
  { id: 'special', title: '中文，设计 "灵感"', url: 'https://example.com/special?a=1&b=2', category: '设计', note: '第一行,第二列\n他说 "好"' },
  { id: 'search-only', title: '中文开发参考', url: 'https://example.com/chinese-development', category: '开发', note: '同一个搜索词，不同分类。' },
];
const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const file = resolve(root, '.' + (pathname.endsWith('/') ? pathname + 'index.html' : pathname));
    if (!file.startsWith(root + '/')) { response.writeHead(403).end(); return; }
    const body = await readFile(file);
    const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json' };
    response.writeHead(200, { 'Content-Type': mime[extname(file)] ?? 'application/octet-stream' }).end(body);
  } catch { response.writeHead(404).end(); }
});
await new Promise(done => server.listen(0, '127.0.0.1', done));
const browser = await chromium.launch({ channel: 'chrome' });
const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
await context.addInitScript(({ dataset }) => {
  if (!localStorage.getItem('solo-bookmarks-v1')) localStorage.setItem('solo-bookmarks-v1', JSON.stringify(dataset));
}, { dataset });
const page = await context.newPage();
page.setDefaultTimeout(5000);
const checks = [], errors = [];
page.on('pageerror', error => errors.push(error.message));
const reportDirectory = resolve(destination, '..');
await mkdir(reportDirectory, { recursive: true });
async function check(id, action) {
  try { await action(); checks.push({ id, passed: true }); }
  catch (error) { checks.push({ id, passed: false, error: String(error.message).slice(0, 1000) }); }
}
const exportButton = () => page.getByRole('button', { name: /导出收藏/ }).first();
async function download() {
  const event = page.waitForEvent('download', { timeout: 5000 });
  event.catch(() => {});
  try { await exportButton().click(); } catch (error) { await event.catch(() => {}); throw error; }
  const file = await event;
  assert.match(file.suggestedFilename(), /\.csv$/i);
  return readFile(await file.path());
}
function parseCSV(buffer) {
  const text = buffer.toString('utf8').replace(/^\uFEFF/, '');
  const rows = []; let row = [], field = '', quoted = false;
  for (let i = 0; i < text.length; i++) {
    const character = text[i];
    if (quoted) {
      if (character === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (character === '"') quoted = false;
      else field += character;
    } else if (character === '"') quoted = true;
    else if (character === ',') { row.push(field); field = ''; }
    else if (character === '\r' || character === '\n') {
      if (character === '\r' && text[i + 1] === '\n') i++;
      row.push(field); if (row.some(cell => cell !== '')) rows.push(row); row = []; field = '';
    } else field += character;
  }
  assert.equal(quoted, false, 'CSV contains an unterminated quoted field.');
  if (row.length || field) { row.push(field); rows.push(row); }
  const header = rows.shift() ?? [];
  const columns = [['标题', 'title'], ['网址', '链接', 'url'], ['分类', 'category'], ['备注', 'note', 'notes']].map(names => header.findIndex(cell => names.includes(cell.trim().toLowerCase())));
  assert(columns.every(index => index >= 0), 'CSV must include title, URL, category and note columns.');
  return rows.map(row => columns.map(index => (row[index] ?? '').replaceAll('\r\n', '\n')));
}
function expectRows(buffer, expected) {
  const actual = parseCSV(buffer).map(row => JSON.stringify(row)).sort();
  const wanted = expected.map(item => JSON.stringify([item.title, item.url, item.category, item.note])).sort();
  assert.deepEqual(actual, wanted);
}
try {
  await page.goto(`http://127.0.0.1:${server.address().port}/`, { waitUntil: 'networkidle' });
  await check('saved-data', async () => {
    for (const item of dataset) assert(await page.getByRole('link', { name: item.title, exact: true }).isVisible());
  });
  let fullCSV;
  await check('download-encoding', async () => {
    fullCSV = await download();
    await writeFile(join(reportDirectory, 'all-bookmarks.csv'), fullCSV);
    assert.deepEqual([...fullCSV.subarray(0, 3)], [239, 187, 191], 'Expected UTF-8 BOM for the requested Windows Excel use.');
  });
  await check('csv-fields-and-special-characters', async () => {
    fullCSV ??= await download(); expectRows(fullCSV, dataset);
  });
  await check('add-and-reload', async () => {
    await page.getByLabel('标题', { exact: true }).fill('追加的收藏');
    await page.getByLabel('网址', { exact: true }).fill('https://example.com/new');
    await page.getByLabel('分类', { exact: true }).selectOption('开发');
    await page.getByLabel('备注', { exact: true }).fill('新加的数据也要保留');
    await page.getByRole('button', { name: '添加收藏', exact: true }).click();
    await page.reload({ waitUntil: 'networkidle' });
    assert(await page.getByRole('link', { name: '追加的收藏', exact: true }).isVisible());
  });
  await check('search', async () => {
    await page.getByLabel('搜索收藏', { exact: true }).fill('中文');
    assert(await page.getByRole('link', { name: dataset[3].title, exact: true }).isVisible());
    assert(!await page.getByRole('link', { name: '开发手册', exact: true }).isVisible());
    await page.getByLabel('搜索收藏', { exact: true }).fill('');
  });
  await check('category-filter', async () => {
    await page.getByLabel('搜索收藏', { exact: true }).fill('');
    await page.getByLabel('筛选分类', { exact: true }).selectOption('设计');
    assert(await page.getByRole('link', { name: '界面灵感', exact: true }).isVisible());
    assert(!await page.getByRole('link', { name: '开发手册', exact: true }).isVisible());
    await page.getByLabel('筛选分类', { exact: true }).selectOption('');
  });
  await check('delete', async () => {
    await page.getByLabel('搜索收藏', { exact: true }).fill('');
    await page.getByLabel('筛选分类', { exact: true }).selectOption('');
    await page.getByRole('button', { name: '删除 追加的收藏', exact: true }).click();
    assert(!await page.getByRole('link', { name: '追加的收藏', exact: true }).isVisible());
    await page.reload({ waitUntil: 'networkidle' });
    assert(!await page.getByRole('link', { name: '追加的收藏', exact: true }).isVisible());
  });
  if (round === 2) {
    await check('search-only-export', async () => {
      await page.getByLabel('搜索收藏', { exact: true }).fill('中文');
      await page.getByLabel('筛选分类', { exact: true }).selectOption('');
      expectRows(await download(), [dataset[3], dataset[4]]);
    });
    await check('category-only-export', async () => {
      await page.getByLabel('搜索收藏', { exact: true }).fill('');
      await page.getByLabel('筛选分类', { exact: true }).selectOption('设计');
      expectRows(await download(), [dataset[0], dataset[3]]);
    });
    await check('filtered-export', async () => {
      await page.getByLabel('搜索收藏', { exact: true }).fill('中文');
      await page.getByLabel('筛选分类', { exact: true }).selectOption('设计');
      const csv = await download(); await writeFile(join(reportDirectory, 'filtered-bookmarks.csv'), csv); expectRows(csv, [dataset[3]]);
    });
    await check('empty-filter', async () => {
      await page.getByLabel('搜索收藏', { exact: true }).fill('完全没有这个标题');
      assert.match(await page.locator('body').innerText(), /没有|暂无|无匹配|0\s*条/);
      if (await exportButton().isDisabled()) return;
      const event = page.waitForEvent('download', { timeout: 2000 }).catch(() => null);
      await exportButton().click(); const file = await event;
      if (file) expectRows(await readFile(await file.path()), []);
    });
    await check('clear-filter-export', async () => {
      await page.getByLabel('搜索收藏', { exact: true }).fill('');
      await page.getByLabel('筛选分类', { exact: true }).selectOption('');
      expectRows(await download(), dataset);
    });
  }
  await check('mobile-layout-and-export', async () => {
    await page.getByLabel('搜索收藏', { exact: true }).fill('');
    await page.getByLabel('筛选分类', { exact: true }).selectOption('');
    await page.setViewportSize({ width: 390, height: 844 });
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    await exportButton().scrollIntoViewIfNeeded();
    assert(await exportButton().isVisible()); expectRows(await download(), dataset);
    await page.screenshot({ path: join(reportDirectory, 'mobile.png'), fullPage: true });
  });
  await check('no-script-errors', async () => assert.deepEqual(errors, []));
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.screenshot({ path: join(reportDirectory, 'desktop.png'), fullPage: true });
} finally {
  const report = { checkedAt: new Date().toISOString(), round, browser: await browser.version(), checks, passed: checks.filter(item => item.passed).length, total: checks.length, errors };
  await writeFile(destination, JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify(report)); await browser.close(); await new Promise(done => server.close(done));
}
