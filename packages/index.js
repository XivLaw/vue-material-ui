import Header from './components/header'

const components = {
    Header,
}

const install = function(Vue, opts = {}) {
    Object.keys(components).forEach(key => {
      Vue.component(components[key].name, components[key])
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

const API = {
    install,
    ...components
}
  
export default API