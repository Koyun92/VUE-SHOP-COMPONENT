import {
  createRouter,
  createWebHistory
} from 'vue-router'

const routes = [{
  path: '/',
  name: 'Home',
  activeClass: 'active',

  component: () => import('../views/Home.vue')
}, {
  path: '/destination',
  name: 'Destination',

  component: () => import('../views/Destination.vue')
}, {
  path: '/crew',
  name: 'Crew',

  component: () => import('../views/Crew.vue')
}, {
  path: '/technology',
  name: 'Technology',

  component: () => import('../views/Technology.vue')
}]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active-view",
})

export default router
