import Vue from 'vue'
import Vuex from 'vuex'
// import getters from './getters'

Vue.use(Vuex)

// const modulesFiles = require.context('./modules',true,/\.js$/)


const store = new Vuex.Store({
	state: {
        userMsg: sessionStorage.getItem('userMsg') || {},
	},
	getters: {
        getUserMsg: state=>{
            return state.userMsg
        },
 
	},
	mutations:{
		updateUserMsg(state,userMsg){
            state.userMsg = userMsg
        },
	},
	// modules,
})
export default store