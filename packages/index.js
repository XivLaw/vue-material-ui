import zmdi from 'material-design-iconic-font/dist/css/material-design-iconic-font.min.css'
import Style from './styles/index.less'

import Header from './components/header'
import Sidebar from './components/sidebar'

const components = {
    Header,
    Sidebar
}

//组件注册方法
const install = function(Vue, opts = {}) {
    Object.keys(components).forEach(key => {
      Vue.component(components[key].name, components[key])
    })
}

//注册组件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

const API = {
    install,
    ...components
}

export default API