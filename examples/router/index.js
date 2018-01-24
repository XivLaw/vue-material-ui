import Vue from 'vue'
import Router from 'vue-router'
import Typography from '@/components/typography.vue'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home 首页'
  },
  {
    path: '/typography',
    name: 'Typography 文字排版',
    component: Typography
  },
]

export default new Router({
  mode: 'history',
  routes
})
