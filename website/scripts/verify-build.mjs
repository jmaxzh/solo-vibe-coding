import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseHTML } from 'linkedom';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../dist');
const origin = 'https://jmaxzh.github.io';
const base = '/solo-vibe-coding/';
const limits = { html: 100 * 1024, javascript: 60 * 1024, site: 5 * 1024 * 1024 };
assert.ok(existsSync(root), 'Build the website before checking its output.');

function filesIn(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) =>
    entry.isDirectory() ? filesIn(join(directory, entry.name)) : [join(directory, entry.name)],
  );
}

const files = filesIn(root);
const pages = files.filter((file) => file.endsWith('.html'));
const errors = [];
const check = (condition, message) => { if (!condition) errors.push(message); };
const toURL = (file) => new URL(base + relative(root, file).replaceAll('\\', '/').replace(/index\.html$/, ''), origin);
const documents = new Map(pages.map((file) => [file, parseHTML(readFileSync(file, 'utf8')).document]));
const titles = new Set();
const descriptions = new Set();

function targetFile(url) {
  if (!url.pathname.startsWith(base)) return null;
  const path = decodeURIComponent(url.pathname.slice(base.length));
  const file = resolve(root, path);
  if (!file.startsWith(root + '/') && file !== root) return null;
  if (existsSync(file) && statSync(file).isFile()) return file;
  const index = join(file, 'index.html');
  return existsSync(index) ? index : null;
}

check(pages.length >= 11, `Expected bilingual content and a 404 page, found ${pages.length} HTML files.`);
for (const file of pages) {
  const document = documents.get(file);
  const label = relative(root, file);
  const url = toURL(file);
  const is404 = label === '404.html';
  const title = document.querySelector('title')?.textContent?.trim();
  const description = document.querySelector('meta[name="description"]')?.getAttribute('content');
  const language = document.documentElement.lang;
  check(['en', 'zh-CN'].includes(language), `${label}: missing or invalid language.`);
  check(document.querySelectorAll('h1').length === 1, `${label}: expected exactly one h1.`);
  check(document.querySelectorAll('main').length === 1, `${label}: expected one main landmark.`);
  check(Boolean(title), `${label}: missing title.`);
  check(Boolean(description), `${label}: missing description.`);
  check(statSync(file).size <= limits.html, `${label}: HTML exceeds 100 KiB.`);
  if (!is404) {
    check(!titles.has(title), `${label}: duplicate title.`);
    check(!descriptions.has(description), `${label}: duplicate description.`);
    titles.add(title);
    descriptions.add(description);
    check(document.querySelector('link[rel="canonical"]')?.getAttribute('href') === url.href, `${label}: canonical does not match ${url.href}.`);
    check(!document.querySelector('meta[name="robots"]')?.getAttribute('content')?.includes('noindex'), `${label}: unexpected noindex.`);
    const alternates = [...document.querySelectorAll('link[rel="alternate"][hreflang]')];
    check(['en', 'zh-CN', 'x-default'].every((lang) => alternates.some((item) => item.getAttribute('hreflang') === lang)), `${label}: incomplete language alternates.`);
    for (const alternate of alternates) {
      const href = alternate.getAttribute('href');
      const target = targetFile(new URL(href, url));
      check(Boolean(target), `${label}: language target does not exist: ${href}.`);
      const other = documents.get(target);
      check(Boolean(other?.querySelector(`link[rel="alternate"][hreflang="${language}"][href="${url.href}"]`)), `${label}: alternate does not link back from ${href}.`);
    }
    const image = document.querySelector('meta[property="og:image"]')?.getAttribute('content');
    check(Boolean(image && targetFile(new URL(image))), `${label}: social image is missing.`);
    check(document.querySelector('meta[property="og:url"]')?.getAttribute('content') === url.href, `${label}: og:url is incorrect.`);
    const structured = [...document.querySelectorAll('script[type="application/ld+json"]')];
    check(structured.length > 0, `${label}: missing structured data.`);
    for (const script of structured) {
      try {
        const value = JSON.parse(script.textContent);
        check(value['@context'] === 'https://schema.org', `${label}: invalid structured-data context.`);
        check(!JSON.stringify(value).includes('aggregateRating'), `${label}: unverified aggregate rating.`);
      } catch { errors.push(`${label}: structured data is not valid JSON.`); }
    }
  }

  const ids = [...document.querySelectorAll('[id]')].map((item) => item.id);
  check(new Set(ids).size === ids.length, `${label}: duplicate element IDs.`);
  for (const element of document.querySelectorAll('a[href], link[href], script[src], img[src]')) {
    const href = element.getAttribute('href') ?? element.getAttribute('src');
    if (!href || /^(mailto:|tel:|data:)/.test(href)) continue;
    const target = new URL(href, url);
    if (target.origin !== origin) continue;
    const destination = targetFile(target);
    check(Boolean(destination), `${label}: broken local link or asset: ${href}.`);
    if (destination && target.hash && documents.has(destination)) {
      check(Boolean(documents.get(destination).getElementById(decodeURIComponent(target.hash.slice(1)))), `${label}: missing anchor ${href}.`);
    }
  }
}

const sitemapIndex = join(root, 'sitemap-index.xml');
const sitemapFiles = files.filter((file) => /sitemap.*\.xml$/.test(file));
check(existsSync(sitemapIndex), 'Missing sitemap-index.xml.');
const listed = new Set(sitemapFiles.flatMap((file) => [...readFileSync(file, 'utf8').matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1])));
for (const file of pages.filter((file) => !file.endsWith('/404.html'))) {
  check(listed.has(toURL(file).href), `Page missing from sitemap: ${toURL(file).href}.`);
}
check(![...listed].some((url) => url.includes('/404')), '404 page is included in sitemap.');
check([...listed].every((url) => url.startsWith(origin + base) && targetFile(new URL(url))), 'Sitemap has an invalid URL.');
check(existsSync(join(root, '.nojekyll')), 'Missing .nojekyll.');
const javascriptSize = files.filter((file) => /\.(m?js)$/.test(file)).reduce((sum, file) => sum + statSync(file).size, 0);
const totalSize = files.reduce((sum, file) => sum + statSync(file).size, 0);
check(javascriptSize <= limits.javascript, 'JavaScript exceeds the 60 KiB budget.');
check(totalSize <= limits.site, 'Website exceeds the 5 MiB budget.');

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Verified ${pages.length} HTML pages, ${listed.size} sitemap URLs, all local links and anchors, language pairs, metadata and structured data.`);
  console.log(`JavaScript: ${(javascriptSize / 1024).toFixed(1)} KiB; complete website: ${(totalSize / 1024).toFixed(1)} KiB.`);
}
