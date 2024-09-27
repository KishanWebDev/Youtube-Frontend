import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://youtube-backend-1pzv.onrender.com/api/v1'
    }
  }
})