import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Replace 'yami-portfolio' with your actual GitHub repo name
export default defineConfig({
  plugins: [vue()],
  base: '/portfolio/',
})
