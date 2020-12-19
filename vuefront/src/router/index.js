import Vue from 'vue'
import VueRouter from 'vue-router'
import member_join from '../components/member_join'
import login from '../components/login'
import play from '../components/play'
import find_id_pw from '../components/find_id_pw'
import Main from '../components/Main'
import Update from '../components/BoardUpdate'
import About from '../views/About.vue'
import Board from '../components/BoardList'
import Detail from '../components/BoardDetail'
import Write from '../components/BoardWrite'
import Delete from '../components/BoardDetail'
import award from '../components/award'

Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: "/board",
        // alias: "/board",
        name: "board",
        component: Board
    },
    {
        path: "/board/:id",
        name: "Detail",
        component: Detail
    },
    {
        path: '/board',
        name: 'Write',
        component: Write
    },
    {
        path: '/board',
        name: 'Update',
        component: Update
    },
    {
        path: "/board/:id",
        name: "Delete",
        component: Delete
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
    },
    {
        path: '/award',
        name: 'award',
        component: award
    }
]

export const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router