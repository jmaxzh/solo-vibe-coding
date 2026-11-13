const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { resolveObjectURL } = require('node:buffer');
const { JSDOM, VirtualConsole } = require('jsdom');

const html = readFileSync(require.resolve('../index.html'), 'utf8');
const script = readFileSync(require.resolve('../app.js'), 'utf8');
const css = readFileSync(require.resolve('../style.css'), 'utf8');
const storageKey = 'solo-bookmarks-v1';
const saved = [
  { id: 'old-design', title: '中文, "标题" 🌿', url: 'https://example.com/?q=中文&pair=a,b', category: '设计', note: '第一行, "要保留"\n第二行\r\n第三行\r末行' },
  { id: 'old-dev', title: '开发手册', url: 'https://example.com/dev', category: '开发', note: '保留常用操作。' },
  { id: 'old-product', title: '产品案例', url: 'https://example.com/product', category: '产品', note: '' },
];
const savedRaw = JSON.stringify(saved, null, 2);

function open(t, raw = savedRaw) {
  const errors = [];
  const console = new VirtualConsole();
  console.on('jsdomError', error => errors.push(error));
  const { window } = new JSDOM(html, { url: 'http://localhost/', runScripts: 'outside-only', virtualConsole: console });
  const $ = selector => window.document.querySelector(selector);
  if (raw !== null) window.localStorage.setItem(storageKey, raw);
  const writes = [];
  const setItem = window.Storage.prototype.setItem;
  window.Storage.prototype.setItem = function (key, value) { writes.push(key); return setItem.call(this, key, value); };
  const urls = new Set();
  const downloads = [];
  window.Blob = Blob;
  window.URL.createObjectURL = blob => { const url = URL.createObjectURL(blob); urls.add(url); return url; };
  window.URL.revokeObjectURL = url => { urls.delete(url); URL.revokeObjectURL(url); };
  // 仅替换浏览器的下载入口，CSV、Blob 和页面逻辑均使用真实实现。
  window.HTMLAnchorElement.prototype.click = function () {
    downloads.push({ filename: this.download, blob: resolveObjectURL(this.href), attached: this.isConnected });
  };
  const style = window.document.createElement('style');
  style.textContent = css;
  window.document.head.append(style);
  t.after(() => {
    window.close();
    for (const url of urls) URL.revokeObjectURL(url);
    assert.deepEqual(errors, []);
  });
  window.eval(script);
  const set = (selector, value, event = 'input') => {
    $(selector).value = value;
    $(selector).dispatchEvent(new window.Event(event, { bubbles: true }));
  };
  return { window, $, set, writes, downloads };
}

test('首次打开显示示例，不自动写入数据', t => {
  const app = open(t, null);
  assert.equal(app.window.document.querySelectorAll('article').length, 3);
  assert.equal(app.window.localStorage.getItem(storageKey), null);
  assert.deepEqual(app.writes, []);
});

test('已有收藏原样读取', t => {
  const app = open(t);
  assert.equal(app.$('article a').textContent, saved[0].title);
  assert.equal(app.$('article p').textContent, saved[0].note);
  assert.equal(app.window.localStorage.getItem(storageKey), savedRaw);
  assert.deepEqual(app.writes, []);
});

test('新增、搜索、分类筛选、删除和重新加载保存的数据', t => {
  const app = open(t);
  app.set('#title', '新的收藏');
  app.set('#url', 'https://example.com/new');
  app.set('#category', '开发', 'change');
  app.set('#note', '新增, "备注"\n下一行');
  app.$('button[type="submit"]').click();
  assert.equal(app.$('#count').textContent, '4 条收藏');
  assert.equal(app.$('#title').value, '');

  const reloaded = open(t, app.window.localStorage.getItem(storageKey));
  reloaded.set('#filter', '开发', 'change');
  assert.equal(reloaded.$('#count').textContent, '2 条收藏');
  reloaded.set('#search', '新增,');
  assert.equal(reloaded.$('#count').textContent, '1 条收藏');
  reloaded.set('#search', '新的收藏');
  assert.equal(reloaded.$('#count').textContent, '1 条收藏');
  reloaded.set('#search', '不存在');
  assert.equal(reloaded.$('.empty').textContent, '还没有匹配的收藏。');
  reloaded.set('#search', '新的收藏');
  reloaded.$('.delete').click();
  assert.equal(reloaded.$('#count').textContent, '0 条收藏');
  assert.equal(reloaded.window.localStorage.getItem(storageKey), JSON.stringify(saved));
  const final = open(t, reloaded.window.localStorage.getItem(storageKey));
  assert.equal(final.$('#count').textContent, '3 条收藏');
});

test('导出全部收藏：UTF-8 BOM、四列、CRLF、中文、逗号、引号、多种换行和空备注', async t => {
  const app = open(t);
  assert.ok(app.$('#export'));
  const expected = '\uFEFF"标题","网址","分类","备注"\r\n'
    + '"中文, ""标题"" 🌿","https://example.com/?q=中文&pair=a,b","设计","第一行, ""要保留""\n第二行\r\n第三行\r末行"\r\n'
    + '"开发手册","https://example.com/dev","开发","保留常用操作。"\r\n'
    + '"产品案例","https://example.com/product","产品",""\r\n';
  app.set('#filter', '开发', 'change');
  for (const query of ['保留', '没有结果']) {
    app.set('#search', query);
    app.$('#export').click();
    const download = app.downloads.at(-1);
    assert.equal(download.filename, '拾页收藏.csv');
    assert.equal(download.attached, true);
    assert.equal(download.blob.type, 'text/csv;charset=utf-8');
    const bytes = Buffer.from(await download.blob.arrayBuffer());
    assert.deepEqual([...bytes.subarray(0, 3)], [0xef, 0xbb, 0xbf]);
    assert.equal(bytes.toString('utf8'), expected);
    assert.equal(app.$('#search').value, query);
    assert.equal(app.$('#filter').value, '开发');
    assert.equal(app.$('#count').textContent, query === '保留' ? '1 条收藏' : '0 条收藏');
    assert.equal(app.$('#export-status').textContent, '已开始下载全部 3 条收藏。');
    assert.equal(app.$('a[download]'), null);
  }
  assert.equal(app.downloads.length, 2);
  assert.deepEqual(app.writes, []);
  assert.equal(app.window.localStorage.getItem(storageKey), savedRaw);
});

test('空收藏禁用导出；新增后下载最新内容；删除最后一条后保持空数据', async t => {
  const app = open(t, '[]');
  assert.ok(app.$('#export'));
  assert.equal(app.$('#export').disabled, true);
  assert.equal(app.$('#export-status').textContent, '暂无收藏可导出。');
  app.$('#export').click();
  assert.equal(app.downloads.length, 0);
  app.set('#title', '唯一收藏');
  app.set('#url', 'https://example.com/one');
  app.set('#category', '产品', 'change');
  app.set('#note', ' , "空白也保留"\n末行 ');
  app.$('button[type="submit"]').click();
  assert.equal(app.$('#export').disabled, false);
  app.$('#export').click();
  const bytes = Buffer.from(await app.downloads[0].blob.arrayBuffer());
  assert.equal(bytes.toString('utf8'), '\uFEFF"标题","网址","分类","备注"\r\n"唯一收藏","https://example.com/one","产品"," , ""空白也保留""\n末行 "\r\n');
  app.$('.delete').click();
  assert.equal(app.$('#export').disabled, true);
  const reloaded = open(t, app.window.localStorage.getItem(storageKey));
  assert.equal(reloaded.$('#count').textContent, '0 条收藏');
  assert.equal(reloaded.$('#export').disabled, true);
});

test('下载启动失败可重试，且不写入收藏数据', async t => {
  const app = open(t);
  assert.ok(app.$('#export'));
  const create = app.window.URL.createObjectURL;
  app.window.URL.createObjectURL = () => { throw new Error('下载不可用'); };
  app.$('#export').click();
  assert.equal(app.$('#export-status').textContent, '下载未能开始，请重试。');
  assert.equal(app.downloads.length, 0);
  assert.equal(app.$('a[download]'), null);
  app.window.URL.createObjectURL = create;
  app.$('#export').click();
  assert.equal(app.downloads.length, 1);
  assert.deepEqual(app.writes, []);
  assert.equal(app.window.localStorage.getItem(storageKey), savedRaw);
});

test('导出按钮具有触屏尺寸、可换行布局及无障碍提示', t => {
  const app = open(t);
  const button = app.$('#export');
  assert.ok(button);
  assert.equal(button.type, 'button');
  assert.ok(parseFloat(app.window.getComputedStyle(button).minHeight) >= 44);
  assert.equal(app.window.getComputedStyle(app.$('.section-title')).flexWrap, 'wrap');
  const status = app.window.document.getElementById(button.getAttribute('aria-describedby'));
  assert.equal(status.getAttribute('role'), 'status');
});
