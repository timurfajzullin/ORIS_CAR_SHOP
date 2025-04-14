import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 7020, // Укажите нужный порт
    open: true  // Опционально: автоматически открывать браузер
  }
})