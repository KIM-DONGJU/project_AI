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