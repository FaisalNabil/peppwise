import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.peppwise.com',
  build: { format: 'file' },
  compressHTML: false,
});
