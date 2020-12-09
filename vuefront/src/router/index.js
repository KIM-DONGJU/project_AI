import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
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
  // {
  //   path: "/add",
  //   name: "add",
  //   component: () => import("./components/AddBoard")
  // }
]

const router = new VueRouter({
  routes
})

export default router
