import { defineConfig } from 'vite';
import { resolve } from 'path';

const root = resolve(__dirname);

export default defineConfig({
  base: '/goit-js-hw-09/',

  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        gallery: resolve(root, '1-gallery.html'),
        form: resolve(root, '2-form.html'),
      },
    },
  },
});