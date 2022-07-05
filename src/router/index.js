import * as VueRouter from 'vue-router';
import Home from '@/components/Home'
import PlaneGame from '@/components/PlaneGame'
import Banner1 from '@/components/Banner1'
import Canvas from '@/components/Canvas'
import YysHome from '@/components/yys/home';
import YysIndex from '@/components/yys/index';

export const router = VueRouter.createRouter({
	history:VueRouter.createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/plane-game',
			name: 'planeGame',
			component: PlaneGame
		},
		{
			path: '/banner1',
			name: 'banner1',
			component: Banner1
		},
		{
			path: '/canvas',
			name: 'canvas',
			component: Canvas
		},
		{
			path: '/yys/home',
			name: 'yysHome',
			component: YysHome
		},
		{
			path: '/yys/index',
			name: 'yysIndex',
			component: YysIndex
		},
	]
})