import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'

/* Ant */
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)

import 'amfe-flexible/index.js'

/* Vant */
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

/* reset css */
import '@/assets/style/initializtion.css'

/* iconfont */
import '@/icons/iconfont.css'
import '@/icons/H5iconfont.css'

/* fastClick */
import FastClick from 'fastclick'
FastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
	// store,
	router,
	store: store,
	render: h => h(App),
}).$mount('#app')
