import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: ()=>import("../pajes/Main")
  },
  {
    path: '/registr',
    component: ()=>import("../pajes/User")
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
