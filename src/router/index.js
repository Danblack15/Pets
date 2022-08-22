import { createRouter, createWebHistory } from 'vue-router'

import IndexPage from '@/views/IndexPage/IndexPage'
import NavBar from '@/components/NavBar/NavBar'
import AuthPage from '@/views/AuthPage/AuthPage'
import RegisterPage from '@/views/RegisterPage/RegisterPage'
import HomePage from '@/views/HomePage/HomePage'
import NotFound from '@/views/NotFound/NotFound'
import PetsPage from '@/views/PetsPage/PetsPage'
import DetailPage from '@/views/DetailPage/DetailPage'
import ProfilePage from '@/views/ProfilePage/ProfilePage'
import ChatPage from '@/views/ChatPage/ChatPage'
import NewsPage from '@/views/NewsPage/NewsPage'

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
		},
		children: [
			{
				path: ':category',
				component: DetailPage,
				name: 'DetailPet',
				props: true,
				meta: {
					title: 'Питомцы',
				}
			}
		]
	},
	{
		path: '/profile',
		component: ProfilePage,
		meta: {
			layout: 'HomeLayout',
			title: 'Профиль'
		}
	},
	{
		path: '/chat',
		component: ChatPage,
		meta: {
			layout: 'HomeLayout',
			title: 'Чат'
		}
	},
	{
		path: '/blog',
		component: NewsPage,
		meta: {
			layout: 'HomeLayout',
			title: 'Новости'
		}
	},
	{
		path: '/:pathMatch(.*)*',
		component: NotFound,
		meta: {
			layout: 'HomeLayout'
		}
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