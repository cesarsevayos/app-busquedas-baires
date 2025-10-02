import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'pseudozoological-barrable-filomena.ngrok-free.dev'
    ],
  },
})