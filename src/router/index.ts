import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/transition',
    name: 'Transition',
    component: () => import(/* webpackChunkName: "transition" */'../views/transition/TransitionDemo.vue')
  },
  {
    path: '/scroll',
    name: 'Scroll',
    component: () => import(/* webpackChunkName: "scroll" */'../views/scroll/scrollDemo.vue')
  },
  {
    path: '/pinia',
    name: 'Pinia',
    component: () => import(/* webpackChunkName: "pinia" */'../views/pinia/BasicDemo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
