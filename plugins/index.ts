import type { Plugin } from 'vite'

export default (...arg): Plugin => {
  return { 
    name: 'vueToDoc',
    async transform(code, id) {
      if (id.endsWith('HelloWorld.vue')) {
        let docs = code.match(/(?<=<docs>)([\s\S]*)(?=<\/docs>)/)
        console.log(code, id)
        return {
          code,
          map: null
        }
      }
    }
  }
}