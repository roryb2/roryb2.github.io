// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Update this if you use a custom domain.
  site: 'https://roryb2.github.io',
  // Astro 7's default ('jsx') drops spaces between elements, which runs words together in plain text.
  compressHTML: true,
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: { theme: 'github-light' },
  },
});
