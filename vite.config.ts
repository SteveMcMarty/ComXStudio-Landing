import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Configuration Vite pour ComXStudio.ai Landing Page
 * Optimisée pour Cloudflare Pages
 */
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'icons-vendor': ['react-icons'],
        },
      },
    },
  },
  server: {
    port: 3001,
    open: true,
  },
});
