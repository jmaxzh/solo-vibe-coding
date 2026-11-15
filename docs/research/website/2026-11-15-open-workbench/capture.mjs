// Run from website/: node ../docs/research/website/2026-11-15-open-workbench/capture.mjs
// Optional: PREVIEW_ORIGIN=http://127.0.0.1:4391
import { createRequire } from 'node:module';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { mkdir, writeFile } from 'node:fs/promises';

const require = createRequire(resolve('package.json'));
const { chromium } = require('@playwright/test');
const root = dirname(fileURLToPath(import.meta.url));
const output = join(root, 'screenshots');
await mkdir(output, { recursive: true });
const origin = process.env.PREVIEW_ORIGIN ?? 'http://127.0.0.1:4391';
const browser = await chromium.launch({ channel: process.env.PLAYWRIGHT_CHANNEL ?? 'chrome' });
const context = await browser.newContext({ deviceScaleFactor: 1, reducedMotion: 'reduce' });
const page = await context.newPage();
const errors = [], failedRequests = [], overflows = [], captures = [];
page.on('pageerror', error => errors.push(error.message));
page.on('response', response => { if (response.status() >= 400) failedRequests.push({ url: response.url(), status: response.status() }); });
const routes = ['', 'getting-started/', 'guides/', 'examples/quote-calculator/', 'case-study/bookmark-export/', 'build-log/', 'build-log/first-public-build/', 'build-log/working-methods/'];

async function visit(locale, route, width, height = 1000) {
  await page.setViewportSize({ width, height });
  await page.goto(`${origin}/solo-vibe-coding/${locale === 'en' ? '' : 'zh-CN/'}${route}`, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
}

try {
  for (const locale of ['en', 'zh-CN']) {
    for (const width of [320, 360, 390, 600, 768, 1024, 1440, 1920]) {
      for (const route of routes) {
        await visit(locale, route, width);
        const overflow = await page.evaluate(() => ({ width: innerWidth, document: document.documentElement.scrollWidth }));
        if (overflow.document > overflow.width) overflows.push({ locale, route, ...overflow });
      }
    }
    for (const [device, width, height] of [['desktop', 1440, 1000], ['mobile', 390, 844]]) {
      await visit(locale, '', width, height);
      // Load all lazy images before the full-page screenshot.
      await page.evaluate(async () => {
        for (const img of document.querySelectorAll('img')) {
          if (img.closest('details:not([open])')) continue;
          img.loading = 'eager';
          await img.decode().catch(() => {});
        }
      });
      for (const full of [false, true]) {
        const name = `${locale}-${device}-${full ? 'full' : 'hero'}.png`;
        await page.screenshot({ path: join(output, name), fullPage: full });
        captures.push(name);
      }
      for (const [name, route] of [['setup', 'getting-started/'], ['calculator', 'examples/quote-calculator/'], ['case', 'case-study/bookmark-export/'], ['guides', 'guides/'], ['updates', 'build-log/'], ['article', 'build-log/working-methods/']]) {
        await visit(locale, route, width, height);
        await page.screenshot({ path: join(output, `${locale}-${device}-${name}.png`) });
      }
    }
  }
  const result = { browser: await browser.version(), origin, checkedLayouts: 2 * 8 * routes.length, errors, failedRequests, overflows, captures };
  await writeFile(join(root, 'render-checks.json'), JSON.stringify(result, null, 2) + '\n');
  console.log(JSON.stringify(result));
  if (errors.length || failedRequests.length || overflows.length) process.exitCode = 1;
} finally {
  await browser.close();
}
