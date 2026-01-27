// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://nicologebbani.github.io', // <--- Add your GitHub URL here
  vite: {
    plugins: [tailwindcss()],
  },
});