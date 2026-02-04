import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['react/compiler-runtime', 'react-is', 'react-compiler-runtime', 'void-elements', 'prop-types', 'react-focus-lock', 'shallowequal', 'lodash', 'lodash/deburr'],
  },
  build: {
    sourcemap: true
  }
})
