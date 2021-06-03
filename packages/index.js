import Input from './input'

const components = {
  Input
}

//组件注册方法
const install = function (Vue, opts = {}) {
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Input
}