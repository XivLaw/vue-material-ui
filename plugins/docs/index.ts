import type { Plugin } from 'vite'

export default (...arg): Plugin => {
  return { 
    name: 'vueToDoc',
    transform(code, id) {
      if (id.endsWith('.vue')) {
        let docs = code.match(/(?<=<docs>)([\s\S]*)(?=<\/docs>)/)
        return {
          code: code.replace(/<docs>[\s\S]*<\/docs>/, ''),
          map: null
        }
      }
    }
  }
}