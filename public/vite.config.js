import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const rootDir = resolve(__dirname, '..');

export default defineConfig({
	base: '/goit-js-hw-09/',
	root: rootDir,
	resolve: {
		alias: {
			simplelightbox: resolve(__dirname, 'node_modules/simplelightbox'),
		},
	},
	build: {
		outDir: 'dist',
		rollupOptions: {
			input: {
				main: resolve(rootDir, 'public/index.html'),
				gallery: resolve(rootDir, 'public/1-gallery.html'),
				form: resolve(rootDir, 'public/2-form.html'),
			},
		},
	},
});
