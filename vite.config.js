import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    lib: {
      entry: 'src/index.js', // Entry point for your library
      name: 'PropulsionUI',
      fileName: (format) => `my-solid-library.${format}.js`,
    },
    rollupOptions: {
      external: ['solid-js'], // Exclude solid-js from the bundle
    },
  },
});