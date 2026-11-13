import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { readFile } from 'node:fs/promises';

const base = '/solo-vibe-coding/';
const example = 'examples/quote-calculator/';

for (const locale of ['en', 'zh-CN'] as const) {
  const path = locale === 'en' ? base : base + 'zh-CN/';

  test(`${locale}: try a working result and follow a clear start path`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    await page.goto(path);
    await expect(page.locator('h1')).toBeVisible();
    const calculator = page.locator('[data-calculator]');
    await expect(calculator.locator('input[name="hours"]')).toBeEnabled();
    await expect(calculator.locator('[data-total]')).toContainText(locale === 'en' ? '660.00' : '3,960.00');
    await calculator.locator('input[name="hours"]').fill('20');
    await calculator.locator('input[name="rate"]').fill('80');
    await calculator.locator('input[name="extras"]').fill('100');
    await calculator.locator('input[name="reserve"]').fill('15');
    await expect(calculator.locator('[data-total]')).toContainText('1,955.00');
    await calculator.locator('input[name="hours"]').focus();
    await page.keyboard.press('Tab');
    await expect(calculator.locator('input[name="rate"]')).toBeFocused();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    await page.locator('[data-start]').first().click();
    await expect(page).toHaveURL(new RegExp('/getting-started/$'));
    await expect(page.locator('#first-task')).toContainText(locale === 'en' ? 'calculator' : '报价');
    await page.goto(path + '#task-growth');
    await expect(page.locator('#task-growth')).toBeVisible();
    expect(errors).toEqual([]);
  });

  test(`${locale}: calculator handles errors, cents, export and large values`, async ({ page }) => {
    await page.goto(path + example);
    const tool = page.locator('[data-calculator]');
    const total = tool.locator('[data-total]');
    const downloadButton = tool.locator('[data-download]');
    await tool.locator('input[name="hours"]').fill('-1');
    await expect(tool.locator('[data-calculator-error]')).toBeVisible();
    await expect(total).toHaveText('—');
    await expect(downloadButton).toBeDisabled();
    await tool.locator('input[name="hours"]').fill('1.5');
    await tool.locator('input[name="rate"]').fill('');
    await expect(total).toHaveText('—');
    await tool.locator('input[name="rate"]').fill('19.99');
    await tool.locator('input[name="extras"]').fill('0.01');
    await tool.locator('input[name="reserve"]').fill('101');
    await expect(downloadButton).toBeDisabled();
    await tool.locator('input[name="reserve"]').fill('10');
    await expect(total).toContainText('33.00');
    await expect(tool.locator('[data-calculator-error]')).toBeHidden();
    const downloaded = page.waitForEvent('download');
    await downloadButton.click();
    const file = await downloaded;
    expect(file.suggestedFilename()).toMatch(/\.csv$/);
    const csv = await readFile((await file.path())!, 'utf8');
    expect(csv.charCodeAt(0)).toBe(0xfeff);
    expect(csv).toContain(locale === 'en' ? '"Total","33.00","USD"' : '"总额","33.00","CNY"');
    await tool.locator('input[name="hours"]').fill('0.29');
    await tool.locator('input[name="rate"]').fill('0.50');
    await tool.locator('input[name="extras"]').fill('0');
    await tool.locator('input[name="reserve"]').fill('0');
    await expect(total).toContainText('0.15');
    await tool.locator('input[name="hours"]').fill('1');
    await tool.locator('input[name="rate"]').fill('3.75');
    await tool.locator('input[name="reserve"]').fill('9.2');
    await expect(tool.locator('[data-reserve]')).toContainText('0.35');
    await expect(total).toContainText('4.10');
    const roundedDownload = page.waitForEvent('download');
    await downloadButton.click();
    const roundedFile = await roundedDownload;
    const roundedCSV = await readFile((await roundedFile.path())!, 'utf8');
    expect(roundedCSV).toContain(locale === 'en' ? '"Total","4.10","USD"' : '"总额","4.10","CNY"');
    await tool.locator('input[name="hours"]').fill('0.5');
    await tool.locator('input[name="rate"]').fill('0.2899999999999');
    await tool.locator('input[name="reserve"]').fill('0');
    await expect(total).toContainText('0.15');
    const normalizedDownload = page.waitForEvent('download');
    await downloadButton.click();
    const normalizedCSV = await readFile((await (await normalizedDownload).path())!, 'utf8');
    expect(normalizedCSV).toContain(locale === 'en' ? '"Rate per hour","0.29","USD"' : '"每小时单价","0.29","CNY"');
    expect(normalizedCSV).toContain(locale === 'en' ? '"Total","0.15","USD"' : '"总额","0.15","CNY"');
    await tool.locator('input[name="hours"]').fill('0.25');
    await tool.locator('input[name="rate"]').fill('80');
    await tool.locator('input[name="extras"]').fill('0');
    await tool.locator('input[name="reserve"]').fill('0.5');
    await expect(total).toContainText('20.10');
    await tool.locator('input[name="rate"]').fill('80.001');
    await expect(tool.locator('[data-calculator-error]')).toContainText(locale === 'en' ? 'two decimal places' : '两位小数');
    await expect(downloadButton).toBeDisabled();
    await tool.locator('input[name="hours"]').fill('10000');
    await tool.locator('input[name="rate"]').fill('1000000');
    await tool.locator('input[name="extras"]').fill('1000000000');
    await tool.locator('input[name="reserve"]').fill('100');
    await expect(total).toContainText('22,000,000,000.00');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    for (const name of ['hours', 'rate', 'extras', 'reserve']) await tool.locator(`input[name="${name}"]`).fill('0');
    await expect(total).toContainText('0.00');
  });

  test(`${locale}: complete request, clipboard, language pairs and user updates`, async ({ page, context }) => {
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);
    await page.goto(path + 'getting-started/');
    await expect(page.locator('#requirements a')).toHaveAttribute('href', 'https://learn.chatgpt.com/docs/codex/cli#getting-started');
    await expect(page.locator('#installation')).toContainText('--agent codex --yes');
    const copy = page.locator('#first-task [data-copy]');
    await copy.click();
    await expect(copy).toHaveAttribute('data-copied', 'true');
    const text = await page.evaluate(() => navigator.clipboard.readText());
    expect(text).toContain('$solo-vibe-coding');
    expect(text).toContain(locale === 'en' ? 'open and try' : '打开试用');
    await page.locator('a[data-language-switch]').click();
    await expect(page).toHaveURL(new RegExp(`${locale === 'en' ? '/zh-CN' : ''}/getting-started/`));
    await expect(page.locator('html')).toHaveAttribute('lang', locale === 'en' ? 'zh-CN' : 'en');
    await page.goto(path + example);
    await page.locator('a[data-language-switch]').click();
    await expect(page).toHaveURL(new RegExp(`${locale === 'en' ? '/zh-CN' : ''}/${example}`));
    await page.goto(path + 'guides/');
    await expect(page.locator('[data-guide-task]')).toHaveCount(6);
    await page.goto(path + 'build-log/');
    await page.locator('[data-log-entry]').first().click();
    await expect(page.locator('article')).toBeVisible();
    await expect(page.locator('article a').filter({ hasText: locale === 'en' ? 'quote calculator' : '报价计算器' })).toBeVisible();
    await expect(page.locator('time')).toHaveAttribute('datetime', /2026-11-13/);
  });

  test(`${locale}: pages remain accessible and fit the viewport`, async ({ page }) => {
    for (const route of ['', 'getting-started/', 'guides/', example, 'build-log/', 'build-log/first-public-build/']) {
      await page.goto(path + route);
      const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
      expect(results.violations.filter((item) => ['serious', 'critical'].includes(item.impact ?? ''))).toEqual([]);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    }
  });
}

test.describe('without JavaScript', () => {
  test.use({ javaScriptEnabled: false });
  test('content, goal links and setup work in both languages', async ({ page }) => {
    for (const prefix of ['', 'zh-CN/']) {
      await page.goto(base + prefix);
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('[data-calculator] input[name="hours"]')).toBeDisabled();
      await expect(page.locator('[data-calculator] [data-total]')).toBeVisible();
      await expect(page.locator('[data-calculator] noscript')).toBeVisible();
      await page.locator('[data-start]').first().click();
      await expect(page).toHaveURL(/getting-started\/$/);
      await expect(page.locator('#first-task')).toContainText('$solo-vibe-coding');
      await page.locator('header a[data-page="examples"]').click();
      await expect(page.locator('[data-calculator]')).toBeVisible();
    }
  });
});

test('clipboard denial keeps manual copying available', async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'clipboard', { value: { writeText: async () => { throw new Error('Clipboard permission denied'); } } });
  });
  await page.goto(base + 'getting-started/');
  const copy = page.locator('#first-task [data-copy]');
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
  await page.locator('main a').first().click();
  await expect(page).toHaveURL(new RegExp(base + '$'));
});
