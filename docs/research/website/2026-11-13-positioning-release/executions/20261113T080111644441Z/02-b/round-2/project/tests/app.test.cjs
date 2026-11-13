const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { resolve } = require('node:path');
const { test } = require('node:test');
const { JSDOM } = require('jsdom');

const root = resolve(__dirname, '..');
const html = readFileSync(resolve(root, 'index.html'), 'utf8');
const storageKey = 'solo-bookmarks-v1';
const saved = [
  { id: 'old-design', title: '旧的设计收藏', url: 'https://example.com/design', category: '设计', note: '保留原有备注。' },
  { id: 'old-dev', title: 'Node 手册', url: 'https://example.com/dev?a=1&b=2', category: '开发', note: '常用操作' },
];

function openApp(t, bookmarks) {
  const dom = new JSDOM(html, { url: 'http://localhost:4400/', runScripts: 'outside-only' });
  t.after(() => dom.window.close());
  const { window } = dom;
  const { document } = window;
  if (bookmarks !== undefined) window.localStorage.setItem(storageKey, JSON.stringify(bookmarks));
  const writes = [];
  const setItem = window.Storage.prototype.setItem;
  window.Storage.prototype.setItem = function (key, value) {
    writes.push([key, value]);
    return setItem.call(this, key, value);
  };
  const blobs = [];
  const downloads = [];
  const revoked = [];
  const timers = [];
  window.Blob = Blob;
  window.URL.createObjectURL = blob => {
    blobs.push(blob);
    return `blob:export-${blobs.length}`;
  };
  window.URL.revokeObjectURL = url => revoked.push(url);
  window.HTMLAnchorElement.prototype.click = function () {
    assert.ok(this.isConnected, '下载链接应先加入文档');
    downloads.push({ href: this.href, name: this.download });
  };
  window.setTimeout = (callback, delay) => { timers.push({ callback, delay }); return timers.length; };
  for (const script of document.querySelectorAll('script[src]')) {
    window.eval(readFileSync(resolve(root, script.getAttribute('src')), 'utf8'));
  }
  return { window, document, writes, blobs, downloads, revoked, timers };
}

function input(app, id, value, event = 'input') {
  const element = app.document.querySelector(id);
  element.value = value;
  element.dispatchEvent(new app.window.Event(event, { bubbles: true }));
}

test('读取已有收藏及空列表，不覆盖浏览器数据', t => {
  const app = openApp(t, saved);
  assert.deepEqual([...app.document.querySelectorAll('.bookmark a')].map(link => link.textContent), saved.map(item => item.title));
  assert.equal(app.document.querySelector('#count').textContent, '2 条收藏');
  assert.deepEqual(app.writes, []);
  assert.equal(app.window.localStorage.getItem(storageKey), JSON.stringify(saved));
  const empty = openApp(t, []);
  assert.equal(empty.document.querySelectorAll('.bookmark').length, 0);
  assert.deepEqual(empty.writes, []);
});

test('搜索和分类筛选继续组合生效，且不写入存储', t => {
  const app = openApp(t, saved);
  input(app, '#search', 'node');
  assert.equal(app.document.querySelectorAll('.bookmark').length, 1);
  assert.equal(app.document.querySelector('.bookmark a').textContent, 'Node 手册');
  input(app, '#filter', '设计', 'change');
  assert.equal(app.document.querySelectorAll('.bookmark').length, 0);
  input(app, '#search', '备注');
  assert.equal(app.document.querySelector('.bookmark a').textContent, '旧的设计收藏');
  assert.deepEqual(app.writes, []);
});

test('新增、删除与重新打开页面保留收藏和完整备注', t => {
  const app = openApp(t, saved);
  input(app, '#title', '新收藏');
  input(app, '#url', 'https://example.com/new');
  input(app, '#category', '产品', 'change');
  input(app, '#note', '逗号, 引号"\n第二行');
  const form = app.document.querySelector('#add-form');
  form.dispatchEvent(new app.window.Event('submit', { bubbles: true, cancelable: true }));
  const added = JSON.parse(app.window.localStorage.getItem(storageKey));
  assert.equal(added.length, 3);
  assert.deepEqual(added.slice(1), saved);
  assert.equal(added[0].note, '逗号, 引号"\n第二行');
  assert.equal(app.document.querySelector('#title').value, '');
  app.document.querySelector('.bookmark .delete').click();
  const remaining = JSON.parse(app.window.localStorage.getItem(storageKey));
  assert.deepEqual(remaining, saved);
  const reopened = openApp(t, remaining);
  assert.equal(reopened.document.querySelectorAll('.bookmark').length, 2);
  assert.deepEqual(reopened.writes, []);
});

test('下载 CSV 的字节适合 Excel，中文、逗号、双引号和单元格内换行保持完整', async t => {
  const bookmarks = [
    { id: 'complex', title: '中文, "收藏" 🧡', url: 'https://example.com/?q=中文,2', category: '设计', note: '  第一行, 有"引号"\n第二行\r\n第三行\r第四行  ' },
    { id: 'blank', title: '空备注', url: 'https://example.com/empty', category: '开发', note: '' },
  ];
  const app = openApp(t, bookmarks);
  const button = app.document.querySelector('#export');
  assert.ok(button, '应有“导出收藏”按钮');
  assert.equal(button.type, 'button');
  assert.equal(button.textContent, '导出收藏');
  button.click();
  assert.equal(app.blobs.length, 1);
  assert.equal(app.blobs[0].type, 'text/csv;charset=utf-8');
  const bytes = Buffer.from(await app.blobs[0].arrayBuffer());
  assert.deepEqual(bytes.subarray(0, 3), Buffer.from([0xef, 0xbb, 0xbf]));
  const expected = '"标题","网址","分类","备注"\r\n'
    + '"中文, ""收藏"" 🧡","https://example.com/?q=中文,2","设计","  第一行, 有""引号""\n第二行\r\n第三行\r第四行  "\r\n'
    + '"空备注","https://example.com/empty","开发",""\r\n';
  assert.equal(bytes.subarray(3).toString('utf8'), expected);
  assert.deepEqual(app.downloads, [{ href: 'blob:export-1', name: '拾页收藏.csv' }]);
  assert.match(app.document.querySelector('#export-status').textContent, /2 条收藏/);
  assert.equal(app.document.querySelector('#export-status').getAttribute('role'), 'status');
  assert.deepEqual(app.writes, []);
  assert.equal(app.window.localStorage.getItem(storageKey), JSON.stringify(bookmarks));
});

test('搜索、分类及组合筛选仅导出当前显示的收藏，重复导出不改变数据', async t => {
  const bookmarks = [
    ...saved,
    { id: 'design-node', title: 'Node 界面笔记', url: 'https://example.com/node-design', category: '设计', note: '控件参考' },
    { id: 'product', title: '产品对照', url: 'https://example.com/product', category: '产品', note: '常用操作' },
  ];
  const rows = [
    '"旧的设计收藏","https://example.com/design","设计","保留原有备注。"\r\n',
    '"Node 手册","https://example.com/dev?a=1&b=2","开发","常用操作"\r\n',
    '"Node 界面笔记","https://example.com/node-design","设计","控件参考"\r\n',
    '"产品对照","https://example.com/product","产品","常用操作"\r\n',
  ];
  for (const scenario of [
    { name: '标题搜索忽略大小写和首尾空白', query: '  nOdE  ', category: '', expected: [1, 2] },
    { name: '备注搜索', query: '常用操作', category: '', expected: [1, 3] },
    { name: '仅分类筛选', query: '', category: '设计', expected: [0, 2] },
    { name: '搜索与分类取交集', query: 'node', category: '设计', expected: [2] },
  ]) {
    await t.test(scenario.name, async t => {
      const app = openApp(t, bookmarks);
      input(app, '#search', scenario.query);
      input(app, '#filter', scenario.category, 'change');
      assert.deepEqual([...app.document.querySelectorAll('.bookmark a')].map(link => link.textContent), scenario.expected.map(index => bookmarks[index].title));
      assert.equal(app.document.querySelector('#count').textContent, `${scenario.expected.length} 条收藏`);
      const button = app.document.querySelector('#export');
      assert.equal(button.disabled, false);
      assert.match(app.document.querySelector('#export-help').textContent, /当前显示/);
      button.click();
      button.click();
      assert.equal(app.blobs.length, 2);
      assert.equal(app.downloads.length, 2);
      const expected = '\uFEFF"标题","网址","分类","备注"\r\n' + scenario.expected.map(index => rows[index]).join('');
      for (const blob of app.blobs) {
        assert.equal(Buffer.from(await blob.arrayBuffer()).toString('utf8'), expected);
      }
      assert.equal(app.document.querySelector('#export-status').textContent, `已开始下载 ${scenario.expected.length} 条收藏。`);
      assert.deepEqual(app.writes, []);
      assert.equal(app.window.localStorage.getItem(storageKey), JSON.stringify(bookmarks));
      assert.equal(app.document.querySelector('#search').value, scenario.query);
      assert.equal(app.document.querySelector('#filter').value, scenario.category);
    });
  }
});

test('无匹配时清楚提示且不下载，清除搜索和分类后可导出全部', async t => {
  const app = openApp(t, saved);
  const button = app.document.querySelector('#export');
  button.click();
  assert.match(app.document.querySelector('#export-status').textContent, /已开始下载/);
  for (const scenario of [
    { query: '不存在的收藏', category: '' },
    { query: '', category: '产品' },
    { query: 'node', category: '设计' },
  ]) {
    input(app, '#search', scenario.query);
    input(app, '#filter', scenario.category, 'change');
    assert.equal(app.document.querySelectorAll('.bookmark').length, 0);
    assert.equal(button.disabled, true);
    assert.match(app.document.querySelector('#export-help').textContent, /没有匹配.*调整.*清除/);
    assert.equal(app.document.querySelector('#export-status').textContent, '', '筛选变化后清除旧的下载反馈');
    button.click();
    // 直接派发事件也必须阻止空结果回退到全部收藏。
    button.dispatchEvent(new app.window.Event('click', { bubbles: true }));
    assert.equal(app.blobs.length, 1);
    assert.equal(app.downloads.length, 1);
    assert.equal(app.timers.length, 1);
  }
  input(app, '#search', '');
  assert.equal(app.document.querySelectorAll('.bookmark').length, 1, '清空搜索后仍保留分类筛选');
  input(app, '#filter', '', 'change');
  assert.equal(app.document.querySelectorAll('.bookmark').length, saved.length);
  assert.equal(button.disabled, false);
  button.click();
  assert.equal(app.blobs.length, 2);
  const cleared = Buffer.from(await app.blobs[1].arrayBuffer());
  assert.deepEqual(cleared, Buffer.from(await app.blobs[0].arrayBuffer()));
  assert.equal(cleared.subarray(3).toString('utf8'), '"标题","网址","分类","备注"\r\n'
    + '"旧的设计收藏","https://example.com/design","设计","保留原有备注。"\r\n'
    + '"Node 手册","https://example.com/dev?a=1&b=2","开发","常用操作"\r\n');
  assert.deepEqual(app.writes, []);
  assert.equal(app.window.localStorage.getItem(storageKey), JSON.stringify(saved));
  assert.equal(app.document.querySelector('#search').value, '');
  assert.equal(app.document.querySelector('#filter').value, '');
});

test('筛选期间新增和删除收藏后，导出内容与按钮状态跟随列表更新', async t => {
  const app = openApp(t, saved);
  input(app, '#search', 'node');
  input(app, '#filter', '开发', 'change');
  input(app, '#title', 'Node 新收藏');
  input(app, '#url', 'https://example.com/new-node');
  input(app, '#category', '开发', 'change');
  input(app, '#note', '新备注');
  app.document.querySelector('#add-form').dispatchEvent(new app.window.Event('submit', { bubbles: true, cancelable: true }));
  const button = app.document.querySelector('#export');
  button.click();
  assert.equal(Buffer.from(await app.blobs[0].arrayBuffer()).toString('utf8'), '\uFEFF"标题","网址","分类","备注"\r\n'
    + '"Node 新收藏","https://example.com/new-node","开发","新备注"\r\n'
    + '"Node 手册","https://example.com/dev?a=1&b=2","开发","常用操作"\r\n');
  assert.equal(app.writes.length, 1, '导出不增加存储写入');
  app.document.querySelector('.bookmark .delete').click();
  button.click();
  assert.equal(Buffer.from(await app.blobs[1].arrayBuffer()).toString('utf8'), '\uFEFF"标题","网址","分类","备注"\r\n'
    + '"Node 手册","https://example.com/dev?a=1&b=2","开发","常用操作"\r\n');
  assert.equal(app.writes.length, 2, '删除后导出不增加存储写入');
  app.document.querySelector('.bookmark .delete').click();
  assert.equal(button.disabled, true);
  assert.match(app.document.querySelector('#export-help').textContent, /没有匹配/);
  button.click();
  assert.equal(app.blobs.length, 2);
  assert.deepEqual(JSON.parse(app.window.localStorage.getItem(storageKey)), [saved[0]]);
});

test('收藏各字段都进行 CSV 引号转义，旧数据缺少备注时留空', async t => {
  const app = openApp(t, [
    { id: 'legacy', title: '旧"标题"', url: 'https://example.com/?q="a,b"', category: '分"类,名' },
  ]);
  const button = app.document.querySelector('#export');
  assert.ok(button, '应有导出按钮');
  button.click();
  const bytes = Buffer.from(await app.blobs[0].arrayBuffer());
  assert.equal(bytes.subarray(3).toString('utf8'), '"标题","网址","分类","备注"\r\n'
    + '"旧""标题""","https://example.com/?q=""a,b""","分""类,名",""\r\n');
});

test('无收藏时禁用导出；新增后可导出，删除最后一条后再次禁用', t => {
  const app = openApp(t, []);
  const button = app.document.querySelector('#export');
  assert.ok(button, '应有导出按钮');
  assert.equal(button.disabled, true);
  assert.match(app.document.querySelector('#export-help').textContent, /添加/);
  button.click();
  assert.equal(app.blobs.length, 0);
  input(app, '#title', '仅一条');
  input(app, '#url', 'https://example.com/only');
  app.document.querySelector('#add-form').dispatchEvent(new app.window.Event('submit', { bubbles: true, cancelable: true }));
  assert.equal(button.disabled, false);
  button.click();
  assert.equal(app.blobs.length, 1);
  app.document.querySelector('.delete').click();
  assert.equal(button.disabled, true);
  assert.deepEqual(JSON.parse(app.window.localStorage.getItem(storageKey)), []);
});

test('下载链接及时移除，延后释放 Blob URL，重复下载各自清理', t => {
  const app = openApp(t, saved);
  const button = app.document.querySelector('#export');
  assert.ok(button, '应有导出按钮');
  button.click();
  button.click();
  assert.equal(app.document.querySelectorAll('a[download]').length, 0);
  assert.deepEqual(app.revoked, []);
  assert.equal(app.timers.length, 2);
  for (const timer of app.timers) {
    assert.ok(timer.delay >= 1000, '下载开始后再释放临时 URL');
    timer.callback();
  }
  assert.deepEqual(app.revoked, ['blob:export-1', 'blob:export-2']);
});

test('下载异常有反馈且保留数据，已创建的资源仍会清理', t => {
  const app = openApp(t, saved);
  app.window.HTMLAnchorElement.prototype.click = () => { throw new Error('模拟下载失败'); };
  const button = app.document.querySelector('#export');
  assert.ok(button, '应有导出按钮');
  button.click();
  assert.match(app.document.querySelector('#export-status').textContent, /导出失败/);
  assert.equal(app.document.querySelectorAll('a[download]').length, 0);
  assert.equal(app.timers.length, 1);
  app.timers[0].callback();
  assert.deepEqual(app.revoked, ['blob:export-1']);
  assert.deepEqual(app.writes, []);
  assert.equal(app.window.localStorage.getItem(storageKey), JSON.stringify(saved));
});
