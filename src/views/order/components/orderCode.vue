<template>

</template>

<script>
	import {getCode} from '@/api/order.js'
	export default {
		name: "orderCode",
		data(){
			return {
				code: ''
			}
		},
		props:{
			mobilePhone: String
		},
		methods:{
			login(){
				getCode(this.mobilePhone).then(res => {
					if(res.code == 0){
						// console.log(res)
					}
				})
			}
		}
	};
</script>

<style lang="less" scoped="scoped">
	.orderCode {
		background-color: #fff;
		padding: 14px 15px;
		margin-bottom: 15px;
		position: relative;

		>p {
			font-size: 15px;

			>a {
				position: absolute;
				right: 6px;

			}
		}
	}
</style>
