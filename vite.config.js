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
    // Optimize bundle size with code splitting
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Split vendor libraries into separate chunks
          if (id.includes('node_modules')) {
            // React and React DOM
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'vendor-react';
            }
            // Stripe libraries
            if (id.includes('stripe') || id.includes('@stripe')) {
              return 'vendor-stripe';
            }
            // Other large vendor libraries
            if (id.includes('react-helmet')) {
              return 'vendor-helmet';
            }
            // All other node_modules
            return 'vendor';
          }
        },
      },
    },
    // Enable source maps for debugging (optional, can disable for smaller builds)
    sourcemap: false,
    // Minify for production (using esbuild which is faster and built-in)
    minify: 'esbuild',
  },
})
