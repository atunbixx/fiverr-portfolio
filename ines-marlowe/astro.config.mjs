// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || 'https://ines-marlowe.pages.dev',
  output: 'static',
});
