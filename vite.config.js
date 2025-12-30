import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { SITE_CONTENT } from './src/constants/content'

export default defineConfig({
  plugins: [
    react()
  ],
})

