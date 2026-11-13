const test = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { resolve } = require('node:path');
const vm = require('node:vm');

const source = readFileSync(resolve(__dirname, '../app.js'), 'utf8');
const html = readFileSync(resolve(__dirname, '../index.html'), 'utf8');
const storageKey = 'solo-bookmarks-v1';
const saved = [
  { id: 'old-1', title: '设计, "灵感"', url: 'https://example.com/?a=1&b=2', category: '设计', note: '中文，逗号, "引号"\n第二行\r\n第三行\r第四行 😀' },
  { id: 'old-2', title: '开发手册', url: 'https://example.com/dev', category: '开发', note: '' },
];

// 仅模拟应用使用的 DOM 和下载接口；这些测试不启动浏览器。
function loadApp(items = saved) {
  const downloads = [];
  const blobs = [];
  const revoked = [];
  const timers = [];
  const writes = [];
  let clickError = false;
  class Element {
    constructor(tagName) { this.tagName = tagName; this.children = []; this.value = ''; this.textContent = ''; this.listeners = {}; this.attributes = {}; }
    append(...children) { children.forEach(child => { child.parent = this; this.children.push(child); }); }
    replaceChildren(...children) { this.children = []; this.append(...children); }
    setAttribute(name, value) { this.attributes[name] = value; }
    addEventListener(type, callback) { this.listeners[type] = callback; }
    fire(type) { return this.listeners[type]({ target: this, preventDefault() {} }); }
    click() {
      if (clickError) throw new Error('下载被阻止');
      assert.equal(this.parent, body);
      downloads.push({ href: this.href, filename: this.download });
    }
    remove() { if (this.parent) this.parent.children = this.parent.children.filter(child => child !== this); }
    reset() { for (const id of ['title', 'url', 'note']) elements[id].value = ''; elements.category.value = '设计'; }
  }
  const body = new Element('body');
  const elements = Object.fromEntries([...html.matchAll(/id="([^"]+)"/g)].map(match => [match[1], new Element(match[1])]));
  elements.category.value = '设计';
  const storage = new Map(items === undefined ? [] : [[storageKey, JSON.stringify(items)]]);
  const context = vm.createContext({
    document: { body, querySelector: selector => elements[selector.slice(1)], createElement: tag => new Element(tag) },
    localStorage: { getItem: key => storage.get(key) ?? null, setItem: (key, value) => { writes.push(key); storage.set(key, value); } },
    crypto: { randomUUID: () => 'new-id' },
    Blob,
    URL: { createObjectURL: blob => { blobs.push(blob); return `blob:test-${blobs.length}`; }, revokeObjectURL: url => revoked.push(url) },
    setTimeout: (callback, delay) => timers.push({ callback, delay }),
  });
  vm.runInContext(source, context);
  return { elements, body, storage, writes, downloads, blobs, revoked, timers, context, failDownload: () => { clickError = true; } };
}

test('CSV 使用 UTF-8 BOM、四列表头、CRLF 行尾，完整保留中文及特殊字符', async () => {
  const app = loadApp();
  app.elements['export-bookmarks'].fire('click');
  const bytes = new Uint8Array(await app.blobs[0].arrayBuffer());
  assert.deepEqual([...bytes.slice(0, 3)], [0xef, 0xbb, 0xbf]);
  assert.equal(Buffer.from(bytes).toString('utf8'), '\uFEFF"标题","网址","分类","备注"\r\n'
    + '"设计, ""灵感""","https://example.com/?a=1&b=2","设计","中文，逗号, ""引号""\n第二行\r\n第三行\r第四行 😀"\r\n'
    + '"开发手册","https://example.com/dev","开发",""\r\n');
  assert.equal(app.blobs[0].type, 'text/csv;charset=utf-8');
});

test('导出遵循标题、备注、分类和组合筛选，并保持列表顺序', async t => {
  const items = [
    { id: 'design-guide', title: '设计手册', url: 'https://example.com/design-guide', category: '设计', note: '界面 API 参考' },
    { id: 'dev-guide', title: '开发手册', url: 'https://example.com/dev-guide', category: '开发', note: '常用操作' },
    { id: 'design-case', title: '设计案例', url: 'https://example.com/design-case', category: '设计', note: '灵感' },
  ];
  const rows = [
    '"设计手册","https://example.com/design-guide","设计","界面 API 参考"',
    '"开发手册","https://example.com/dev-guide","开发","常用操作"',
    '"设计案例","https://example.com/design-case","设计","灵感"',
  ];
  for (const scenario of [
    { name: '仅搜索标题', query: '手册', category: '', indices: [0, 1] },
    { name: '搜索备注忽略大小写和首尾空格', query: '  aPi  ', category: '', indices: [0] },
    { name: '仅分类', query: '', category: '设计', indices: [0, 2] },
    { name: '搜索与分类取交集', query: '手册', category: '开发', indices: [1] },
  ]) {
    await t.test(scenario.name, async () => {
      const app = loadApp(items);
      const before = app.storage.get(storageKey);
      app.elements.search.value = scenario.query;
      app.elements.search.fire('input');
      app.elements.filter.value = scenario.category;
      app.elements.filter.fire('change');
      assert.equal(app.elements.count.textContent, `${scenario.indices.length} 条收藏`);
      assert.deepEqual(app.elements.list.children.map(article => article.children[0].textContent), scenario.indices.map(index => items[index].title));
      app.elements['export-bookmarks'].fire('click');
      assert.equal(app.downloads.length, 1);
      const csv = Buffer.from(await app.blobs[0].arrayBuffer()).toString('utf8');
      assert.equal(csv, '\uFEFF"标题","网址","分类","备注"\r\n' + scenario.indices.map(index => rows[index]).join('\r\n') + '\r\n');
      assert.equal(app.elements['export-status'].textContent, `已开始导出当前筛选的 ${scenario.indices.length} 条收藏，请在浏览器下载中查看 CSV 文件。`);
      assert.equal(app.storage.get(storageKey), before);
      assert.deepEqual(app.writes, []);
      assert.equal(app.elements.search.value, scenario.query);
      assert.equal(app.elements.filter.value, scenario.category);
    });
  }
});

test('搜索、分类或组合筛选无匹配时提示调整筛选，不生成文件', async t => {
  for (const scenario of [
    { name: '搜索无匹配', query: '没有这个标题', category: '' },
    { name: '分类无匹配', query: '', category: '产品' },
    { name: '组合筛选无交集', query: '灵感', category: '开发' },
  ]) {
    await t.test(scenario.name, () => {
      const app = loadApp();
      const before = app.storage.get(storageKey);
      app.elements.search.value = scenario.query;
      app.elements.search.fire('input');
      app.elements.filter.value = scenario.category;
      app.elements.filter.fire('change');
      assert.equal(app.elements.count.textContent, '0 条收藏');
      app.elements['export-bookmarks'].fire('click');
      assert.equal(app.elements['export-status'].textContent, '当前搜索或分类筛选下没有可导出的收藏，请调整或清除筛选后重试。');
      assert.equal(app.downloads.length, 0);
      assert.equal(app.blobs.length, 0);
      assert.equal(app.body.children.length, 0);
      assert.equal(app.timers.length, 0);
      assert.equal(app.storage.get(storageKey), before);
      assert.deepEqual(app.writes, []);
      assert.equal(app.elements.search.value, scenario.query);
      assert.equal(app.elements.filter.value, scenario.category);
    });
  }
});

test('清空搜索并选择全部分类后恢复导出全部，空白搜索也视为无搜索条件', async () => {
  const app = loadApp();
  const before = app.storage.get(storageKey);
  app.elements.search.value = '没有这个标题';
  app.elements.search.fire('input');
  app.elements.filter.value = '产品';
  app.elements.filter.fire('change');
  app.elements['export-bookmarks'].fire('click');
  assert.equal(app.downloads.length, 0);
  app.elements.search.value = '';
  app.elements.search.fire('input');
  app.elements['export-bookmarks'].fire('click');
  assert.equal(app.downloads.length, 0);
  app.elements.filter.value = '';
  app.elements.filter.fire('change');
  for (const query of ['', '   ']) {
    app.elements.search.value = query;
    app.elements.search.fire('input');
    assert.equal(app.elements.count.textContent, '2 条收藏');
    app.elements['export-bookmarks'].fire('click');
    const csv = await app.blobs.at(-1).text();
    assert.ok(csv.includes('设计, ""灵感""'));
    assert.ok(csv.includes('开发手册'));
    assert.ok(csv.indexOf('设计, ""灵感""') < csv.indexOf('开发手册'));
    assert.equal(app.elements['export-status'].textContent, '已开始导出全部 2 条收藏，请在浏览器下载中查看 CSV 文件。');
  }
  assert.equal(app.downloads.length, 2);
  assert.equal(app.storage.get(storageKey), before);
  assert.deepEqual(app.writes, []);
});

test('筛选导出随新增和删除更新，不使用旧的筛选结果', async () => {
  const app = loadApp();
  const { elements } = app;
  elements.search.value = '手册';
  elements.search.fire('input');
  elements.filter.value = '设计';
  elements.filter.fire('change');
  assert.equal(elements.count.textContent, '0 条收藏');
  elements.title.value = '设计手册';
  elements.url.value = 'https://example.com/new';
  elements.category.value = '设计';
  elements.note.value = '新资料';
  elements['add-form'].fire('submit');
  assert.equal(elements.count.textContent, '1 条收藏');
  elements['export-bookmarks'].fire('click');
  assert.equal(await app.blobs[0].text(), '"标题","网址","分类","备注"\r\n"设计手册","https://example.com/new","设计","新资料"\r\n');
  elements.list.children[0].children[2].children[1].fire('click');
  assert.equal(elements.count.textContent, '0 条收藏');
  elements['export-bookmarks'].fire('click');
  assert.equal(app.downloads.length, 1);
  assert.equal(app.blobs.length, 1);
  assert.equal(elements['export-status'].textContent, '当前搜索或分类筛选下没有可导出的收藏，请调整或清除筛选后重试。');
  assert.deepEqual(JSON.parse(app.storage.get(storageKey)), saved);
});

test('下载按钮提供 CSV 文件名，移除临时链接并延后释放下载地址', () => {
  const app = loadApp();
  app.elements['export-bookmarks'].fire('click');
  assert.equal(app.downloads.length, 1);
  assert.match(app.downloads[0].filename, /^拾页收藏-\d{4}-\d{2}-\d{2}\.csv$/);
  assert.equal(app.downloads[0].href, 'blob:test-1');
  assert.equal(app.body.children.length, 0);
  assert.equal(app.timers.length, 1);
  assert.ok(app.timers[0].delay > 0);
  assert.deepEqual(app.revoked, []);
  app.timers[0].callback();
  assert.deepEqual(app.revoked, ['blob:test-1']);
});

test('空收藏提示先添加，不生成文件也不覆盖空数据', () => {
  const app = loadApp([]);
  app.elements['export-bookmarks'].fire('click');
  assert.equal(app.elements['export-status'].textContent, '还没有可导出的收藏，请先添加收藏。');
  assert.equal(app.downloads.length, 0);
  assert.equal(app.blobs.length, 0);
  assert.equal(app.storage.get(storageKey), '[]');
  assert.deepEqual(app.writes, []);
});

test('下载失败时显示提示，保留收藏并清理临时资源', () => {
  const app = loadApp();
  app.failDownload();
  app.elements['export-bookmarks'].fire('click');
  assert.equal(app.elements['export-status'].textContent, '导出未能开始，请重试。');
  assert.equal(app.body.children.length, 0);
  assert.equal(app.downloads.length, 0);
  assert.deepEqual(app.writes, []);
  app.timers[0].callback();
  assert.deepEqual(app.revoked, ['blob:test-1']);
});

test('旧数据中的空备注和缺省备注导出为空字段', () => {
  const app = loadApp();
  const csv = app.context.createBookmarksCsv([
    { title: '空备注', url: 'https://example.com', category: '设计', note: null },
    { title: '缺省备注', url: 'https://example.com', category: '开发' },
  ]);
  assert.equal(csv, '\uFEFF"标题","网址","分类","备注"\r\n"空备注","https://example.com","设计",""\r\n"缺省备注","https://example.com","开发",""\r\n');
});

test('已有数据加载、搜索、分类筛选、新增、删除及重新加载仍正常', async () => {
  const app = loadApp();
  const { elements } = app;
  assert.equal(elements.count.textContent, '2 条收藏');
  elements.search.value = '第二行';
  elements.search.fire('input');
  assert.equal(elements.count.textContent, '1 条收藏');
  assert.equal(elements.list.children[0].children[0].textContent, saved[0].title);
  elements.search.value = '';
  elements.search.fire('input');
  elements.filter.value = '开发';
  elements.filter.fire('change');
  assert.equal(elements.count.textContent, '1 条收藏');
  assert.equal(elements.list.children[0].children[0].textContent, saved[1].title);
  elements.filter.value = '';
  elements.filter.fire('change');
  elements.title.value = '新收藏';
  elements.url.value = 'https://example.com/new';
  elements.category.value = '产品';
  elements.note.value = '新增, "备注"\n下一行';
  elements['add-form'].fire('submit');
  const afterAdd = JSON.parse(app.storage.get(storageKey));
  assert.equal(elements.count.textContent, '3 条收藏');
  assert.equal(afterAdd[0].note, '新增, "备注"\n下一行');
  assert.deepEqual(afterAdd.slice(1), saved);
  elements['export-bookmarks'].fire('click');
  assert.ok((await app.blobs[0].text()).includes('新增, ""备注""\n下一行'));
  elements.list.children[0].children[2].children[1].fire('click');
  assert.equal(elements.count.textContent, '2 条收藏');
  assert.deepEqual(JSON.parse(app.storage.get(storageKey)), saved);
  const reloaded = loadApp(JSON.parse(app.storage.get(storageKey)));
  assert.equal(reloaded.elements.count.textContent, '2 条收藏');
  assert.deepEqual(reloaded.writes, []);
});
