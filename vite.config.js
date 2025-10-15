import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    // Enable SPA routing for development
    historyApiFallback: true,
  },
  build: {
    // Ensure proper routing for production builds
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
