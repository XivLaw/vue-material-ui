import Vue from 'vue'
import Router from 'vue-router'
import Card from '@/components/card.vue'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const routes = [
  {
    path: '/Card',
    name: 'Card',
    component: Card
  },
]

export default new Router({
  mode: 'history',
  routes
})
