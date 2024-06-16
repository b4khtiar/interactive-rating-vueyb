import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/interactive-rating-vueyb/',
  build: {
    outDir: 'Dist',
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
  plugins: [vue()],
})
