import type { Plugin } from 'vite'
import mdToVue from '../mdToVue'
import getCode from '../utils/getCode'

export default (options): Plugin => {
  return { 
    name: 'vueToDoc',
    transform(code, id) {
      if (id.endsWith('.vue')) {
        const { script, template, style, docs } = getCode(code)
        const content = (docs ? `${docs}
\`\`\`vue
${template}
${script}
${style}
\`\`\`
` : code)?.trim()
console.log(content)
mdToVue(content)
        return {
          code: content,
          map: null
        }
      }
    }
  }
}