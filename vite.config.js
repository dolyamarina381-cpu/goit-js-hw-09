import { defineConfig } from 'vite';
import { resolve } from 'path';

import { fileURLToPath } from 'node:url';
const rootDir = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  base: '/goit-js-hw-09/',
  root: rootDir,
  build: {
    rollupOptions: {
      input: {
        main: resolve(rootDir, 'index.html'),
        gallery: resolve(rootDir, '1-gallery.html'),
        form: resolve(rootDir, '2-form.html'),
      },
    },
  },
});