import { readFile, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Archive-only packaging. Run after building website/; production never loads it.
const directory = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(directory, '../../../..');
const dist = path.join(root, 'website/dist');
const require = createRequire(path.join(root, 'website/package.json'));
const { parseHTML } = require('linkedom');
const base = '/solo-vibe-coding/';
const origin = 'https://jmaxzh.github.io';
const pages = ['en', 'zh-CN'].flatMap((locale) => {
  const prefix = base + (locale === 'zh-CN' ? 'zh-CN/' : '');
  return [
    { route: prefix, filename: `preview.${locale}.html` },
    { route: prefix + 'getting-started/', filename: `getting-started.${locale}.html` },
    { route: prefix + 'guides/', filename: `guides.${locale}.html` },
  ];
});
const destination = new Map(pages.map(({ route, filename }) => [route, filename]));
const types = { '.woff2': 'font/woff2', '.woff': 'font/woff', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp' };
const localPath = (url) => {
  if (url.origin !== origin || !url.pathname.startsWith(base)) throw new Error(`Unexpected asset: ${url.href}`);
  const filename = path.resolve(dist, decodeURIComponent(url.pathname.slice(base.length)));
  if (!filename.startsWith(dist + path.sep)) throw new Error(`Asset outside build: ${filename}`);
  return filename;
};
const embedded = new Map();
const dataURL = async (url) => {
  const filename = localPath(url);
  if (!embedded.has(filename)) {
    const bytes = await readFile(filename);
    embedded.set(filename, `data:${types[path.extname(filename)] ?? 'application/octet-stream'};base64,${bytes.toString('base64')}`);
  }
  return embedded.get(filename);
};
for (const page of pages) {
  const htmlPath = path.join(dist, page.route.slice(base.length), 'index.html');
  const { document } = parseHTML(await readFile(htmlPath, 'utf8'));
  const pageURL = new URL(page.route, origin);
  for (const link of [...document.querySelectorAll('link[rel="stylesheet"]')]) {
    const stylesheetURL = new URL(link.getAttribute('href'), pageURL);
    let css = await readFile(localPath(stylesheetURL), 'utf8');
    for (const match of [...css.matchAll(/url\(\s*['"]?([^'"\)]+)['"]?\s*\)/g)]) {
      if (match[1].startsWith('data:')) continue;
      css = css.replaceAll(match[0], `url("${await dataURL(new URL(match[1], stylesheetURL))}")`);
    }
    const style = document.createElement('style');
    style.textContent = css;
    link.replaceWith(style);
  }
  for (const script of [...document.querySelectorAll('script[src]')]) {
    const code = await readFile(localPath(new URL(script.getAttribute('src'), pageURL)), 'utf8');
    if (/\bimport\s*\(/.test(code) || /\bfrom\s*["']/.test(code)) throw new Error('Bundle imports need additional packaging.');
    script.removeAttribute('src');
    script.textContent = code.replaceAll('</script', '<\\/script');
  }
  for (const img of document.querySelectorAll('img[src]')) {
    const url = new URL(img.getAttribute('src'), pageURL);
    if (url.origin !== origin || !url.pathname.startsWith(base)) continue;
    img.setAttribute('src', await dataURL(url));
    img.removeAttribute('srcset');
    img.removeAttribute('sizes');
  }
  for (const icon of document.querySelectorAll('link[rel="icon"]')) icon.setAttribute('href', await dataURL(new URL(icon.getAttribute('href'), pageURL)));
  for (const anchor of document.querySelectorAll('a[href]')) {
    const raw = anchor.getAttribute('href');
    if (raw.startsWith('#')) continue;
    const url = new URL(raw, pageURL);
    if (url.origin !== origin || !url.pathname.startsWith(base)) continue;
    anchor.setAttribute('href', destination.has(url.pathname) ? destination.get(url.pathname) + url.search + url.hash : url.href);
  }
  for (const link of document.querySelectorAll('link[rel="sitemap"]')) link.setAttribute('href', new URL(link.getAttribute('href'), pageURL).href);
  await writeFile(path.join(directory, page.filename), '<!doctype html>\n' + document.documentElement.outerHTML);
  console.log(page.filename);
}
