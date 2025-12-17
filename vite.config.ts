import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Dream-Big-01/',
  plugins: [react()],
  build: {
    sourcemap: true
  }
})
