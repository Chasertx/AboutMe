import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  // Use relative asset paths so one build can run from GitHub Pages project paths,
  // custom domains, and other static hosts without path-specific rebuilds.
  base: './',
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5158',
        changeOrigin: true,
      },
    },
  },
})
