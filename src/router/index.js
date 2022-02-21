import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: ()=>import("../pajes/Main")
  },
  {
    path: '/users',
    component: ()=>import("../pajes/User")
  },
  {
    path: '/registration',
    component: ()=>import("../pajes/UserRegistr")
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
