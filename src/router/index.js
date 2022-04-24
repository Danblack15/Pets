import { createRouter, createWebHistory } from 'vue-router'

import IndexPage from '@/views/IndexPage/IndexPage'
import NavBar from '@/components/NavBar/NavBar'
import AuthPage from '@/views/AuthPage/AuthPage'
import RegisterPage from '@/views/RegisterPage/RegisterPage'
import HomePage from '@/views/HomePage/HomePage'
import NotFound from '@/views/NotFound/NotFound'
import PetsPage from '@/views/PetsPage/PetsPage'

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
        path: '/home',
        component: HomePage,
        meta: {
            layout: 'HomeLayout',
            title: 'Home'
        }
    },
    {
        path: '/pets',
        component: PetsPage,
        meta: {
            layout: 'HomeLayout',
            title: 'Питомцы'
        }
    },
    {
        path: '/404', 
        name: 'NotFound', 
        component: NotFound,
        meta: {
            layout: 'HomeLayout'
        }
    },
    {
        path: '/:catchAll(.*)', 
        redirect:'404'
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