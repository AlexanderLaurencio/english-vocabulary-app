import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/english-vocabulary-app/",
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './setupTest.js',
  },
})
