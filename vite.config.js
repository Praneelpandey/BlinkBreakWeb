import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // allow the sandbox preview proxy host during development
    allowedHosts: true,
    host: '0.0.0.0',
  },
})
