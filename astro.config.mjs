import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import { fileURLToPath } from 'node:url';

export default defineConfig({
  root: fileURLToPath(new URL('.', import.meta.url)),
  outDir: fileURLToPath(new URL('./dist', import.meta.url)),
  cacheDir: fileURLToPath(new URL('./.astro', import.meta.url)),
  site: 'https://example.com',
  integrations: [
    mdx(),
    tailwind({
      configFile: fileURLToPath(new URL('./tailwind.config.cjs', import.meta.url)),
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
});
