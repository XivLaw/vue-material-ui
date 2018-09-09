import 'mt-admin/styles/index.css'

import Admin from 'mt-admin/components/admin'
import Card from 'mt-admin/components/card'
import table from 'mt-admin/components/table'
import Input from 'mt-admin/components/input'
import Select from 'mt-admin/components/select'
import Button from 'mt-admin/components/button'
import ButtonGroup from 'mt-admin/components/button-group'
import Checkbox from 'mt-admin/components/checkbox'
import CheckboxGroup from 'mt-admin/components/checkbox-group'
import Radio from 'mt-admin/components/radio'
import RadioGroup from 'mt-admin/components/radio-group'
import Alert from 'mt-admin/components/alert'
import Dialog from 'mt-admin/components/dialog'
import Option from 'mt-admin/components/select/src/option'
import OptionGroup from 'mt-admin/components/select/src/option-group'

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
    Option,
    OptionGroup
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