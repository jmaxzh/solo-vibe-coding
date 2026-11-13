const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { test } = require('node:test');
const vm = require('node:vm');

const source = readFileSync(join(__dirname, '..', 'app.js'), 'utf8');
const storageKey = 'solo-bookmarks-v1';
const header = '\uFEFF"标题","网址","分类","备注"\r\n';
const saved = [
  {
    id: 'existing-design', title: '中文, "收藏"',
    url: 'https://example.com/path?a=1,2&b=%22', category: '设计',
    note: '第一行,有逗号\n第二行"引号"\r\n第三行\r末尾',
  },
  { id: 'existing-dev', title: '开发文档', url: 'https://example.com/dev', category: '开发', note: '' },
];

// 用最小 DOM 替身运行真实应用脚本，不启动浏览器。
function loadApp(initialData = null) {
  let stored = initialData === null ? null : JSON.stringify(initialData);
  const writes = [];
  const blobs = [];
  const downloads = [];
  const revoked = [];
  const timers = [];
  class Element {
    constructor(tagName) {
      this.tagName = tagName;
      this.value = '';
      this.textContent = '';
      this.children = [];
      this.listeners = new Map();
      this.attributes = {};
    }
    addEventListener(type, handler) { this.listeners.set(type, handler); }
    emit(type, event = {}) { this.listeners.get(type)?.(event); }
    setAttribute(name, value) { this.attributes[name] = value; }
    append(...children) {
      for (const child of children) {
        child.parent = this;
        this.children.push(child);
      }
    }
    replaceChildren(...children) { this.children = []; this.append(...children); }
    remove() {
      this.parent.children = this.parent.children.filter(child => child !== this);
      this.parent = null;
    }
    click() {
      this.emit('click');
      if (this.tagName === 'a' && this.download) {
        downloads.push({ href: this.href, filename: this.download, attached: this.parent === body });
      }
    }
  }
  const ids = ['search', 'filter', 'list', 'count', 'title', 'url', 'category', 'note', 'add-form', 'status', 'export-bookmarks', 'export-status'];
  const elements = Object.fromEntries(ids.map(id => [`#${id}`, new Element('div')]));
  elements['#category'].value = '设计';
  elements['#add-form'].reset = () => {
    for (const id of ['title', 'url', 'note']) elements[`#${id}`].value = '';
    elements['#category'].value = '设计';
  };
  const body = new Element('body');
  const urlApi = {
    createObjectURL(blob) { blobs.push(blob); return `blob:test-${blobs.length}`; },
    revokeObjectURL(url) { revoked.push(url); },
  };
  vm.runInNewContext(source, {
    document: {
      body,
      querySelector(selector) {
        assert.ok(elements[selector], `未知的选择器：${selector}`);
        return elements[selector];
      },
      createElement(tagName) { return new Element(tagName); },
    },
    localStorage: {
      getItem(key) { assert.equal(key, storageKey); return stored; },
      setItem(key, value) { assert.equal(key, storageKey); writes.push(value); stored = value; },
    },
    crypto: { randomUUID: () => 'new-bookmark-id' },
    Blob, URL: urlApi,
    setTimeout(callback, delay) { timers.push({ callback, delay }); },
  });
  return { elements, body, blobs, downloads, revoked, timers, writes, urlApi, get stored() { return stored; } };
}

async function csvText(blob) {
  // 直接读字节，避免文本解码器自动丢弃 BOM。
  return Buffer.from(await blob.arrayBuffer()).toString('utf8');
}

test('CSV 只下载当前搜索和分类结果，保留中文和特殊字符，不改动存量数据', async () => {
  const app = loadApp(saved);
  const original = app.stored;
  app.elements['#search'].value = '第二行';
  app.elements['#search'].emit('input');
  app.elements['#filter'].value = '设计';
  app.elements['#filter'].emit('change');
  assert.equal(app.elements['#count'].textContent, '1 条收藏');

  app.elements['#export-bookmarks'].click();
  assert.equal(app.blobs.length, 1);
  const blob = app.blobs[0];
  assert.equal(blob.type, 'text/csv;charset=utf-8');
  const bytes = Buffer.from(await blob.arrayBuffer());
  assert.deepEqual([...bytes.subarray(0, 3)], [0xef, 0xbb, 0xbf]);
  assert.equal(await csvText(blob), header +
    '"中文, ""收藏""","https://example.com/path?a=1,2&b=%22","设计","第一行,有逗号\n第二行""引号""\r\n第三行\r末尾"\r\n');
  assert.equal(app.downloads.length, 1);
  assert.match(app.downloads[0].filename, /^拾页收藏-\d{4}-\d{2}-\d{2}\.csv$/);
  assert.equal(app.downloads[0].href, 'blob:test-1');
  assert.equal(app.downloads[0].attached, true);
  assert.equal(app.body.children.length, 0);
  assert.equal(app.revoked.length, 0);
  assert.equal(app.timers.length, 1);
  assert.ok(app.timers[0].delay > 0);
  app.timers[0].callback();
  assert.deepEqual(app.revoked, ['blob:test-1']);
  assert.equal(app.stored, original);
  assert.equal(app.writes.length, 0);
  assert.equal(app.elements['#count'].textContent, '1 条收藏');
  assert.equal(app.elements['#export-status'].textContent, '已发起下载，共 1 条收藏。');
  assert.equal(app.elements['#search'].value, '第二行');
  assert.equal(app.elements['#filter'].value, '设计');
});

test('搜索和分类可以分别限定导出范围', async t => {
  for (const [name, query, category] of [
    ['只搜索标题', '开发文档', ''],
    ['只筛选分类', '', '开发'],
  ]) {
    await t.test(name, async () => {
      const app = loadApp(saved);
      app.elements['#search'].value = query;
      app.elements['#search'].emit('input');
      app.elements['#filter'].value = category;
      app.elements['#filter'].emit('change');
      assert.equal(app.elements['#count'].textContent, '1 条收藏');
      assert.equal(app.elements['#list'].children[0].children[0].textContent, '开发文档');
      app.elements['#export-bookmarks'].click();
      assert.equal(await csvText(app.blobs[0]), header + '"开发文档","https://example.com/dev","开发",""\r\n');
      assert.equal(app.elements['#export-status'].textContent, '已发起下载，共 1 条收藏。');
      assert.deepEqual(JSON.parse(app.stored), saved);
      assert.equal(app.writes.length, 0);
    });
  }
});

test('标题和备注搜索继续忽略大小写及首尾空格，导出结果与列表一致', async t => {
  const item = { id: 'ui', title: 'UI 指南', url: 'https://example.com/ui', category: '设计', note: 'Design NOTES' };
  for (const query of ['  ui  ', '  dEsIgN nOtEs  ']) {
    await t.test(query, async () => {
      const app = loadApp([...saved, item]);
      app.elements['#search'].value = query;
      app.elements['#search'].emit('input');
      app.elements['#filter'].value = '设计';
      app.elements['#filter'].emit('change');
      assert.equal(app.elements['#count'].textContent, '1 条收藏');
      assert.equal(app.elements['#list'].children[0].children[0].textContent, 'UI 指南');
      app.elements['#export-bookmarks'].click();
      assert.equal(await csvText(app.blobs[0]), header + '"UI 指南","https://example.com/ui","设计","Design NOTES"\r\n');
      assert.equal(app.writes.length, 0);
    });
  }
});

test('搜索、分类或两者交集没有匹配时提示，不创建下载或导出其他收藏', async t => {
  for (const [name, query, category] of [
    ['搜索无匹配', '不存在的收藏', ''],
    ['分类无匹配', '', '产品'],
    ['搜索和分类各有结果但没有交集', '开发文档', '设计'],
  ]) {
    await t.test(name, () => {
      const app = loadApp(saved);
      const original = app.stored;
      app.elements['#search'].value = query;
      app.elements['#search'].emit('input');
      app.elements['#filter'].value = category;
      app.elements['#filter'].emit('change');
      assert.equal(app.elements['#count'].textContent, '0 条收藏');
      assert.equal(app.elements['#list'].children[0].textContent, '还没有匹配的收藏。');
      app.elements['#export-bookmarks'].click();
      assert.equal(app.elements['#export-status'].textContent, '没有匹配的收藏可导出。');
      assert.equal(app.blobs.length, 0);
      assert.equal(app.downloads.length, 0);
      assert.equal(app.body.children.length, 0);
      assert.equal(app.timers.length, 0);
      assert.equal(app.stored, original);
      assert.equal(app.writes.length, 0);
    });
  }
});

test('依次清空搜索并选择全部分类后可恢复导出，全部结果按列表顺序排列', async () => {
  const app = loadApp(saved);
  const original = app.stored;
  app.elements['#search'].value = '开发文档';
  app.elements['#search'].emit('input');
  app.elements['#filter'].value = '设计';
  app.elements['#filter'].emit('change');
  app.elements['#export-bookmarks'].click();
  assert.equal(app.downloads.length, 0);
  assert.equal(app.elements['#export-status'].textContent, '没有匹配的收藏可导出。');

  app.elements['#search'].value = '';
  app.elements['#search'].emit('input');
  assert.equal(app.elements['#export-status'].textContent, '');
  assert.equal(app.elements['#count'].textContent, '1 条收藏');
  app.elements['#export-bookmarks'].click();
  const designCsv = await csvText(app.blobs[0]);
  assert.ok(designCsv.includes('中文, ""收藏""'));
  assert.ok(!designCsv.includes('开发文档'));
  assert.equal(app.elements['#export-status'].textContent, '已发起下载，共 1 条收藏。');

  app.elements['#filter'].value = '';
  app.elements['#filter'].emit('change');
  assert.equal(app.elements['#export-status'].textContent, '');
  assert.equal(app.elements['#count'].textContent, '2 条收藏');
  assert.deepEqual(app.elements['#list'].children.map(article => article.children[0].textContent), saved.map(item => item.title));
  app.elements['#export-bookmarks'].click();
  assert.equal(await csvText(app.blobs[1]), designCsv + '"开发文档","https://example.com/dev","开发",""\r\n');
  assert.equal(app.elements['#export-status'].textContent, '已发起下载，共 2 条收藏。');

  app.elements['#search'].value = '   ';
  app.elements['#search'].emit('input');
  app.elements['#export-bookmarks'].click();
  assert.equal(await csvText(app.blobs[2]), await csvText(app.blobs[1]));
  assert.equal(app.stored, original);
  assert.equal(app.writes.length, 0);
});

test('空收藏提示无内容可导出，不下载文件，保持已保存的空列表', () => {
  const app = loadApp([]);
  assert.equal(app.elements['#count'].textContent, '0 条收藏');
  app.elements['#export-bookmarks'].click();
  assert.equal(app.elements['#export-status'].textContent, '没有匹配的收藏可导出。');
  assert.equal(app.blobs.length, 0);
  assert.equal(app.downloads.length, 0);
  assert.equal(app.timers.length, 0);
  assert.equal(app.stored, '[]');
  assert.equal(app.writes.length, 0);
});

test('旧记录缺少备注时导出空单元格', async () => {
  const app = loadApp([{ id: 'old', title: '旧收藏', url: 'https://example.com', category: '产品' }]);
  app.elements['#export-bookmarks'].click();
  assert.equal(await csvText(app.blobs[0]), header + '"旧收藏","https://example.com","产品",""\r\n');
  assert.equal(app.writes.length, 0);
});

test('新增与删除继续保存到原键，搜索和分类仍生效，导出使用最新数据', async () => {
  const app = loadApp(saved);
  app.elements['#title'].value = ' 新的收藏 ';
  app.elements['#url'].value = 'https://example.com/new';
  app.elements['#category'].value = '产品';
  app.elements['#note'].value = '新的备注';
  let prevented = false;
  app.elements['#add-form'].emit('submit', {
    preventDefault() { prevented = true; }, target: app.elements['#add-form'],
  });
  assert.equal(prevented, true);
  assert.equal(JSON.parse(app.stored).length, 3);
  assert.equal(JSON.parse(app.stored)[0].title, '新的收藏');
  assert.equal(app.elements['#title'].value, '');
  assert.equal(app.elements['#status'].textContent, '已添加收藏。');
  app.elements['#export-bookmarks'].click();
  assert.ok((await csvText(app.blobs[0])).startsWith(header + '"新的收藏","https://example.com/new","产品","新的备注"\r\n'));

  app.elements['#search'].value = '新的备注';
  app.elements['#search'].emit('input');
  assert.equal(app.elements['#count'].textContent, '1 条收藏');
  app.elements['#filter'].value = '设计';
  app.elements['#filter'].emit('change');
  assert.equal(app.elements['#count'].textContent, '0 条收藏');
  app.elements['#filter'].value = '产品';
  app.elements['#filter'].emit('change');
  assert.equal(app.elements['#count'].textContent, '1 条收藏');
  app.elements['#export-bookmarks'].click();
  assert.equal(await csvText(app.blobs[1]), header + '"新的收藏","https://example.com/new","产品","新的备注"\r\n');
  assert.equal(app.writes.length, 1);

  const article = app.elements['#list'].children[0];
  article.children[2].children[1].click();
  assert.deepEqual(JSON.parse(app.stored), saved);
  assert.equal(app.writes.length, 2);
  assert.equal(app.elements['#count'].textContent, '0 条收藏');
  app.elements['#export-bookmarks'].click();
  assert.equal(app.elements['#export-status'].textContent, '没有匹配的收藏可导出。');
  assert.equal(app.downloads.length, 2);
  assert.equal(app.blobs.length, 2);
  app.elements['#search'].value = '';
  app.elements['#search'].emit('input');
  app.elements['#filter'].value = '';
  app.elements['#filter'].emit('change');
  app.elements['#export-bookmarks'].click();
  assert.ok(!(await csvText(app.blobs[2])).includes('新的收藏'));
  assert.ok((await csvText(app.blobs[2])).includes('开发文档'));
  assert.equal(app.elements['#export-status'].textContent, '已发起下载，共 2 条收藏。');
  assert.equal(app.writes.length, 2);
});

test('首次使用仍显示默认收藏，下载不会写入本地存储', () => {
  const app = loadApp();
  assert.equal(app.elements['#count'].textContent, '3 条收藏');
  app.elements['#export-bookmarks'].click();
  assert.equal(app.downloads.length, 1);
  assert.equal(app.stored, null);
  assert.equal(app.writes.length, 0);
});

test('导出失败有提示且保留收藏，可以重试导出当前筛选结果', async () => {
  const app = loadApp(saved);
  app.elements['#filter'].value = '开发';
  app.elements['#filter'].emit('change');
  const createObjectURL = app.urlApi.createObjectURL;
  app.urlApi.createObjectURL = () => { throw new Error('下载不可用'); };
  app.elements['#export-bookmarks'].click();
  assert.equal(app.elements['#export-status'].textContent, '导出失败，请重试。');
  assert.equal(app.downloads.length, 0);
  assert.deepEqual(JSON.parse(app.stored), saved);
  app.urlApi.createObjectURL = createObjectURL;
  app.elements['#export-bookmarks'].click();
  assert.equal(app.downloads.length, 1);
  assert.equal(await csvText(app.blobs[0]), header + '"开发文档","https://example.com/dev","开发",""\r\n');
  assert.equal(app.elements['#export-status'].textContent, '已发起下载，共 1 条收藏。');
  assert.equal(app.writes.length, 0);
});
