import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: () => import('@/views/Home.vue') },
    { path: '/names', name: 'names', component: () => import('@/views/names.vue')},
    { path: '/names/:domain', name: 'names.domain', component: () => import('@/views/details.vue')},

  ]
})

export default router
