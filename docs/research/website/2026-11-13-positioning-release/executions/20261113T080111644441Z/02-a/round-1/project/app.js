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
function createBookmarksCsv(items) {
  const rows = [
    ['标题', '网址', '分类', '备注'],
    ...items.map(item => [item.title, item.url, item.category, item.note]),
  ];
  const csv = rows.map(row => row.map(value => `"${String(value ?? '').replace(/"/g, '""')}"`).join(',')).join('\r\n');
  // UTF-8 BOM 便于 Windows Excel 识别中文，记录之间使用 CRLF 换行。
  return '\uFEFF' + csv + '\r\n';
}
exportButton.addEventListener('click', () => {
  if (!bookmarks.length) return;
  try {
    const blob = new Blob([createBookmarksCsv(bookmarks)], { type: 'text/csv;charset=utf-8' });
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const now = new Date();
    const date = [now.getFullYear(), String(now.getMonth() + 1).padStart(2, '0'), String(now.getDate()).padStart(2, '0')].join('-');
    link.href = objectUrl;
    link.download = `收藏-${date}.csv`;
    link.hidden = true;
    document.body.append(link);
    try { link.click(); } finally {
      link.remove();
      // 延迟释放，让手机浏览器有时间读取下载内容。
      setTimeout(() => URL.revokeObjectURL(objectUrl), 60_000);
    }
    exportStatus.textContent = `已生成 ${bookmarks.length} 条收藏的 CSV，请查看浏览器下载或保存提示。`;
  } catch {
    exportStatus.textContent = '导出失败，请重试。';
  }
});
function render() {
  const query = search.value.trim().toLowerCase();
  const visible = bookmarks.filter(item => (!filter.value || item.category === filter.value) && `${item.title} ${item.note}`.toLowerCase().includes(query));
  document.querySelector('#count').textContent = `${visible.length} 条收藏`;
  exportButton.disabled = bookmarks.length === 0;
  exportButton.title = bookmarks.length ? '下载全部收藏的 CSV 文件' : '暂无收藏，请先添加收藏';
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
search.addEventListener('input', render); filter.addEventListener('change', render); render();
