import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import howto from '../views/howto.vue'
import contact from '../views/contact.vue'
import buybot from '../views/buybot.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home', 
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/howto',
    name: 'howto',
    component: howto
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  },
  {
    path: '/buybot',
    name: 'buybot',
    component: buybot
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
