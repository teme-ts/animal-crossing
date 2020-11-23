import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AnimalCrossing from '../views/AnimalCrossing.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'AnimalCrossing',
    component: AnimalCrossing
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
