import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // FRED: keep /fred in the path — the real API URL contains it
      // api.stlouisfed.org/fred/series/observations ← /fred stays!
      '/fred': {
        target: 'https://api.stlouisfed.org',
        changeOrigin: true,
        secure: true,
      }
    }
  }
})