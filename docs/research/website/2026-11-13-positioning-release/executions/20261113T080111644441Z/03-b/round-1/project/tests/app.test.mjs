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

test('点击导出下载全部收藏，CSV 字节兼容中文及特殊字符', async t => {
  const { window, document, downloads, revoked, timers, change } = openApp(t);
  const button = document.querySelector('#export');
  assert.ok(button, '收藏区应提供导出按钮');
  assert.equal(button.type, 'button');
  assert.equal(button.textContent, '导出收藏');
  change('#search', '没有匹配的内容');
  change('#filter', '产品', 'change');
  change('#note', '未提交的草稿');
  assert.equal(document.querySelectorAll('.bookmark').length, 0);
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
  assert.equal(document.querySelector('#search').value, '没有匹配的内容');
  assert.equal(document.querySelector('#filter').value, '产品');
  assert.equal(document.querySelector('#note').value, '未提交的草稿');
  assert.equal(document.querySelectorAll('.bookmark').length, 0);
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
