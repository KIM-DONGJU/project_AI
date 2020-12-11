import Vue from 'vue'
import VueRouter from 'vue-router'
import member_join from '@/components/member_join'
import login from '@/components/login'
import play from '@/components/play'
import find_id_pw from '@/components/find_id_pw'
import Main from '@/components/Main'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
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
    path: "/board",
    // alias: "/board",
    name: "board",
    component: () => import("../components/BoardList")
  },
  {
    path: "/board/:id",
    name: "Detail",
    component: () => import("../components/BoardDetail")
  },
  {
    path: '/board',
    name: 'Write',
    component: () => import('../components/BoardWrite')
  },
  {
    path: '/board',
    name: 'Update',
    component: () => import('../components/BoardUpdate')
  },
  {
    path : "/board/:id",
    name : "Delete",
    component: () => import("../components/BoardDetail")
  },
  // {
  //   path: "/add",
  //   name: "add",
  //   component: () => import("./components/AddBoard")
  // }
  {
    path: '/member_join',
    name: 'member_join',
    component: member_join
  }, 
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/play',
    name: 'play',
    component: play
  },
  {
    path: '/find_id_pw',
    name: 'find_id_pw',
    component: find_id_pw
  }
]

export const router = new VueRouter({
  mode: 'history',
  routes: routes
})

export default router