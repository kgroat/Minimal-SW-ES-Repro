import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VitePWA({
    srcDir: 'src',
    filename: 'service-worker.ts',
    strategies: 'injectManifest',
  })],
});
