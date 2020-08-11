import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Typography from '@/components/typography'
import Cards from '@/components/cards'
import Input from '@/components/input'
import Buttons from '@/components/buttons'
import Check from '@/components/check'
import Table from '@/components/table'
import Alert from '@/components/alert'
import Dialogs from '@/components/dialogs'
import Colors from '@/components/colors'
import Icons from '@/components/icons'

Vue.use(Router)

const routes = [
  {
    path: '/typography',
    name: 'Typography 文字排版',
    component: Typography
  },
  {
    path: '/cards',
    name: 'Cards 卡片样式',
    component: Cards
  },
  {
    path: '/table',
    name: 'Table 表格',
    component: Table
  },
  {
    path: '/alert',
    name: 'Alert 警告',
    component: Alert
  },
  {
    path: '/dialogs',
    name: 'Dialogs 对话框',
    component: Dialogs
  },
  {
    path: '/input',
    name: 'Input 输入框',
    component: Input
  },
  {
    path: '/buttons',
    name: 'Buttons 按钮',
    component: Buttons
  },
  {
    path: '/check',
    name: 'Checkbox/Radio 单选/多选',
    component: Check
  },
  {
    path: '/colors',
    name: 'Colors 颜色',
    component: Colors
  },
  {
    path: '/icons',
    name: 'Icons 图标',
    component: Icons
  },
  {
    path: '*',
    name: 'Home 首页',
    component: Home
  },
]

export default new Router({
  mode: 'history',
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
