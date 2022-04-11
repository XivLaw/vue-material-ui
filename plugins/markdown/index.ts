import type { Plugin } from 'vite'

export default (...arg): Plugin => {
  return { 
    name: 'mdToVue',
    transform(code, id) {
      if (id.endsWith('.md')) {
        return {
          code: code,
          map: null
        }
      }
    }
  }
}