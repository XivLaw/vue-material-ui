import type { Plugin } from 'vite'
import getCode from '../utils/getCode'

export default (options): Plugin => {
  return { 
    name: 'vueToDoc',
    transform(code, id) {
      if (id.endsWith('.vue')) {
        const { script, template, style, docs } = getCode(code)
        const content = `${docs}
\`\`\`vue
${template}
${script}
${style}
\`\`\`
`;
console.log(content)
        return {
          code: '',
          map: null
        }
      }
    }
  }
}