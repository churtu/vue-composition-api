import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/counter',
    name: 'counter',
    component: () => import(/* webpackChunkName: "counter" */ '../views/Counter.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import(/* webpackChunkName: "users" */ '../views/UsersView.vue')
  },
  {
    path: '/pokemon-search',
    name: 'pokemon-search',
    component: () => import(/* webpackChunkName: "pokemon-search" */ '../views/SearchPokemon.vue')
  },
  {
    path: '/pokemon/:id',
    name: 'pokemon',
    component: () => import(/* webpackChunkName: "pokemon" */ '../views/Pokemon.vue')
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import(/* webpackChunkName: "todo" */ '../views/TodoVuex.vue')
  },
  {
    path: '/custom-slots',
    name: 'custom-slots',
    component: () => import(/* webpackChunkName: "todo" */ '../views/CustomSlots.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
