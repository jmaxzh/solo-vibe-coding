const storageKey = 'solo-bookmarks-v1';
const defaults = [
  { id: 'design', title: '界面灵感', url: 'https://example.com/design', category: '设计', note: '下次做页面时看看。' },
  { id: 'development', title: '开发手册', url: 'https://example.com/development', category: '开发', note: '保留常用操作。' },
  { id: 'product', title: '产品案例', url: 'https://example.com/product', category: '产品', note: '看看别人怎么介绍产品。' },
];
let bookmarks;
try { bookmarks = JSON.parse(localStorage.getItem(storageKey)) ?? defaults; } catch { bookmarks = defaults; }
const search = document.querySelector('#search');
const filter = document.querySelector('#filter');
const list = document.querySelector('#list');
const exportButton = document.querySelector('#export');
function save() { localStorage.setItem(storageKey, JSON.stringify(bookmarks)); }
function bookmarksToCsv(items) {
  const rows = [
    ['标题', '网址', '分类', '备注'],
    ...items.map(item => [item.title, item.url, item.category, item.note]),
  ];
  const csv = rows.map(row => row.map(value => `"${String(value ?? '').replace(/"/g, '""')}"`).join(',')).join('\r\n');
  // UTF-8 BOM 让 Windows Excel 直接识别中文。
  return '\uFEFF' + csv + '\r\n';
}
function getVisibleBookmarks() {
  const query = search.value.trim().toLowerCase();
  return bookmarks.filter(item => (!filter.value || item.category === filter.value) && `${item.title} ${item.note}`.toLowerCase().includes(query));
}
function render() {
  const visible = getVisibleBookmarks();
  exportButton.disabled = visible.length === 0;
  document.querySelector('#export-help').textContent = !bookmarks.length
    ? '暂无收藏，添加后即可导出。'
    : visible.length
      ? `导出当前显示的 ${visible.length} 条收藏。清空搜索并选择“全部分类”可导出全部。`
      : '没有匹配的收藏可导出，请调整或清除搜索和分类筛选。';
  document.querySelector('#export-status').textContent = '';
  document.querySelector('#count').textContent = `${visible.length} 条收藏`;
  list.replaceChildren();
  for (const item of visible) {
    const article = document.createElement('article'); article.className = 'bookmark';
    const link = document.createElement('a'); link.textContent = item.title; link.href = item.url; link.target = '_blank'; link.rel = 'noopener noreferrer';
    const note = document.createElement('p'); note.textContent = item.note;
    const footer = document.createElement('footer');
    const tag = document.createElement('span'); tag.className = 'tag'; tag.textContent = item.category;
    const remove = document.createElement('button'); remove.className = 'delete'; remove.type = 'button'; remove.textContent = '删除'; remove.setAttribute('aria-label', `删除 ${item.title}`);
    remove.addEventListener('click', () => { bookmarks = bookmarks.filter(bookmark => bookmark.id !== item.id); save(); render(); });
    footer.append(tag, remove); article.append(link, note, footer); list.append(article);
  }
  if (!visible.length) { const empty = document.createElement('p'); empty.className = 'empty'; empty.textContent = '还没有匹配的收藏。'; list.append(empty); }
}
document.querySelector('#add-form').addEventListener('submit', event => {
  event.preventDefault();
  bookmarks.unshift({ id: crypto.randomUUID(), title: document.querySelector('#title').value.trim(), url: document.querySelector('#url').value.trim(), category: document.querySelector('#category').value, note: document.querySelector('#note').value });
  save(); render(); event.target.reset(); document.querySelector('#status').textContent = '已添加收藏。';
});
exportButton.addEventListener('click', () => {
  const visible = getVisibleBookmarks();
  if (!visible.length) { render(); return; }
  const status = document.querySelector('#export-status');
  const link = document.createElement('a');
  let objectUrl;
  try {
    const blob = new Blob([bookmarksToCsv(visible)], { type: 'text/csv;charset=utf-8' });
    objectUrl = URL.createObjectURL(blob);
    link.href = objectUrl;
    link.download = '拾页收藏.csv';
    document.body.append(link);
    link.click();
    status.textContent = `已开始下载 ${visible.length} 条收藏。`;
  } catch {
    status.textContent = '导出失败，请重试。';
  } finally {
    link.remove();
    // 给手机浏览器留出读取下载内容的时间，再释放临时 URL。
    if (objectUrl) setTimeout(() => URL.revokeObjectURL(objectUrl), 60_000);
  }
});
search.addEventListener('input', render); filter.addEventListener('change', render); render();
