import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const base = '/solo-vibe-coding/';

for (const locale of ['en', 'zh-CN'] as const) {
  const path = locale === 'en' ? base : base + 'zh-CN/';
  test(`${locale}: responsive home, task selection, keyboard and copy`, async ({ page, context, browserName }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto(path);
    await expect(page.locator('h1')).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    const tabs = page.getByRole('tab');
    await expect(tabs).toHaveCount(6);
    await tabs.nth(1).click();
    await expect(tabs.nth(1)).toHaveAttribute('aria-selected', 'true');
    await expect(page.getByRole('tabpanel')).toHaveCount(1);
    await tabs.nth(1).press('ArrowRight');
    await expect(tabs.nth(2)).toBeFocused();
    await expect(tabs.nth(2)).toHaveAttribute('aria-selected', 'true');
    await tabs.nth(2).press('Home');
    await expect(tabs.nth(0)).toBeFocused();
    if (browserName === 'chromium') {
      await context.grantPermissions(['clipboard-read', 'clipboard-write']);
      const copy = page.locator('[data-install] [data-copy]');
      await copy.click();
      await expect(copy).toHaveAttribute('data-copied', 'true');
      expect(await page.evaluate(() => navigator.clipboard.readText())).toBe('npx skills add jmaxzh/solo-vibe-coding --skill solo-vibe-coding');
    }
    await page.goto(path + '#task-growth');
    await expect(tabs.nth(5)).toHaveAttribute('aria-selected', 'true');
    expect(errors).toEqual([]);
  });

  test(`${locale}: guide navigation, locale pairs and article`, async ({ page }) => {
    await page.goto(path);
    await page.locator('header a[data-page="getting-started"]').click();
    await expect(page.locator('main')).toContainText('npx skills add');
    await page.locator('a[data-language-switch]').click();
    await expect(page).toHaveURL(new RegExp(`${locale === 'en' ? '/zh-CN' : ''}/getting-started/`));
    await expect(page.locator('html')).toHaveAttribute('lang', locale === 'en' ? 'zh-CN' : 'en');
    await page.goto(path + 'guides/');
    await expect(page.locator('[data-guide-task]')).toHaveCount(6);
    await page.goto(path + 'build-log/');
    await page.locator('[data-log-entry]').first().click();
    await expect(page.locator('article')).toBeVisible();
    await expect(page.locator('time')).toHaveAttribute('datetime', /2026-11-13/);
  });

  test(`${locale}: main pages have no serious or critical axe violations`, async ({ page }) => {
    for (const route of ['', 'getting-started/', 'guides/', 'build-log/', 'build-log/first-public-build/']) {
      await page.goto(path + route);
      const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
      expect(results.violations.filter((item) => ['serious', 'critical'].includes(item.impact ?? ''))).toEqual([]);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    }
  });
}

test.describe('without JavaScript', () => {
  test.use({ javaScriptEnabled: false });
  test('content and navigation work in both languages', async ({ page }) => {
    for (const prefix of ['', 'zh-CN/']) {
      await page.goto(base + prefix);
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('[data-task-panel]')).toHaveCount(6);
      await expect(page.locator('[data-task-panel]').last()).toBeVisible();
      await expect(page.locator('[data-install]')).toContainText('npx skills add');
      await page.locator('header a[data-page="getting-started"]').click();
      await expect(page).toHaveURL(/getting-started\/$/);
    }
  });
});

test('clipboard denial keeps manual copying available', async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'clipboard', { value: { writeText: async () => { throw new Error('Clipboard permission denied'); } } });
  });
  await page.goto(base);
  const copy = page.locator('[data-install] [data-copy]');
  await copy.click();
  await expect(copy).toContainText('Select and copy the text');
  await expect(copy).not.toHaveAttribute('data-copied', 'true');
  expect(await page.evaluate(() => window.getSelection()?.toString())).toBe('npx skills add jmaxzh/solo-vibe-coding --skill solo-vibe-coding');
});

test('reduced motion and 404 remain usable', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(base);
  await expect(page.locator('html')).toHaveCSS('scroll-behavior', 'auto');
  await page.goto(base + '404.html');
  await expect(page.locator('h1')).toContainText('404');
  await page.locator('main a').first().click();
  await expect(page).toHaveURL(new RegExp(base + '$'));
});
