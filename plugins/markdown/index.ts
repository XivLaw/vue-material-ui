import MarkdownIt from 'markdown-it'
import type { Plugin } from 'vite'

const md = MarkdownIt({
  html: true,
  linkify: true
})

export default (...arg): Plugin => {
  return { 
    name: 'mdToVue',
    transform(code, id) {
      if (id.endsWith('.md')) {
        return {
          code: md.render(code),
          map: null
        }
      }
    }
  }
}