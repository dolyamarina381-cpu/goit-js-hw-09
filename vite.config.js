import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  base: '/goit-js-hw-09/',
  root: rootDir,
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(rootDir, 'index.html'),
        gallery: resolve(rootDir, 'src/1-gallery.html'),
        form: resolve(rootDir, 'src/2-form.html'),
      },
    },
  },
});
