import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Typography from '@/components/typography'
import Cards from '@/components/cards'
import Input from '@/components/input'
import Buttons from '@/components/buttons'
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
  scrollBehavior() {
    return {x: 0, y: 0}
  }
})
