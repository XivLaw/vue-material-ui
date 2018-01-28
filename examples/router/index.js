import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Typography from '@/components/typography'
import Cards from '@/components/cards'
import Input from '@/components/input'
import Buttons from '@/components/buttons'

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
    path: '/input',
    name: 'Input 输入框',
    component: Input
  },
  {
    path: '/buttons',
    name: 'buttons 按钮',
    component: Buttons
  },
  {
    path: '*',
    name: 'Home 首页',
    component: Home
  },
]

export default new Router({
  mode: 'history',
  routes
})
