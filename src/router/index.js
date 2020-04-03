import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Router Modules */
import introduction from './modules/introduction'
import classVideo from './modules/classVideo.js'
import order from './modules/order.js'
import qrcanvas from './modules/qrcanvas.js'

const routes = new Router(
	{
		routes: [
			//{path:'/',redirect: 'introduction'},
			introduction,
			classVideo,
			order,
			qrcanvas,
			{
				path:'/download' ,
				name: 'download',
				component:() => import('../views/dowload/index.vue')
			},
			{
				path: '/friends',
				name: 'friends',
				component: () => import('../views/friends_share/friends_share.vue')
			},
			{
				path: '/zhiquan',
				name: 'zhiquan',
				component: () => import('../views/zhiquan/index.vue')
			}
		]
	}
)

/*export default new Router({
	/!*!// mode:'hash',*!/
	routes
})*/

export  default routes;
