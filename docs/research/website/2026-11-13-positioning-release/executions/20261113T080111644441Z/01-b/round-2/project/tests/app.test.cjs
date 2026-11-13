const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { randomUUID } = require('node:crypto');
const vm = require('node:vm');

const html = readFileSync(join(__dirname, '../index.html'), 'utf8');
const source = readFileSync(join(__dirname, '../app.js'), 'utf8');
const storageKey = 'solo-bookmarks-v1';
const saved = [
  { id: 'old-1', title: '中文设计', url: 'https://example.com/design', category: '设计', note: '保留旧备注' },
  { id: 'old-2', title: 'JavaScript 手册', url: 'https://example.com/dev', category: '开发', note: '常用 API' },
  { id: 'old-3', title: '产品案例', url: 'https://example.com/product', category: '产品', note: '' },
];

// 仅模拟应用用到的 DOM / 下载边界；不模拟布局或浏览器下载结果。
function boot(initial) {
  const downloads = [], blobs = new Map(), revoked = [], timers = [], writes = [];
  const storage = new Map(initial === undefined ? [] : [[storageKey, JSON.stringify(initial)]]);
  class Element {
    constructor(tagName = 'div') {
      this.tagName = tagName;
      this.value = ''; this.textContent = ''; this.children = []; this.listeners = {};
      this.attributes = {}; this.disabled = false; this.parentElement = null;
    }
    addEventListener(type, handler) { this.listeners[type] = handler; }
    dispatch(type) { return this.listeners[type]?.({ target: this, preventDefault() {} }); }
    append(...children) {
      for (const child of children) { child.parentElement = this; this.children.push(child); }
    }
    replaceChildren() { this.children = []; }
    setAttribute(name, value) { this.attributes[name] = value; }
    remove() {
      if (this.parentElement) this.parentElement.children = this.parentElement.children.filter(child => child !== this);
      this.parentElement = null;
    }
    click() {
      if (this.disabled) return;
      if (this.tagName === 'a') downloads.push({ href: this.href, filename: this.download, attached: this.parentElement === body });
      else this.dispatch('click');
    }
  }
  const nodes = Object.fromEntries([...html.matchAll(/\bid="([^"]+)"/g)].map(match => [match[1], new Element()]));
  const body = new Element('body');
  nodes.category.value = '设计';
  nodes['add-form'].reset = () => {
    for (const id of ['title', 'url', 'note']) nodes[id].value = '';
    nodes.category.value = '设计';
  };
  const urlApi = {
    createObjectURL: blob => { const url = `blob:test-${blobs.size}`; blobs.set(url, blob); return url; },
    revokeObjectURL: url => revoked.push(url),
  };
  vm.runInNewContext(source, {
    document: { querySelector: selector => nodes[selector.slice(1)] ?? null, createElement: tag => new Element(tag), body },
    localStorage: {
      getItem: key => storage.get(key) ?? null,
      setItem: (key, value) => { writes.push([key, value]); storage.set(key, value); },
    },
    crypto: { randomUUID }, Blob,
    URL: urlApi,
    setTimeout: (callback, delay) => timers.push({ callback, delay }),
  }, { filename: 'app.js' });
  return {
    nodes, downloads, blobs, revoked, timers, writes, storage, body, urlApi,
    titles: () => nodes.list.children.filter(node => node.tagName === 'article').map(node => node.children[0].textContent),
    add(item) {
      for (const id of ['title', 'url', 'category', 'note']) nodes[id].value = item[id];
      nodes['add-form'].dispatch('submit');
    },
  };
}

test('读取已保存收藏不改写数据或恢复示例数据', () => {
  const app = boot(saved);
  assert.deepEqual(app.titles(), saved.map(item => item.title));
  assert.equal(app.storage.get(storageKey), JSON.stringify(saved));
  assert.equal(app.writes.length, 0);
  assert.deepEqual(boot([]).titles(), []);
  assert.equal(boot().titles().length, 3);
});

test('新增与删除持久化到原存储键，重新加载保持结果', () => {
  const app = boot(saved);
  const added = { title: '新收藏', url: 'https://example.com/new', category: '开发', note: '第一行, "备注"\n第二行' };
  app.add(added);
  let stored = JSON.parse(app.storage.get(storageKey));
  assert.deepEqual(stored.slice(1), saved);
  assert.deepEqual({ ...stored[0], id: undefined }, { ...added, id: undefined });
  assert.ok(stored[0].id);
  assert.equal(app.titles()[0], added.title);
  app.nodes.list.children[0].children[2].children[1].click();
  stored = JSON.parse(app.storage.get(storageKey));
  assert.deepEqual(stored, saved);
  assert.deepEqual(boot(stored).titles(), saved.map(item => item.title));
  assert.equal(app.writes.length, 2);
  assert.ok(app.writes.every(([key]) => key === storageKey));
});

test('搜索标题或备注可与分类筛选组合，清空后恢复全部收藏', () => {
  const app = boot(saved);
  app.nodes.search.value = 'javascript'; app.nodes.search.dispatch('input');
  assert.deepEqual(app.titles(), ['JavaScript 手册']);
  app.nodes.search.value = '旧备注'; app.nodes.search.dispatch('input');
  assert.deepEqual(app.titles(), ['中文设计']);
  app.nodes.filter.value = '开发'; app.nodes.filter.dispatch('change');
  assert.deepEqual(app.titles(), []);
  assert.equal(app.nodes.count.textContent, '0 条收藏');
  app.nodes.search.value = ''; app.nodes.search.dispatch('input');
  assert.deepEqual(app.titles(), ['JavaScript 手册']);
  app.nodes.filter.value = ''; app.nodes.filter.dispatch('change');
  assert.deepEqual(app.titles(), saved.map(item => item.title));
  assert.equal(app.writes.length, 0);
});

async function exportedBytes(app) {
  assert.ok(app.nodes['export-button'], '页面应有导出收藏按钮');
  const count = app.downloads.length;
  app.nodes['export-button'].click();
  assert.equal(app.downloads.length, count + 1, '每次点击都应触发新的文件下载');
  const download = app.downloads.at(-1);
  assert.ok(download, '点击后应触发文件下载');
  const blob = app.blobs.get(download.href);
  assert.equal(blob.type, 'text/csv;charset=utf-8');
  return Buffer.from(await blob.arrayBuffer());
}

test('CSV 的 UTF-8 BOM、中文表头、四列顺序及特殊字符符合 Excel 导入格式', async () => {
  const app = boot([
    { id: 'special', title: '中文 "精选", 😀', url: 'https://example.com/?a=1,b=2', category: '设计', note: '第一行, "引号"\n第二行\r\n末行' },
    { id: 'empty', title: '空备注', url: 'https://example.com/', category: '开发', note: '' },
  ]);
  const bytes = await exportedBytes(app);
  assert.deepEqual([...bytes.subarray(0, 3)], [0xef, 0xbb, 0xbf]);
  assert.equal(bytes.subarray(3).toString('utf8'),
    '"标题","网址","分类","备注"\r\n' +
    '"中文 ""精选"", 😀","https://example.com/?a=1,b=2","设计","第一行, ""引号""\n第二行\r\n末行"\r\n' +
    '"空备注","https://example.com/","开发",""\r\n');
  assert.match(app.downloads[0].filename, /^拾页收藏-\d{4}-\d{2}-\d{2}\.csv$/);
  assert.match(app.nodes['export-status'].textContent, /2 条收藏/);
  assert.equal(app.writes.length, 0);
});

test('导出内容、顺序和条数与当前搜索及分类筛选的列表一致', async t => {
  const items = [...saved, { id: 'design-manual', title: '设计手册', url: 'https://example.com/manual', category: '设计', note: '参考' }];
  const rows = [
    '"中文设计","https://example.com/design","设计","保留旧备注"\r\n',
    '"JavaScript 手册","https://example.com/dev","开发","常用 API"\r\n',
    '"产品案例","https://example.com/product","产品",""\r\n',
    '"设计手册","https://example.com/manual","设计","参考"\r\n',
  ];
  for (const { name, query = '', category = '', expected } of [
    { name: '标题搜索忽略大小写和首尾空格', query: ' JAVASCRIPT ', expected: [1] },
    { name: '搜索备注', query: '旧备注', expected: [0] },
    { name: '分类筛选保留多条结果的顺序', category: '设计', expected: [0, 3] },
    { name: '搜索与分类取交集', query: '手册', category: '设计', expected: [3] },
  ]) {
    await t.test(name, async () => {
      const app = boot(items);
      app.nodes.search.value = query; app.nodes.search.dispatch('input');
      app.nodes.filter.value = category; app.nodes.filter.dispatch('change');
      assert.deepEqual(app.titles(), expected.map(index => items[index].title));
      const csv = (await exportedBytes(app)).subarray(3).toString('utf8');
      assert.equal(csv, '"标题","网址","分类","备注"\r\n' + expected.map(index => rows[index]).join(''));
      assert.equal(app.nodes.count.textContent, `${expected.length} 条收藏`);
      assert.match(app.nodes['export-status'].textContent, new RegExp(`当前 ${expected.length} 条收藏`));
      assert.equal(app.nodes.search.value, query);
      assert.equal(app.nodes.filter.value, category);
      assert.equal(app.storage.get(storageKey), JSON.stringify(items));
      assert.equal(app.writes.length, 0);
    });
  }
});

test('无匹配时明确提示并阻止下载，不会回退导出其他收藏', async t => {
  for (const { name, items = saved, query = '', category = '' } of [
    { name: '搜索无匹配', query: '没有结果' },
    { name: '分类无匹配', items: [saved[0], saved[2]], category: '开发' },
    { name: '搜索和分类分别有匹配但交集为空', query: '旧备注', category: '开发' },
  ]) {
    await t.test(name, () => {
      const app = boot(items);
      app.nodes.search.value = query; app.nodes.search.dispatch('input');
      app.nodes.filter.value = category; app.nodes.filter.dispatch('change');
      assert.deepEqual(app.titles(), []);
      assert.equal(app.nodes.count.textContent, '0 条收藏');
      assert.equal(app.nodes['export-button'].disabled, true);
      assert.match(app.nodes['export-status'].textContent, /没有匹配.*筛选/);
      app.nodes['export-button'].click();
      app.nodes['export-button'].dispatch('click');
      assert.equal(app.downloads.length, 0);
      assert.equal(app.blobs.size, 0);
      assert.equal(app.timers.length, 0);
      assert.equal(app.storage.get(storageKey), JSON.stringify(items));
      assert.equal(app.writes.length, 0);
    });
  }
});

test('清空搜索后仍按分类导出，选择全部分类后恢复导出全部', async () => {
  const app = boot(saved);
  app.nodes.search.value = '没有结果'; app.nodes.search.dispatch('input');
  app.nodes.filter.value = '开发'; app.nodes.filter.dispatch('change');
  assert.equal(app.nodes['export-button'].disabled, true);
  app.nodes.search.value = ''; app.nodes.search.dispatch('input');
  assert.equal(app.nodes['export-button'].disabled, false);
  assert.equal((await exportedBytes(app)).subarray(3).toString('utf8'),
    '"标题","网址","分类","备注"\r\n' +
    '"JavaScript 手册","https://example.com/dev","开发","常用 API"\r\n');
  app.nodes.filter.value = ''; app.nodes.filter.dispatch('change');
  assert.deepEqual(app.titles(), saved.map(item => item.title));
  assert.equal((await exportedBytes(app)).subarray(3).toString('utf8'),
    '"标题","网址","分类","备注"\r\n' +
    '"中文设计","https://example.com/design","设计","保留旧备注"\r\n' +
    '"JavaScript 手册","https://example.com/dev","开发","常用 API"\r\n' +
    '"产品案例","https://example.com/product","产品",""\r\n');
  assert.match(app.nodes['export-status'].textContent, /当前 3 条收藏/);
  assert.equal(app.storage.get(storageKey), JSON.stringify(saved));
  assert.equal(app.writes.length, 0);
});

test('筛选中新增或删除收藏后，导出立即反映最新可见数据', async () => {
  const app = boot(saved);
  app.nodes.search.value = '手册'; app.nodes.search.dispatch('input');
  app.nodes.filter.value = '开发'; app.nodes.filter.dispatch('change');
  const originalCsv = (await exportedBytes(app)).subarray(3).toString('utf8');
  app.add({ title: 'CSS 手册', url: 'https://example.com/css', category: '开发', note: '' });
  assert.deepEqual(app.titles(), ['CSS 手册', 'JavaScript 手册']);
  assert.equal((await exportedBytes(app)).subarray(3).toString('utf8'),
    '"标题","网址","分类","备注"\r\n' +
    '"CSS 手册","https://example.com/css","开发",""\r\n' +
    '"JavaScript 手册","https://example.com/dev","开发","常用 API"\r\n');
  app.nodes.list.children[0].children[2].children[1].click();
  assert.equal((await exportedBytes(app)).subarray(3).toString('utf8'), originalCsv);
  app.nodes.list.children[0].children[2].children[1].click();
  assert.equal(app.nodes['export-button'].disabled, true);
  assert.match(app.nodes['export-status'].textContent, /没有匹配.*筛选/);
  app.nodes['export-button'].dispatch('click');
  assert.equal(app.downloads.length, 3);
  assert.deepEqual(JSON.parse(app.storage.get(storageKey)), [saved[0], saved[2]]);
});

test('空集合禁用导出；新增后可导出最新数据，删除最后一条后再次禁用', async () => {
  const app = boot([]);
  assert.ok(app.nodes['export-button'], '页面应有导出收藏按钮');
  assert.equal(app.nodes['export-button'].disabled, true);
  assert.match(app.nodes['export-status'].textContent, /暂无收藏/);
  app.nodes['export-button'].click();
  assert.equal(app.downloads.length, 0);
  app.add({ title: '刚添加', url: 'https://example.com/new', category: '产品', note: ' 保留首尾空格 ' });
  assert.equal(app.nodes['export-button'].disabled, false);
  assert.match((await exportedBytes(app)).toString('utf8'), /"刚添加","https:\/\/example.com\/new","产品"," 保留首尾空格 "/);
  app.nodes.list.children[0].children[2].children[1].click();
  assert.equal(app.nodes['export-button'].disabled, true);
  assert.deepEqual(JSON.parse(app.storage.get(storageKey)), []);
  assert.equal(app.writes.length, 2);
});

test('重复导出创建独立下载，移除临时链接并延迟释放 URL', async () => {
  const app = boot(saved);
  await exportedBytes(app);
  await exportedBytes(app);
  assert.equal(app.downloads.length, 2);
  assert.ok(app.downloads.every(download => download.attached));
  assert.notEqual(app.downloads[0].href, app.downloads[1].href);
  assert.equal(app.body.children.length, 0);
  assert.deepEqual(app.revoked, []);
  assert.equal(app.timers.length, 2);
  for (const timer of app.timers) { assert.ok(timer.delay >= 1000); timer.callback(); }
  assert.deepEqual(app.revoked, app.downloads.map(download => download.href));
});

test('下载接口异常时提示重试，不修改收藏，恢复后仍可导出', async () => {
  const app = boot(saved);
  assert.ok(app.nodes['export-button'], '页面应有导出收藏按钮');
  const createObjectURL = app.urlApi.createObjectURL;
  app.urlApi.createObjectURL = () => { throw new Error('download unavailable'); };
  assert.doesNotThrow(() => app.nodes['export-button'].click());
  assert.match(app.nodes['export-status'].textContent, /导出失败.*重试/);
  assert.equal(app.body.children.length, 0);
  assert.equal(app.storage.get(storageKey), JSON.stringify(saved));
  assert.equal(app.writes.length, 0);
  app.urlApi.createObjectURL = createObjectURL;
  await exportedBytes(app);
  assert.equal(app.downloads.length, 1);
});
