import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://icret.github.io';

export default defineConfig({
  site: SITE,
  base: '/Calc',
  output: 'static',
  trailingSlash: 'never',
  i18n: {
    locales: ['zh-Hans', 'en'],
    defaultLocale: 'zh-Hans',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'zh-Hans',
        locales: {
          'zh-Hans': 'zh-Hans',
          'en': 'en',
        },
      },
    }),
  ],
});