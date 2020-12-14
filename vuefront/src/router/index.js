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
}, {
    path: '/board',
    name: 'board',
    component: () =>
        import ('../views/BoardList.vue')
}, {
    path: '/board_write',
    name: 'BoardWrite',
    component: () =>
        import ('../views/BoardWrite.vue')
}, {
    path: '/board_detail',
    name: 'BoardDetail',
    component: () =>
        import ('../views/BoardDetail.vue')
}]

const router = new VueRouter({
    routes
})

export default router