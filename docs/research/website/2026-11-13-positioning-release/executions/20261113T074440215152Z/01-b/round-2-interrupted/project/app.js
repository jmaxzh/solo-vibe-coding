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
const exportStatus = document.querySelector('#export-status');
function save() { localStorage.setItem(storageKey, JSON.stringify(bookmarks)); }
function getVisibleBookmarks() {
  const query = search.value.trim().toLowerCase();
  return bookmarks.filter(item => (!filter.value || item.category === filter.value) && `${item.title} ${item.note}`.toLowerCase().includes(query));
}
function render() {
  const visible = getVisibleBookmarks();
  document.querySelector('#count').textContent = `${visible.length} 条收藏`;
  exportButton.disabled = !visible.length;
  exportStatus.textContent = visible.length
    ? `将导出当前显示的 ${visible.length} 条收藏。`
    : bookmarks.length ? '没有匹配的收藏可导出，请清除或调整搜索与分类筛选。' : '暂无收藏可导出。';
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
function exportBookmarks() {
  const visible = getVisibleBookmarks();
  if (!visible.length) { render(); return; }
  const link = document.createElement('a');
  let objectUrl;
  try {
    const rows = [['标题', '网址', '分类', '备注'], ...visible.map(item => [item.title, item.url, item.category, item.note])];
    const csv = '\uFEFF' + rows.map(row => row.map(value => `"${String(value ?? '').replace(/"/g, '""')}"`).join(',')).join('\r\n') + '\r\n';
    objectUrl = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
    link.href = objectUrl; link.download = '拾页收藏.csv';
    document.body.append(link); link.click();
    exportStatus.textContent = `已开始下载当前显示的 ${visible.length} 条收藏。`;
  } catch {
    exportStatus.textContent = '下载未能开始，请重试。';
  } finally {
    link.remove();
    // 留出浏览器启动下载的时间，再释放临时文件地址。
    if (objectUrl) setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
  }
}
document.querySelector('#add-form').addEventListener('submit', event => {
  event.preventDefault();
  bookmarks.unshift({ id: crypto.randomUUID(), title: document.querySelector('#title').value.trim(), url: document.querySelector('#url').value.trim(), category: document.querySelector('#category').value, note: document.querySelector('#note').value });
  save(); render(); event.target.reset(); document.querySelector('#status').textContent = '已添加收藏。';
});
exportButton.addEventListener('click', exportBookmarks);
search.addEventListener('input', render); filter.addEventListener('change', render); render();
