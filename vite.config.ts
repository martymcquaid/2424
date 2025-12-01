import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/118c20c7-8ab1-418f-bc94-5d75504c4c5e/preview',
  plugins: [react()],
  server: {
    port: 5177,
    host: '0.0.0.0',
    strictPort: true,
    hmr: {
      port: 5177,
    },
  },
})
