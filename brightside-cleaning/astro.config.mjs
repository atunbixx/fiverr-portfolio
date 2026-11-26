// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: process.env.SITE_URL || 'https://brightside-cleaning.pages.dev',
  output: 'static',
  vite: { plugins: [tailwindcss()] },
});
