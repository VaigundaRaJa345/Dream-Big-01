import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Dream-Big-01/' , // Ensures assets are loaded correctly on GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});