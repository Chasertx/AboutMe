import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  // Project site is hosted at /AboutMe/ on GitHub Pages.
  base: '/AboutMe/',
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
