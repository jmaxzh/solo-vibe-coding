import { defineConfig, devices } from '@playwright/test';

const port = Number(process.env.PLAYWRIGHT_PORT ?? 4321);

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: 'list',
  use: {
    baseURL: `http://127.0.0.1:${port}`,
    channel: process.env.PLAYWRIGHT_CHANNEL,
    trace: 'retain-on-failure',
  },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 1000 } } },
    { name: 'mobile', use: { ...devices['iPhone 13'], defaultBrowserType: 'chromium' } },
  ],
  webServer: {
    command: `npm run preview -- --port ${port} --ignore-lock`,
    url: `http://127.0.0.1:${port}/solo-vibe-coding/`,
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});
