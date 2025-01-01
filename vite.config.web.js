import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  base: '/propulsion-ui/',
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist-web',
    target: 'esnext',
  },
});