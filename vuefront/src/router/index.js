import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Main',
    component: Main
}, {
    path: '/play',
    name: 'Play',
    component: () =>
        import ( /* webpackChunkName: "about" */ '../views/Play.vue')
}, {
    path: '/login',
    name: 'Login',
    component: () =>
        import ('../views/Login.vue')
}, {
    path: '/member_join',
    name: 'MemberJoin',
    component: () =>
        import ('../views/MemberJoin.vue')
}, {
    path: '/select_teacher',
    name: 'SelectTeacher',
    component: () =>
        import ('../views/SelectTeacher.vue')
}]

const router = new VueRouter({
    routes
})

export default router