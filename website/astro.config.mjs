import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jmaxzh.github.io',
  base: '/solo-vibe-coding',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (url) => !url.endsWith('/404/') })],
  vite: { build: { assetsInlineLimit: 0 } },
});
