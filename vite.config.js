import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    lib: {
      entry: 'src/index.js', // Entry point for your library
      name: 'PropulsionUI',
      fileName: (format) => `propulsion-ui.${format}.js`,
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['solid-js'], // Exclude solid-js from the bundle
      output: {
        globals: {
          'solid-js': 'Solid', // Define the global variable name here
        },
      },
    },
  },
});
