import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://acmeos-demo.example',
  build: { format: 'file' },
  compressHTML: false,
});
