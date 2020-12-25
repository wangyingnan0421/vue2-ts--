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
        path:'',
        component:()=> import ('@/pages/home/main/main.vue'),
      },
      {
        path:'sort',
        component:()=> import ('@/pages/home/sort/sort.vue'),
      },
      {
        path:'main',
        component:()=> import ('@/pages/home/main/main.vue'),
      },
      {
        path:'mine',
        component:()=> import ('@/pages/home/mine.vue'),
      },
      {
        path:'car',
        component:()=> import ('@/pages/home/car.vue'),
      },
      {
        path:'list',
        component:()=> import ('@/pages/home/list.vue'),
      },
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
router.beforeEach((to,from,next)=>{
  if(to.path === '/login' || to.path === '/register'){
    next();
  }else if(localStorage.getItem('token')){
     next();
  }else{
    next('/login');
  }
})



export default router
