import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import docs from './plugins/docs'
import markdown from './plugins/markdown'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    docs(),
    markdown(),
    vue({
      include: [/\.vue$/, /\.md$/],
    })
  ]
})
