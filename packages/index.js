import './styles/index.css'

import Admin from './components/admin'
import Card from './components/card'
import table from './components/table'
import Input from './components/input'
import Select from './components/select'
import Button from './components/button'
import ButtonGroup from './components/button-group'
import Checkbox from './components/checkbox'
import CheckboxGroup from './components/checkbox-group'
import Radio from './components/radio'
import RadioGroup from './components/radio-group'
import Alert from './components/alert'
import Dialog from './components/dialog'
import Option from './components/select/src/option'

const components = {
    Admin,
    Card,
    table,
    Input,
    Select,
    Button,
    ButtonGroup,
    Checkbox,
    CheckboxGroup,
    Radio,
    RadioGroup,
    Alert,
    Dialog,
    Option
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