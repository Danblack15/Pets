import { createRouter, createWebHistory } from 'vue-router'

import IndexPage from '@/views/IndexPage/IndexPage'
import NavBar from '@/components/NavBar/NavBar'
import AuthPage from '@/views/AuthPage/AuthPage'
import RegisterPage from '@/views/RegisterPage/RegisterPage'

const routes = [
    {
        path: '/',
        component: IndexPage
    },
    {
        path: '/login',
        component: AuthPage
    },
    {
        path: '/register',
        component: RegisterPage
    },
    {
        path: '/ui-kit',
        component: NavBar
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router