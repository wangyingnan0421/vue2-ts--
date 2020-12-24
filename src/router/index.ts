import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../pages/home/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect:'/home',
    
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path:''
      }
    ]
    
  },
  {
    path: '/register',
    name: 'register',
    component: ()=> import ('../pages/register.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: ()=> import ('../pages/login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
