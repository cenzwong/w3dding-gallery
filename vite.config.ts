import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/w3dding-gallery/',
  server: {
    host: '0.0.0.0',
  },
})

