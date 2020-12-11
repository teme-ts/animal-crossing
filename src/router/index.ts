import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AnimalCrossing from '../views/AnimalCrossing.vue'
import HuntingTable from '../views/ResultTable.vue'
import MigrationAnimals from '../Migrations/MigrationAnimals.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'AnimalCrossing',
    component: AnimalCrossing
  },
  {
    path: '/hunting-table',
    name: 'HuntingTable',
    component: HuntingTable
  },
  {
    path: '/migration-animals',
    name: 'MigrationAnimals',
    component: MigrationAnimals
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
