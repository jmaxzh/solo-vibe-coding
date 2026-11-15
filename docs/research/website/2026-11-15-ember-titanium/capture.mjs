import { chromium } from '../../../../website/node_modules/playwright/index.mjs';
import { createRequire } from 'node:module';
import { writeFile, readFile } from 'node:fs/promises';
const sharp = createRequire(new URL('../../../../website/package.json', import.meta.url))('sharp');
const output = new URL('.', import.meta.url);
const browser = await chromium.launch({ channel: 'chrome' });
const context = await browser.newContext({ deviceScaleFactor: 1, reducedMotion: 'reduce' });
const page = await context.newPage();
const errors = [];
page.on('pageerror', error => errors.push(error.message));
const shots = [];
for (const locale of ['zh-CN', 'en']) for (const [device, width, height] of [['desktop', 1440, 1000], ['mobile', 390, 844]]) {
  await page.setViewportSize({ width, height });
  for (const [name, port] of [['before', 4333], ['after', 4335]]) {
    await page.goto(`http://127.0.0.1:${port}/solo-vibe-coding/${locale === 'en' ? '' : 'zh-CN/'}`, { waitUntil: 'networkidle' });
    await page.evaluate(async () => {
      await document.fonts.ready;
      for (const img of document.images) img.loading = 'eager';
      await Promise.all([...document.images].map(img => img.decode().catch(() => {})));
    });
    const stem = `screenshots/${name}-${locale}-${device}`;
    await page.screenshot({ path: new URL(stem + '-hero.png', output).pathname });
    await page.screenshot({ path: new URL(stem + '-full.png', output).pathname, fullPage: true });
    shots.push({ name, locale, device, width, height, pageHeight: await page.evaluate(() => document.documentElement.scrollHeight), title: await page.locator('h1').boundingBox(), demo: await page.locator('[data-hero-object]').boundingBox() });
  }
  await sharp({ create: { width: width * 2, height, channels: 3, background: '#0b0908' } }).composite([
    { input: await readFile(new URL(`screenshots/before-${locale}-${device}-hero.png`, output)), left: 0, top: 0 },
    { input: await readFile(new URL(`screenshots/after-${locale}-${device}-hero.png`, output)), left: width, top: 0 },
  ]).png().toFile(new URL(`screenshots/comparison-${locale}-${device}.png`, output).pathname);
}
await writeFile(new URL('screenshots.json', output), JSON.stringify({ browser: await browser.version(), capturedAt: new Date().toISOString(), baseline: '471e3cd', reducedMotion: true, shots, errors }, null, 2));
await browser.close();
console.log(JSON.stringify({ shots: shots.length, errors }));
