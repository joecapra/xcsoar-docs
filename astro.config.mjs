// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import pagefind from 'astro-pagefind';

// https://astro.build/config
export default defineConfig({
  site: 'https://joecapra.github.io',
  base: 'xcsoar-docs',
  output: 'static',
  integrations: [pagefind()],
  vite: {
    plugins: [tailwindcss()],
  },
});
