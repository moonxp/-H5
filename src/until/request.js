import axios from 'axios';
import routes from '../router'; 
import Vuex from 'vuex'


const service = axios.create({
	// process.env.NODE_ENV === 'development' 来判断是否开发环境
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json;charset=UTF-8'
	}
});

service.interceptors.request.use(
	config => {

		config.headers = {
			"Authorization": sessionStorage.getItem('userMsg')
		}
		
		return config;
	},
	error => {
		console.log(error);
		return Promise.reject();
	}
);

service.interceptors.response.use(
	response => {
		console.log('response:', response)
		if (response.status === 200) {
			return response.data;
		} else {
			Promise.reject();
		}
	},
	error => {
		/*if (error.response.status == 403) {

		}*/
		console.log(JSON.stringify(error.response))
		return Promise.reject(error.response);
	}
);

export default service;
