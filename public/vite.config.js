import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  base: '/goit-js-hw-09/',
  root: rootDir,
  resolve: {
    alias: {
      simplelightbox: resolve(rootDir, 'node_modules/simplelightbox'),
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(rootDir, 'index.html'),
        gallery: resolve(rootDir, '1-gallery.html'),
        form: resolve(rootDir, '2-form.html'),
      },
    },
  },
});
