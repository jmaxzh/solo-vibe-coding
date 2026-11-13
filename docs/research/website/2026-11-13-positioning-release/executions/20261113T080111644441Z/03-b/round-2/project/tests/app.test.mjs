import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { JSDOM } from 'jsdom';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const script = readFileSync(new URL('../app.js', import.meta.url), 'utf8');
const storageKey = 'solo-bookmarks-v1';
const saved = [
  { id: 'old-design', title: '中文收藏, "标题" 📚', url: 'https://example.com/read?a=1&b=2', category: '设计', note: '第一行,保留逗号\n第二行说："你好"\r\n第三行\r结尾' },
  { id: 'old-dev', title: 'Node 开发手册', url: 'https://example.org/', category: '开发', note: '' },
  { id: 'old-product', title: '产品案例', url: 'https://example.net/', category: '产品', note: '  前后空格  ' },
];

function openApp(t, bookmarks = saved) {
  const dom = new JSDOM(html, { url: 'http://127.0.0.1:4400/', runScripts: 'outside-only' });
  const { window } = dom;
  t.after(() => window.close());
  window.localStorage.setItem(storageKey, JSON.stringify(bookmarks));
  const downloads = [];
  const blobs = new Map();
  const revoked = [];
  const timers = [];
  window.Blob = Blob;
  window.URL.createObjectURL = blob => {
    const url = `blob:test-${blobs.size}`;
    blobs.set(url, blob);
    return url;
  };
  window.URL.revokeObjectURL = url => revoked.push(url);
  window.HTMLAnchorElement.prototype.click = function () {
    downloads.push({ blob: blobs.get(this.href), name: this.download, attached: this.isConnected });
  };
  window.setTimeout = (callback, delay) => { timers.push({ callback, delay }); return timers.length; };
  window.eval(script);
  const document = window.document;
  const change = (selector, value, event = 'input') => {
    const element = document.querySelector(selector);
    element.value = value;
    element.dispatchEvent(new window.Event(event, { bubbles: true }));
  };
  return { window, document, downloads, revoked, timers, change };
}

test('原有收藏原样加载，不改写存储', t => {
  const { window, document } = openApp(t);
  assert.equal(document.querySelectorAll('.bookmark').length, saved.length);
  assert.deepEqual([...document.querySelectorAll('.bookmark a')].map(link => link.textContent), saved.map(item => item.title));
  assert.equal(document.querySelector('.bookmark p').textContent, saved[0].note);
  assert.equal(window.localStorage.getItem(storageKey), JSON.stringify(saved));
});

test('标题、备注搜索和分类筛选仍然可以组合使用', t => {
  const { document, change } = openApp(t);
  change('#search', 'NODE');
  assert.equal(document.querySelectorAll('.bookmark').length, 1);
  assert.equal(document.querySelector('.bookmark a').textContent, saved[1].title);
  change('#filter', '设计', 'change');
  assert.equal(document.querySelectorAll('.bookmark').length, 0);
  change('#search', '你好');
  assert.equal(document.querySelector('.bookmark a').textContent, saved[0].title);
  change('#search', '');
  change('#filter', '', 'change');
  assert.equal(document.querySelectorAll('.bookmark').length, saved.length);
});

test('新增、重新加载和删除保留其他已保存数据', t => {
  const app = openApp(t);
  app.change('#title', '新增收藏');
  app.change('#url', 'https://example.com/new');
  app.change('#category', '产品', 'change');
  app.change('#note', '新备注,含"引号"\n第二行');
  app.document.querySelector('#add-form').requestSubmit();
  const stored = JSON.parse(app.window.localStorage.getItem(storageKey));
  assert.equal(stored.length, saved.length + 1);
  assert.equal(stored[0].title, '新增收藏');
  assert.equal(stored[0].note, '新备注,含"引号"\n第二行');
  assert.deepEqual(stored.slice(1), saved);
  assert.equal(app.document.querySelector('#title').value, '');
  const reloaded = openApp(t, stored);
  assert.equal(reloaded.document.querySelector('.bookmark a').textContent, '新增收藏');
  reloaded.document.querySelector('.bookmark .delete').click();
  assert.deepEqual(JSON.parse(reloaded.window.localStorage.getItem(storageKey)), saved);
});

test('未筛选时导出全部收藏，CSV 字节兼容中文及特殊字符', async t => {
  const { window, document, downloads, revoked, timers, change } = openApp(t);
  const button = document.querySelector('#export');
  assert.ok(button, '收藏区应提供导出按钮');
  assert.equal(button.type, 'button');
  assert.equal(button.textContent, '导出收藏');
  assert.match(button.title, /当前.*搜索.*分类/);
  change('#note', '未提交的草稿');
  assert.equal(document.querySelectorAll('.bookmark').length, saved.length);
  assert.equal(button.disabled, false);
  button.click();
  assert.equal(downloads.length, 1);
  assert.equal(downloads[0].name, '拾页收藏.csv');
  assert.equal(downloads[0].attached, true);
  assert.match(downloads[0].blob.type, /^text\/csv;charset=utf-8/);
  const bytes = Buffer.from(await downloads[0].blob.arrayBuffer());
  const expected = '\uFEFF"标题","网址","分类","备注"\r\n'
    + '"中文收藏, ""标题"" 📚","https://example.com/read?a=1&b=2","设计","第一行,保留逗号\n第二行说：""你好""\r\n第三行\r结尾"\r\n'
    + '"Node 开发手册","https://example.org/","开发",""\r\n'
    + '"产品案例","https://example.net/","产品","  前后空格  "\r\n';
  assert.deepEqual([...bytes.subarray(0, 3)], [0xEF, 0xBB, 0xBF]);
  assert.equal(bytes.toString('utf8'), expected);
  assert.equal(window.localStorage.getItem(storageKey), JSON.stringify(saved));
  assert.equal(document.querySelector('#search').value, '');
  assert.equal(document.querySelector('#filter').value, '');
  assert.equal(document.querySelector('#note').value, '未提交的草稿');
  assert.equal(document.querySelectorAll('.bookmark').length, saved.length);
  assert.match(document.querySelector('#export-status').textContent, /下载.*3 条收藏/);
  assert.equal(document.querySelectorAll('a[download]').length, 0);
  assert.deepEqual(revoked, []);
  assert.equal(timers.length, 1);
  assert.ok(timers[0].delay > 0, '下载链接应延迟释放');
  timers[0].callback();
  assert.deepEqual(revoked, ['blob:test-0']);
  button.click();
  assert.equal(downloads.length, 2);
  timers[1].callback();
  assert.deepEqual(revoked, ['blob:test-0', 'blob:test-1']);
});

const header = '\uFEFF"标题","网址","分类","备注"\r\n';
const designRow = '"中文收藏, ""标题"" 📚","https://example.com/read?a=1&b=2","设计","第一行,保留逗号\n第二行说：""你好""\r\n第三行\r结尾"\r\n';
const devRow = '"Node 开发手册","https://example.org/","开发",""\r\n';
const productRow = '"产品案例","https://example.net/","产品","  前后空格  "\r\n';
const extra = { id: 'node-product', title: 'Node 产品指南', url: 'https://example.com/node', category: '产品', note: '使用手册' };
const extraRow = '"Node 产品指南","https://example.com/node","产品","使用手册"\r\n';

for (const scenario of [
  { name: '标题搜索忽略首尾空格及大小写', query: '  nOdE  ', category: '', expected: [saved[1], extra], csv: devRow + extraRow },
  { name: '备注搜索', query: '你好', category: '', expected: [saved[0]], csv: designRow },
  { name: '仅分类筛选', query: '', category: '产品', expected: [saved[2], extra], csv: productRow + extraRow },
  { name: '搜索与分类组合筛选', query: 'node', category: '产品', expected: [extra], csv: extraRow },
]) {
  test(`${scenario.name}后只导出可见收藏，并保留顺序与草稿`, async t => {
    const { window, document, downloads, change } = openApp(t, [...saved, extra]);
    change('#search', scenario.query);
    change('#filter', scenario.category, 'change');
    change('#title', '未提交的标题');
    change('#note', '未提交的备注');
    assert.deepEqual([...document.querySelectorAll('.bookmark a')].map(link => link.textContent), scenario.expected.map(item => item.title));
    document.querySelector('#export').click();
    assert.equal(downloads.length, 1);
    assert.equal(downloads[0].name, '拾页收藏.csv');
    assert.equal(Buffer.from(await downloads[0].blob.arrayBuffer()).toString('utf8'), header + scenario.csv);
    assert.match(document.querySelector('#export-status').textContent, new RegExp(`下载.*${scenario.expected.length} 条收藏`));
    assert.equal(document.querySelector('#search').value, scenario.query);
    assert.equal(document.querySelector('#filter').value, scenario.category);
    assert.equal(document.querySelector('#title').value, '未提交的标题');
    assert.equal(document.querySelector('#note').value, '未提交的备注');
    assert.equal(window.localStorage.getItem(storageKey), JSON.stringify([...saved, extra]));
  });
}

for (const scenario of [
  { name: '搜索没有匹配项', query: '没有匹配的内容', category: '', bookmarks: saved },
  { name: '分类没有匹配项', query: '', category: '产品', bookmarks: saved.slice(0, 2) },
  { name: '搜索与分类的交集为空', query: 'node', category: '设计', bookmarks: saved },
]) {
  test(`${scenario.name}时提示并阻止导出`, t => {
    const { window, document, downloads, revoked, timers, change } = openApp(t, scenario.bookmarks);
    change('#search', scenario.query);
    change('#filter', scenario.category, 'change');
    const button = document.querySelector('#export');
    assert.equal(document.querySelectorAll('.bookmark').length, 0);
    assert.equal(button.disabled, true);
    assert.match(document.querySelector('#export-status').textContent, /没有匹配.*无法导出/);
    button.click();
    button.dispatchEvent(new window.MouseEvent('click', { bubbles: true }));
    assert.match(document.querySelector('#export-status').textContent, /没有匹配.*无法导出/);
    assert.equal(downloads.length, 0);
    assert.equal(document.querySelectorAll('a[download]').length, 0);
    assert.equal(timers.length, 0);
    assert.deepEqual(revoked, []);
    assert.equal(window.localStorage.getItem(storageKey), JSON.stringify(scenario.bookmarks));
  });
}

test('调整筛选会清除过期反馈，清除搜索并选择全部分类后恢复导出全部', async t => {
  const { window, document, downloads, change } = openApp(t);
  const button = document.querySelector('#export');
  change('#search', 'node');
  change('#filter', '设计', 'change');
  assert.equal(button.disabled, true);
  change('#search', '');
  assert.equal(button.disabled, false);
  assert.equal(document.querySelector('#export-status').textContent, '');
  button.click();
  assert.equal(Buffer.from(await downloads[0].blob.arrayBuffer()).toString('utf8'), header + designRow);
  change('#search', 'node');
  assert.equal(button.disabled, true);
  assert.match(document.querySelector('#export-status').textContent, /没有匹配.*无法导出/);
  change('#filter', '', 'change');
  assert.equal(button.disabled, false);
  assert.equal(document.querySelector('#export-status').textContent, '');
  button.click();
  assert.equal(Buffer.from(await downloads[1].blob.arrayBuffer()).toString('utf8'), header + devRow);
  change('#search', '');
  assert.equal(document.querySelector('#export-status').textContent, '');
  button.click();
  assert.equal(downloads.length, 3);
  assert.equal(Buffer.from(await downloads[2].blob.arrayBuffer()).toString('utf8'), header + designRow + devRow + productRow);
  assert.equal(window.localStorage.getItem(storageKey), JSON.stringify(saved));
});

test('空收藏禁用导出；新增后导出最新内容，删除最后一条后恢复禁用', async t => {
  const { window, document, downloads, change } = openApp(t, []);
  const button = document.querySelector('#export');
  assert.ok(button, '收藏区应提供导出按钮');
  assert.equal(button.disabled, true);
  button.click();
  assert.equal(downloads.length, 0);
  change('#title', '新收藏');
  change('#url', 'https://example.com/new?q=a,b');
  document.querySelector('#add-form').requestSubmit();
  assert.equal(button.disabled, false);
  button.click();
  assert.equal(downloads.length, 1);
  assert.equal(Buffer.from(await downloads[0].blob.arrayBuffer()).toString('utf8'),
    '\uFEFF"标题","网址","分类","备注"\r\n"新收藏","https://example.com/new?q=a,b","设计",""\r\n');
  document.querySelector('.delete').click();
  assert.equal(button.disabled, true);
  assert.equal(window.localStorage.getItem(storageKey), '[]');
  assert.equal(openApp(t, []).document.querySelector('#export').disabled, true);
});

test('下载失败有反馈，清理临时资源且允许重试，不改写收藏', t => {
  const { window, document, downloads, revoked, timers } = openApp(t);
  const button = document.querySelector('#export');
  assert.ok(button, '收藏区应提供导出按钮');
  const click = window.HTMLAnchorElement.prototype.click;
  window.HTMLAnchorElement.prototype.click = () => { throw new Error('下载不可用'); };
  button.click();
  assert.match(document.querySelector('#export-status').textContent, /失败.*重试/);
  assert.equal(document.querySelectorAll('a[download]').length, 0);
  assert.equal(window.localStorage.getItem(storageKey), JSON.stringify(saved));
  timers[0].callback();
  assert.deepEqual(revoked, ['blob:test-0']);
  window.HTMLAnchorElement.prototype.click = click;
  button.click();
  assert.equal(downloads.length, 1);
  assert.match(document.querySelector('#export-status').textContent, /下载/);
});

test('创建下载文件失败时保留数据并显示反馈', t => {
  const { window, document, downloads, timers } = openApp(t);
  const button = document.querySelector('#export');
  assert.ok(button, '收藏区应提供导出按钮');
  window.URL.createObjectURL = () => { throw new Error('创建文件失败'); };
  button.click();
  assert.match(document.querySelector('#export-status').textContent, /失败.*重试/);
  assert.equal(downloads.length, 0);
  assert.equal(timers.length, 0);
  assert.equal(document.querySelectorAll('a[download]').length, 0);
  assert.equal(window.localStorage.getItem(storageKey), JSON.stringify(saved));
});
