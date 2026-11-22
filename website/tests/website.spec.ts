import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const base = '/solo-vibe-coding/';

for (const locale of ['en', 'zh-CN'] as const) {
  const path = locale === 'en' ? base : base + 'zh-CN/';

  test(`${locale}: homepage leads to delivery guidance and installation`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto(path);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.locator('[data-task-entry]')).toHaveCount(6);
    await page.locator('.product-actions a[href="#how-it-helps"]').click();
    await expect(page).toHaveURL(/#how-it-helps$/);
    await expect(page.locator('[data-delivery-method] li')).toHaveCount(6);
    await page.locator('.how-steps a[href="#delivery-method"]').click();
    await expect(page.locator('#delivery-method')).toBeVisible();
    const question = page.locator('.home-faq summary').first();
    await question.focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('.home-faq details').first()).toHaveAttribute('open', '');
    await page.locator('[data-task-entry="project-initialization"]').click();
    await expect(page.locator('#project-initialization h2')).toBeVisible();
    await expect(page.locator('[data-guide-task]')).toHaveCount(6);
    await page.goto(path);
    await page.locator('.product-actions [data-start]').click();
    await expect(page).toHaveURL(path + 'getting-started/');
    await expect(page.locator('#installation')).toContainText('--agent codex --yes');
    await expect(page.locator('#task-clarify')).toBeVisible();
    expect(errors).toEqual([]);
  });

  test(`${locale}: orbit responds to motion controls and stops rendering away from view`, async ({ page }) => {
    await page.goto(path);
    const canvas = page.locator('[data-orbit-canvas]');
    const signature = () => canvas.evaluate((element) => {
      const value = (element as HTMLCanvasElement).toDataURL();
      let hash = 2166136261;
      for (let i = 0; i < value.length; i += 17) hash = Math.imul(hash ^ value.charCodeAt(i), 16777619);
      return hash >>> 0;
    });
    const settleFrames = () => page.evaluate(async () => {
      for (let i = 0; i < 6; i++) await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
    });
    const initial = await signature();
    await expect.poll(signature).not.toBe(initial);
    if (await page.evaluate(() => matchMedia('(hover: hover) and (pointer: fine)').matches)) {
      await page.mouse.move(1200, 350);
      await expect.poll(() => page.locator('[data-orbit-scene]').evaluate(e => e.style.getPropertyValue('--orbit-x'))).not.toBe('');
    }
    await page.locator('[data-motion-toggle]').click();
    await expect(page.locator('html')).toHaveAttribute('data-motion', 'off');
    const paused = await signature();
    await settleFrames();
    expect(await signature()).toBe(paused);
    await page.locator('[data-motion-toggle]').click();
    await expect.poll(signature).not.toBe(paused);
    await page.locator('#how-it-helps').scrollIntoViewIfNeeded();
    await expect(page.locator('[data-orbit-scene]')).toHaveAttribute('data-scene-state', 'static');
    const away = await signature();
    await settleFrames();
    expect(await signature()).toBe(away);
    await page.locator('.product-hero').scrollIntoViewIfNeeded();
    await expect.poll(signature).not.toBe(away);
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await expect(page.locator('[data-motion-toggle]')).toBeDisabled();
    const reduced = await signature();
    await settleFrames();
    expect(await signature()).toBe(reduced);
    await expect(page.locator('[data-orbit-scene] img')).toBeVisible();
    expect(await page.locator('[data-orbit-scene] img').evaluate(e => (e as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
  });

  test(`${locale}: tablet navigation leaves the motion control clickable`, async ({ page }) => {
    for (const width of [601, 700, 701, 768, 800]) {
      await page.setViewportSize({ width, height: 844 });
      await page.goto(path);
      const control = page.locator('[data-motion-toggle]');
      expect(await control.evaluate(element => {
        const rect = element.getBoundingClientRect();
        const hit = document.elementFromPoint(rect.x + rect.width / 2, rect.y + rect.height / 2);
        return hit === element || element.contains(hit);
      })).toBe(true);
      await control.click();
      await expect(page.locator('html')).toHaveAttribute('data-motion', 'off');
      await control.click();
      await expect(page.locator('html')).toHaveAttribute('data-motion', 'on');
      await expect(page.locator('.main-navigation')).toBeVisible();
    }
  });

  test(`${locale}: installation, updates and version verification remain copyable`, async ({ page, context }) => {
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);
    await page.goto(path);
    const updateFAQ = page.locator('.home-faq details').filter({ has: page.locator('.faq-help') });
    await updateFAQ.locator('summary').click();
    await updateFAQ.locator('.faq-help').click();
    await expect(page.locator('[data-update-help]')).toHaveAttribute('open', '');
    await page.locator('#updating details > summary').click();
    await page.locator('#updating .install-code [data-copy]').first().click();
    expect(await page.evaluate(() => navigator.clipboard.readText())).toBe('npx skills@latest add jmaxzh/solo-vibe-coding --skill solo-vibe-coding --agent codex --yes');
    await page.locator('#updating > a[href="#verify-skill"]').click();
    await expect(page.locator('[data-version-help]')).toHaveAttribute('open', '');
    await page.locator('#verify-skill [data-copy]').click();
    const verification = await page.evaluate(() => navigator.clipboard.readText());
    expect(verification).toContain('SKILL.md');
    expect(verification).toContain(locale === 'en' ? 'read-only' : '只读');
    await page.goto(path);
    await page.locator('#install [data-copy]').click();
    expect(await page.evaluate(() => navigator.clipboard.readText())).toBe('npx skills add jmaxzh/solo-vibe-coding --skill solo-vibe-coding --agent codex --yes');
  });

  test(`${locale}: each page keeps its topic when switching language`, async ({ page }) => {
    for (const route of ['', 'getting-started/', 'guides/']) {
      await page.goto(path + route);
      await page.locator('[data-language-switch]').click();
      await expect(page).toHaveURL(base + (locale === 'en' ? 'zh-CN/' : '') + route);
      await expect(page.locator('html')).toHaveAttribute('lang', locale === 'en' ? 'zh-CN' : 'en');
    }
  });

  test(`${locale}: pages remain accessible and fit the viewport`, async ({ page }) => {
    for (const route of ['', 'getting-started/', 'guides/']) {
      await page.goto(path + route);
      await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1);
      if (route) await expect(page.locator('[data-page-intro]')).toBeVisible();
      const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
      expect(results.violations.filter((item) => ['serious', 'critical'].includes(item.impact ?? ''))).toEqual([]);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    }
  });

  for (const [task, boundary] of [
      ['clarify', locale === 'en' ? 'do not implement' : '不进行实现'],
      ['initialize', locale === 'en' ? 'preserve existing data' : '保留已有数据'],
      ['plan', locale === 'en' ? 'do not implement or install' : '不进行实现或安装'],
      ['review', locale === 'en' ? 'without editing files' : '不修改文件'],
      ['visual-assets', locale === 'en' ? 'editable source or generation parameters' : '可编辑源文件或生成参数'],
      ['requirements', locale === 'en' ? 'first usable version' : '第一个可用版本'],
      ['architecture', locale === 'en' ? 'confirmed feature' : '已确认的功能'],
      ['design', locale === 'en' ? 'viewable reference' : '可查看的参考'],
      ['development', locale === 'en' ? 'Reproduce the failure' : '先重现失败'],
      ['deployment', locale === 'en' ? 'publication authorisation' : '发布授权'],
      ['growth', locale === 'en' ? 'Do not publish' : '这次不发布'],
      ['product-video', locale === 'en' ? 'playable exported file and editable project' : '可播放的导出文件与可编辑工程'],
    ]) {
    test(`${locale}: ${task} keeps its request through guides, setup and language changes`, async ({ page, context }) => {
      await context.grantPermissions(['clipboard-read', 'clipboard-write']);
    await page.goto(path + 'guides/#' + task);
    const request = await page.locator(`[data-guide-example="${task}"] code`).textContent();
    expect(request).toContain(boundary);
    await page.locator(`[data-guide-start="${task}"]`).click();
    await expect(page.locator('[data-task-picker]')).toHaveAttribute('data-selected-task', task);
    const selected = page.locator(`[data-task-request="${task}"]`);
    await expect(selected).toBeVisible();
    await expect(page.locator('[data-task-request]:visible')).toHaveCount(1);
    await selected.locator('[data-copy]').click();
    expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(request);
    await page.locator('#first-task a[href="#installation"]').click();
    await page.locator('[data-language-switch]').click();
    await page.reload();
    await expect(page.locator('[data-task-picker]')).toHaveAttribute('data-selected-task', task);
    await expect(page.locator(`[data-task-request="${task}"]`)).toBeVisible();
    await expect(page.locator('[data-task-request]:visible')).toHaveCount(1);
    });
  }

}

test.describe('without JavaScript', () => {
  test.use({ javaScriptEnabled: false });
  test('guides, setup, updates and FAQ work in both languages', async ({ page }) => {
    for (const prefix of ['', 'zh-CN/']) {
      await page.goto(base + prefix);
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
      await expect(page.locator('[data-orbit-scene] img')).toBeVisible();
      await expect(page.locator('[data-motion-toggle]')).toBeHidden();
      await page.locator('.product-actions a[href="#how-it-helps"]').click();
      await expect(page.locator('#how-it-helps')).toBeVisible();
      const faq = page.locator('.home-faq details').first();
      await faq.locator('summary').click();
      await expect(faq.locator('p')).toBeVisible();
      await page.locator('[data-task-entry="project-initialization"]').click();
      await expect(page.locator('#initialize code')).toContainText(prefix ? '保留已有数据' : 'preserve existing data');
      await page.locator('[data-guide-start="initialize"]').click();
      await expect(page.locator('#task-initialize')).toBeVisible();
      await expect(page.locator('[data-task-request]')).toHaveCount(12);
      await expect(page.locator('#task-review')).toBeVisible();
      await page.locator('[data-task-menu] > summary').click();
      await page.locator('.task-request-nav a[href="#task-design"]').click();
      await expect(page.locator('#task-design code')).toBeVisible();
      await page.goto(base + prefix + 'getting-started/#updating');
      await expect(page.locator('#updating code').first()).toBeVisible();
      await page.locator('#updating > a[href="#verify-skill"]').click();
      await expect(page.locator('#verify-skill code')).toBeVisible();
    }
  });
});

test('removed pages and their downloadable resources return 404', async ({ request }) => {
  for (const prefix of ['', 'zh-CN/']) {
    for (const route of ['case-study/bookmark-export/', 'examples/quote-calculator/', 'build-log/', 'build-log/working-methods/', 'build-log/first-public-build/']) {
      expect((await request.get(base + prefix + route)).status()).toBe(404);
    }
  }
  for (const resource of ['case-study/bookmark-starter.zip', 'case-study/bookmarks-round-1.png', 'case-study/bookmarks-round-2.png', 'media/app-mobile.webp', 'media/design-before.webp', 'media/design-after.webp', 'media/login.webp', 'media/video-call.webp', 'licenses/big-js-MIT.txt']) {
    expect((await request.get(base + resource)).status()).toBe(404);
  }
});

test('clipboard denial keeps manual copying available', async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'clipboard', { value: { writeText: async () => { throw new Error('Clipboard permission denied'); } } });
  });
  await page.goto(base + 'getting-started/');
  const copy = page.locator('#task-clarify [data-copy]');
  await copy.click();
  await expect(copy).toContainText('Select and copy the text');
  await expect(copy).not.toHaveAttribute('data-copied', 'true');
  expect(await page.evaluate(() => window.getSelection()?.toString())).toContain('$solo-vibe-coding');
});

test('reduced motion and 404 remain usable', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(base);
  await expect(page.locator('html')).toHaveCSS('scroll-behavior', 'auto');
  await page.goto(base + '404.html');
  await expect(page.locator('h1')).toContainText('404');
  await expect(page.locator('[data-page-intro="missing"]')).toBeVisible();
  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  expect(results.violations.filter((item) => ['serious', 'critical'].includes(item.impact ?? ''))).toEqual([]);
  await page.locator('main a').first().click();
  await expect(page).toHaveURL(new RegExp(base + '$'));
});
