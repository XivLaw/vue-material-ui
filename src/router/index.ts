/* eslint-disable import/no-unresolved */
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/docs',
    component: () => import('../docs/docs.md'),
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
