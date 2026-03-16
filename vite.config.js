import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    // Enable SPA routing for development
    historyApiFallback: true,
    // Proxy API requests to backend server
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    // Rely on Vite default chunking so React and dependents load in correct order (avoids createContext undefined)
    // Enable source maps for debugging (optional, can disable for smaller builds)
    sourcemap: false,
    // Minify for production (using esbuild which is faster and built-in)
    minify: 'esbuild',
  },
})
