import { createRouter, createWebHistory } from 'vue-router'
import { MainPage } from '@/pages'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
