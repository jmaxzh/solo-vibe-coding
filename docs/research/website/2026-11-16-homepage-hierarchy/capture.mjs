import { chromium } from '../../../../website/node_modules/playwright-core/index.mjs';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const phase = process.argv[2] ?? 'after';
const origin = process.argv[3] ?? 'http://127.0.0.1:4395';
const root = fileURLToPath(new URL('./', import.meta.url));
await mkdir(root + 'screenshots', { recursive: true });
const browser = await chromium.launch({ channel: 'chrome' });
const records = [];
for (const locale of ['zh-CN', 'en']) {
  for (const width of [390, 820, 1440]) {
    const page = await browser.newPage({ viewport: { width, height: width === 390 ? 844 : 1000 }, reducedMotion: 'reduce', deviceScaleFactor: 1 });
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    const response = await page.goto(origin + '/solo-vibe-coding/' + (locale === 'en' ? '' : 'zh-CN/'));
    await page.evaluate(async () => { await document.fonts.ready; await Promise.all([...document.images].map(i => { i.loading = "eager"; return i.decode().catch(() => {}); })); });
    const layout = await page.evaluate(() => {
      const box = s => { const r = document.querySelector(s).getBoundingClientRect(); return { top: r.top + scrollY, left: r.left, right: r.right, bottom: r.bottom + scrollY, height: r.height }; };
      const font = s => getComputedStyle(document.querySelector(s)).fontSize;
      return { title: document.querySelector('h1').innerText, overflow: document.documentElement.scrollWidth > innerWidth, pageHeight: document.documentElement.scrollHeight,
        hero: box('.product-hero'), copy: box('.hero-copy'), art: box('.hero-art'), canvas: box('.art-canvas'),
        usage: box('#usage-demo'), evidence: box('.evidence-section'), caseImage: box('.case-image'),
        fonts: { definition: font('.hero-overline'), description: font('.hero-description'), action: font('.product-actions .button'), method: font('.task-help strong') },
        imageLoaded: [...document.images].every(i => i.complete && i.naturalWidth > 0)
      };
    });
    await page.screenshot({ path: root + `screenshots/${phase}-${locale}-${width}-hero.png` });
    if (width !== 820) await page.screenshot({ path: root + `screenshots/${phase}-${locale}-${width}-full.png`, fullPage: true });
    const evidence = page.locator('.evidence-section');
    const evidenceHeight = Math.ceil((await evidence.boundingBox()).height);
    await page.setViewportSize({ width, height: Math.max(page.viewportSize().height, evidenceHeight + 24) });
    await evidence.screenshot({ path: root + `screenshots/${phase}-${locale}-${width}-evidence.png` });
    records.push({ locale, width, status: response.status(), ...layout, errors });
    await page.close();
  }
}
await browser.close();
await writeFile(root + phase + '-layout.json', JSON.stringify(records, null, 2) + '\n');
console.log(JSON.stringify(records));
