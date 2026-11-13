import { createRequire } from 'node:module';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const archive = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(path.resolve(archive, '../../../../website/package.json'));
const { chromium } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const states = [], motion = [], offline = [];
await mkdir(path.join(archive, 'screenshots'), { recursive: true });
try {
  if (!process.argv.includes('--offline-only')) {
  for (const locale of ['zh-CN', 'en']) for (const width of [1440, 390]) {
    const context = await browser.newContext({ viewport: { width, height: width === 390 ? 844 : 1000 }, ...(width === 390 ? { isMobile: true, hasTouch: true } : {}) });
    const page = await context.newPage(), errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto('http://127.0.0.1:4321/solo-vibe-coding/' + (locale === 'zh-CN' ? 'zh-CN/' : ''));
    await page.evaluate(() => document.fonts.ready);
    await page.waitForFunction(() => document.documentElement.dataset.motion === 'on');
    const image = page.locator('[data-hero-object]');
    await image.evaluate((img) => img.decode());
    const before = await image.evaluate((img) => getComputedStyle(img).transform);
    await page.waitForTimeout(180);
    const after = await image.evaluate((img) => getComputedStyle(img).transform);
    let pointerTilt = null;
    if (width === 1440) {
      const bounds = await page.locator('[data-hero-tilt]').boundingBox();
      await page.mouse.move(bounds.x + bounds.width * .85, bounds.y + bounds.height * .35);
      pointerTilt = await page.locator('[data-art-transform]').evaluate((art) => art.style.transform);
      if (!pointerTilt) throw new Error('Fine-pointer tilt did not respond.');
    }
    if (before === after) throw new Error('Hero float did not move.');
    await page.locator('[data-motion-toggle]').click();
    const paused = await image.evaluate((img) => getComputedStyle(img).animationPlayState === 'paused');
    const clearedTilt = await page.locator('[data-art-transform]').evaluate((art) => !art.style.transform);
    if (!paused || !clearedTilt) throw new Error('Pause did not stop motion.');
    motion.push({ locale, width, floatMoved: before !== after, pointerTilt, paused, clearedTilt });
    for (const task of ['development', 'design', 'deployment', 'growth']) {
      await page.locator(`[data-choice="${task}"]`).click();
      await page.locator(`[data-outcome="${task}"]`).scrollIntoViewIfNeeded();
      const art = page.locator(`[data-outcome="${task}"] [data-case-art]`);
      await art.evaluate((img) => img.decode());
      const axe = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
      const failures = axe.violations.filter((v) => ['serious', 'critical'].includes(v.impact ?? '')).map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) }));
      const state = { locale, width, task, overflow: await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), artLoaded: await art.evaluate((img) => img.naturalWidth > 0), failures, errors: [...errors] };
      states.push(state);
      if (state.overflow || !state.artLoaded || failures.length || errors.length) throw new Error(JSON.stringify(state));
      if (task === 'design' && locale === 'zh-CN' && width === 1440) await page.locator('[data-task-stage]').screenshot({ path: path.join(archive, 'screenshots/design.zh-CN.1440.png') });
    }
    await page.locator('[data-choice="development"]').click();
    await page.evaluate(() => scrollTo(0, 0));
    await page.screenshot({ path: path.join(archive, `screenshots/hero.${locale}.${width}.png`) });
    await page.screenshot({ path: path.join(archive, `screenshots/home.${locale}.${width}.png`), fullPage: true });
    await context.close();
  }
  await writeFile(path.join(archive, 'browser-states.json'), JSON.stringify(states, null, 2) + '\n');
  await writeFile(path.join(archive, 'motion-checks.json'), JSON.stringify(motion, null, 2) + '\n');
  console.log('16 live case states and 4 actual motion checks passed.');
  }
  for (const locale of ['zh-CN', 'en']) for (const javaScriptEnabled of [true, false]) {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 }, javaScriptEnabled });
    const page = await context.newPage(), errors = [], requests = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('request', (request) => { if (/^https?:/.test(request.url())) requests.push(request.url()); });
    await page.goto(pathToFileURL(path.join(archive, `preview.${locale}.html`)).href);
    await page.locator('[data-hero-object]').evaluate((img) => img.decode());
    if (javaScriptEnabled) {
      await page.waitForFunction(() => ['on', 'off'].includes(document.documentElement.dataset.motion));
      if (await page.locator('html').getAttribute('data-motion') === 'on') await page.locator('[data-motion-toggle]').click();
    } else if (await page.locator('[data-motion-toggle]').isVisible()) throw new Error('No-JS motion control should be hidden.');
    await page.locator('[data-choice="deployment"]').click();
    if (!await page.locator('[data-outcome="deployment"]').isVisible()) throw new Error('Offline case selection failed.');
    await page.locator('[data-outcome="deployment"] [data-case-art]').evaluate((img) => img.decode());
    await page.locator('[data-task-start="deployment"]').click();
    await page.locator('[data-task-request="deployment"]').waitFor({ state: 'visible' });
    if (javaScriptEnabled) {
      await page.waitForFunction(() => document.querySelector('[data-task-picker]')?.dataset.selectedTask === 'deployment');
      await page.locator('#first-task a[href="#installation"]').click();
      await page.locator('[data-language-switch]').click();
      await page.waitForFunction(() => document.querySelector('[data-task-picker]')?.dataset.selectedTask === 'deployment');
      await page.reload();
      await page.waitForFunction(() => document.querySelector('[data-task-picker]')?.dataset.selectedTask === 'deployment');
    }
    await page.goto(pathToFileURL(path.join(archive, `guides.${locale}.html`)).href + '#design');
    if (!await page.locator('#design').isVisible()) throw new Error('Offline guide anchor failed.');
    const state = { locale, javaScriptEnabled, httpRequests: requests, pageErrors: errors };
    offline.push(state);
    if (requests.length || errors.length) throw new Error(JSON.stringify(state));
    await context.close();
  }
  await writeFile(path.join(archive, 'offline-preview-checks.json'), JSON.stringify(offline, null, 2) + '\n');
  for (const [source, target] of [['/tmp/solo-vibe-visual-validate.log', 'validate.log'], ['/tmp/solo-vibe-visual-e2e.log', 'e2e.log']]) {
    await writeFile(path.join(archive, target), (await readFile(source, 'utf8')).replace(/[ \t]+$/gm, ''));
  }
  console.log('4 bilingual offline contexts passed, JavaScript on/off, without HTTP requests or page errors.');
} finally { await browser.close(); }
