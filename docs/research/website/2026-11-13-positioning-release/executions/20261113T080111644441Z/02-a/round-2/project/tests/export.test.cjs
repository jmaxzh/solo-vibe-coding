const test = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { randomUUID } = require('node:crypto');
const vm = require('node:vm');

const source = readFileSync(join(__dirname, '..', 'app.js'), 'utf8');
const html = readFileSync(join(__dirname, '..', 'index.html'), 'utf8');
const storageKey = 'solo-bookmarks-v1';

// 仅模拟应用使用的 DOM 接口，不启动浏览器。
function startApp(saved) {
  const downloads = [];
  const blobs = new Map();
  const timers = [];
  const revoked = [];
  const writes = [];
  const storage = new Map(saved === undefined ? [] : [[storageKey, JSON.stringify(saved)]]);

  class Element {
    constructor(tagName) {
      this.tagName = tagName;
      this.children = [];
      this.events = {};
      this.value = '';
      this.textContent = '';
      this.disabled = false;
    }
    append(...children) {
      for (const child of children) {
        child.parent = this;
        this.children.push(child);
      }
    }
    replaceChildren() { this.children = []; }
    setAttribute(name, value) { this[name] = value; }
    addEventListener(type, listener) { this.events[type] = listener; }
    dispatch(type) { this.events[type]?.({ target: this, preventDefault() {} }); }
    click() {
      if (this.disabled) return;
      if (this.tagName === 'a' && this.download) {
        downloads.push({ href: this.href, filename: this.download, attached: Boolean(this.parent) });
      }
      this.dispatch('click');
    }
    remove() {
      if (this.parent) this.parent.children = this.parent.children.filter(child => child !== this);
      this.parent = null;
    }
    reset() {
      for (const id of ['title', 'url', 'note']) elements.get(id).value = '';
      elements.get('category').value = '设计';
    }
  }

  const elements = new Map([...html.matchAll(/<([a-z][\w-]*)\b[^>]*\bid="([^"]+)"[^>]*>/gi)]
    .map(([, tag, id]) => [id, new Element(tag)]));
  elements.get('category').value = '设计';
  const body = new Element('body');
  const context = vm.createContext({
    document: {
      body,
      querySelector(selector) {
        const element = elements.get(selector.slice(1));
        assert.ok(element, `HTML 缺少 ${selector}`);
        return element;
      },
      createElement(tag) { return new Element(tag); },
    },
    localStorage: {
      getItem(key) { return storage.get(key) ?? null; },
      setItem(key, value) { writes.push({ key, value }); storage.set(key, value); },
    },
    Blob,
    URL: {
      createObjectURL(blob) {
        const url = `blob:test-${blobs.size}`;
        blobs.set(url, blob);
        return url;
      },
      revokeObjectURL(url) { revoked.push(url); },
    },
    crypto: { randomUUID },
    setTimeout(callback, delay) { timers.push({ callback, delay }); },
  });
  vm.runInContext(source, context);
  return { elements, context, storage, downloads, blobs, timers, revoked, writes, body };
}

// 独立读取 CSV，检查引号内的逗号、双引号和不同形式的换行能否往返保留。
function parseCsv(csv) {
  const rows = [];
  let row = [], field = '', quoted = false;
  for (let i = 0; i < csv.length; i++) {
    const char = csv[i];
    if (quoted) {
      if (char === '"' && csv[i + 1] === '"') { field += '"'; i++; }
      else if (char === '"') quoted = false;
      else field += char;
    } else if (char === '"') quoted = true;
    else if (char === ',') { row.push(field); field = ''; }
    else if (char === '\r' || char === '\n') {
      if (char === '\r' && csv[i + 1] === '\n') i++;
      row.push(field); rows.push(row); row = []; field = '';
    } else field += char;
  }
  assert.equal(quoted, false, 'CSV 引号必须闭合');
  if (field || row.length) rows.push([...row, field]);
  return rows;
}

async function readDownload(app, index = app.downloads.length - 1) {
  const download = app.downloads[index];
  const blob = app.blobs.get(download.href);
  const bytes = Buffer.from(await blob.arrayBuffer());
  assert.deepEqual([...bytes.subarray(0, 3)], [0xef, 0xbb, 0xbf], 'UTF-8 BOM');
  assert.equal(blob.type, 'text/csv;charset=utf-8');
  assert.equal(download.attached, true, '下载链接在点击时挂载到页面');
  assert.match(download.filename, /^收藏-\d{4}-\d{2}-\d{2}\.csv$/);
  return parseCsv(bytes.toString('utf8').slice(1));
}

const saved = [
  { id: 'old-1', title: '中文收藏, "灵感" 😀', url: 'https://example.com/?a=1,2&b=%22', category: '设计', note: '第一行,含逗号\n第二行有"双引号"\r\n第三行\r第四行' },
  { id: 'old-2', title: '开发手册', url: 'https://example.com/docs', category: '开发', note: '' },
];
const header = ['标题', '网址', '分类', '备注'];
const values = items => items.map(item => [item.title, item.url, item.category, item.note ?? '']);
const filterSaved = [
  ...saved,
  { id: 'old-3', title: '开发灵感', url: 'https://example.com/js', category: '设计', note: 'JavaScript Notes' },
  { id: 'old-4', title: '产品手册', url: 'https://example.com/product', category: '产品', note: '文档参考' },
];

function setSearch(app, value) {
  app.elements.get('search').value = value;
  app.elements.get('search').dispatch('input');
}

function setCategory(app, value) {
  app.elements.get('filter').value = value;
  app.elements.get('filter').dispatch('change');
}

async function assertVisibleExport(app, expected) {
  const { elements } = app;
  assert.equal(elements.get('count').textContent, `${expected.length} 条收藏`);
  assert.deepEqual(elements.get('list').children.map(article => article.children[0].textContent), expected.map(item => item.title));
  assert.equal(elements.get('export').disabled, false);
  const previousDownloads = app.downloads.length;
  elements.get('export').click();
  assert.equal(app.downloads.length, previousDownloads + 1);
  assert.deepEqual(await readDownload(app), [header, ...values(expected)]);
  assert.match(elements.get('export-status').textContent, new RegExp(`${expected.length} 条收藏`));
}

test('CSV 保留中文、特殊字符及换行，空值和空列表也生成合法列', () => {
  const app = startApp(saved);
  const serialize = vm.runInContext('createBookmarksCsv', app.context);
  const csv = serialize(saved);
  assert.ok(csv.startsWith('\uFEFF"标题","网址","分类","备注"\r\n'));
  assert.ok(csv.endsWith('\r\n'));
  assert.deepEqual(parseCsv(csv.slice(1)), [header, ...values(saved)]);
  assert.deepEqual(parseCsv(serialize([{ title: '旧收藏', url: 'https://example.com', category: '产品' }]).slice(1)),
    [header, ['旧收藏', 'https://example.com', '产品', '']]);
  assert.deepEqual(parseCsv(serialize([]).slice(1)), [header]);
});

test('未筛选时导出全部已保存收藏，下载后清理临时资源且不改动数据', async () => {
  const app = startApp(saved);
  await assertVisibleExport(app, saved);
  assert.equal(app.storage.get(storageKey), JSON.stringify(saved));
  assert.equal(app.writes.length, 0, '加载及导出都不写入原有数据');
  assert.equal(app.body.children.length, 0, '临时下载链接被移除');
  for (const timer of app.timers) { assert.ok(timer.delay >= 1000); timer.callback(); }
  assert.deepEqual(app.revoked, app.downloads.map(download => download.href));
});

test('仅搜索时按标题或备注匹配，保留忽略大小写和首尾空格的行为', async () => {
  const app = startApp(filterSaved);
  setSearch(app, '手册');
  await assertVisibleExport(app, [filterSaved[1], filterSaved[3]]);
  setSearch(app, '  jAvAsCrIpT nOtEs  ');
  await assertVisibleExport(app, [filterSaved[2]]);
  setSearch(app, '第三行');
  await assertVisibleExport(app, [filterSaved[0]]);
  assert.equal(app.storage.get(storageKey), JSON.stringify(filterSaved));
  assert.equal(app.writes.length, 0);
});

test('仅分类筛选时只导出该分类，并保持当前列表顺序', async () => {
  const app = startApp(filterSaved);
  setCategory(app, '设计');
  await assertVisibleExport(app, [filterSaved[0], filterSaved[2]]);
  setCategory(app, '开发');
  await assertVisibleExport(app, [filterSaved[1]]);
  setCategory(app, '产品');
  await assertVisibleExport(app, [filterSaved[3]]);
  assert.equal(app.writes.length, 0);
});

test('组合筛选导出交集，分别清除条件后更新范围，全部清除后导出全部', async () => {
  const app = startApp(filterSaved);
  setSearch(app, '手册');
  setCategory(app, '开发');
  await assertVisibleExport(app, [filterSaved[1]]);
  setCategory(app, '');
  await assertVisibleExport(app, [filterSaved[1], filterSaved[3]]);
  setCategory(app, '设计');
  setSearch(app, '');
  await assertVisibleExport(app, [filterSaved[0], filterSaved[2]]);
  setCategory(app, '');
  await assertVisibleExport(app, filterSaved);
  assert.equal(app.storage.get(storageKey), JSON.stringify(filterSaved));
  assert.equal(app.writes.length, 0);
});

test('搜索、分类或组合筛选无匹配时明确提示，即使触发处理函数也不下载', () => {
  for (const [query, category] of [['不存在的收藏', ''], ['', '产品'], ['灵感', '开发']]) {
    const app = startApp(saved);
    setSearch(app, query);
    setCategory(app, category);
    const { elements } = app;
    assert.equal(elements.get('count').textContent, '0 条收藏');
    assert.equal(elements.get('export').disabled, true);
    assert.match(elements.get('export-status').textContent, /没有匹配的收藏可导出/);
    assert.match(elements.get('export').title, /没有匹配/);
    assert.match(elements.get('list').children[0].textContent, /没有匹配/);
    elements.get('export').click();
    elements.get('export').dispatch('click');
    assert.equal(app.downloads.length, 0);
    assert.equal(app.blobs.size, 0);
    assert.equal(app.timers.length, 0);
    assert.equal(app.body.children.length, 0);
    assert.equal(app.storage.get(storageKey), JSON.stringify(saved));
    assert.equal(app.writes.length, 0);
  }
});

test('筛选变化会清除过期的成功或空结果提示，恢复匹配后可以继续导出', async () => {
  const app = startApp(saved);
  await assertVisibleExport(app, saved);
  setSearch(app, '不存在的收藏');
  assert.match(app.elements.get('export-status').textContent, /没有匹配的收藏可导出/);
  assert.doesNotMatch(app.elements.get('export-status').textContent, /已生成/);
  setSearch(app, '手册');
  assert.equal(app.elements.get('export-status').textContent, '');
  await assertVisibleExport(app, [saved[1]]);
  setSearch(app, '');
  assert.equal(app.elements.get('export-status').textContent, '');
  await assertVisibleExport(app, saved);
  assert.equal(app.writes.length, 0);
});

test('新增和删除继续持久化，导出读取最新数据，刷新后仍可读取', async () => {
  const app = startApp([saved[1]]);
  const { elements } = app;
  elements.get('title').value = '新收藏';
  elements.get('url').value = 'https://example.com/new';
  elements.get('category').value = '产品';
  elements.get('note').value = '备注,含"引号"\n另起一行';
  elements.get('add-form').dispatch('submit');
  const afterAdd = JSON.parse(app.storage.get(storageKey));
  assert.equal(afterAdd.length, 2);
  assert.equal(afterAdd[0].note, '备注,含"引号"\n另起一行');
  assert.deepEqual(afterAdd[1], saved[1]);
  elements.get('export').click();
  assert.deepEqual(await readDownload(app), [header, ...values(afterAdd)]);

  const reloaded = startApp(afterAdd);
  reloaded.elements.get('search').value = '另起一行';
  reloaded.elements.get('search').dispatch('input');
  assert.equal(reloaded.elements.get('count').textContent, '1 条收藏');
  elements.get('list').children[0].children[2].children[1].click();
  assert.deepEqual(JSON.parse(app.storage.get(storageKey)), [saved[1]]);
  elements.get('export').click();
  assert.deepEqual(await readDownload(app), [header, ...values([saved[1]])]);
  elements.get('list').children[0].children[2].children[1].click();
  assert.deepEqual(JSON.parse(app.storage.get(storageKey)), []);
  assert.equal(elements.get('export').disabled, true);
});

test('空收藏禁用导出，添加后可导出', async () => {
  const app = startApp([]);
  const { elements } = app;
  assert.equal(elements.get('export').disabled, true);
  assert.match(elements.get('export-status').textContent, /暂无收藏可导出/);
  elements.get('export').click();
  elements.get('export').dispatch('click');
  assert.equal(app.downloads.length, 0);
  assert.equal(app.blobs.size, 0);
  assert.equal(app.writes.length, 0);
  elements.get('title').value = '第一条收藏';
  elements.get('url').value = 'https://example.com/first';
  elements.get('add-form').dispatch('submit');
  assert.equal(elements.get('export').disabled, false);
  elements.get('export').click();
  assert.deepEqual(await readDownload(app), [header, ['第一条收藏', 'https://example.com/first', '设计', '']]);
});

test('筛选期间新增和删除后，导出使用最新可见收藏且保留其他收藏', async () => {
  const app = startApp(saved);
  const { elements } = app;
  setSearch(app, '手册');
  setCategory(app, '开发');
  elements.get('title').value = '产品手册';
  elements.get('url').value = 'https://example.com/product';
  elements.get('category').value = '产品';
  elements.get('add-form').dispatch('submit');
  await assertVisibleExport(app, [saved[1]]);
  elements.get('title').value = '开发手册二';
  elements.get('url').value = 'https://example.com/docs-2';
  elements.get('category').value = '开发';
  elements.get('add-form').dispatch('submit');
  const afterAdd = JSON.parse(app.storage.get(storageKey));
  await assertVisibleExport(app, [afterAdd[0], saved[1]]);
  elements.get('list').children[0].children[2].children[1].click();
  await assertVisibleExport(app, [saved[1]]);
  elements.get('list').children[0].children[2].children[1].click();
  assert.equal(elements.get('export').disabled, true);
  assert.match(elements.get('export-status').textContent, /没有匹配的收藏可导出/);
  const downloadCount = app.downloads.length;
  elements.get('export').dispatch('click');
  assert.equal(app.downloads.length, downloadCount);
  const remaining = [afterAdd[1], saved[0]];
  assert.deepEqual(JSON.parse(app.storage.get(storageKey)), remaining);
  setSearch(app, '');
  setCategory(app, '');
  await assertVisibleExport(app, remaining);
});

test('下载发生错误时提示失败且不改动收藏数据', () => {
  const app = startApp(saved);
  app.context.URL.createObjectURL = () => { throw new Error('模拟下载失败'); };
  app.elements.get('export').click();
  assert.match(app.elements.get('export-status').textContent, /导出失败/);
  assert.equal(app.storage.get(storageKey), JSON.stringify(saved));
  assert.equal(app.writes.length, 0);
  assert.equal(app.downloads.length, 0);
});
