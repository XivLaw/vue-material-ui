import MarkdownIt from 'markdown-it'
import type { Plugin } from 'vite'

const md = MarkdownIt({
  html: true,
  linkify: true,
  breaks: true
})

export default (...arg): Plugin => {
  return { 
    name: 'mdToVue',
    transform(code, id) {
      if (id.endsWith('.md')) {
        console.log(md.render(code))
        return {
          code: `<template>${md.render(code)}</template>`,
          map: null
        }
      }
    }
  }
}