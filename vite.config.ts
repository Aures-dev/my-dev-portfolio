import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['gsap', '@splinetool/react-spline']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          gsap: ['gsap'],
          spline: ['@splinetool/react-spline', '@splinetool/runtime']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
});
