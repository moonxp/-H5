<template>
	<div class="orderSubmit">
		<ul class="orderUl">
			<li>
				<span>实际金额：</span>
				<span>¥{{form.money}}</span>
			</li>
			<li class="orderSub">
				<van-button round block type="info" native-type="submit" color="#fb6436" @click="showList = true">提交订单</van-button>
			</li>
		</ul>
		<div class="pricePopup">
			<van-popup v-model="showList" lock-scroll overlay round position="bottom" :style="{ height: '40%' }">
				<p class="priceM">
					<b>付费详情</b>
					<span class="icon iconfont iconguanbi"></span>
				</p>
				<p class="priceClass mb15">
					<span>课程价格</span>
					<span>¥{{form.money}}</span>
				</p>
				<p class="priceClass">
					<span>优惠</span>
					<span class="orangeC">-¥0</span>
				</p>
				<div class="buyNow">
					<van-button round block type="info" native-type="submit" color="#fb6436" @click="buySubmit">
						¥{{form.money}}
						<span class="buyBtn">立即购买</span>
					</van-button>
				</div>
			</van-popup>
		</div>
	</div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
	import {Login} from '@/api/order.js'
	import {Button,Popup} from "vant";
	export default {
		name: "orderSubmit",
		computed: {
			...mapGetters(['getUserMsg'])
		},
		components: {
			[Button.name]: Button,
			[Popup.name]: Popup
		},
		props:{
			form:Object
		},
		data() {
			return {
				showList: false,
				Authorization: ''
			};
		},
		methods: {
			buySubmit(){
				this.Authorization = this.getUserMsg.userMsg
				Login(this.Authorization).then(res => {
					console.log(this.Authorization)
				})
			},
		}
	};
</script>

<style lang="less" scoped="scoped">
	.mb15 {
		margin-bottom: 15px;
	}

	.orangeC {
		color: #fb6436 !important;
	}

	.orderSubmit {
		width: 100%;
		position: absolute;
		padding: 16.5px 15px;
		bottom: 0;
		left: 0;
		background-color: #fff;
		z-index: 1111;

		.orderUl {
			overflow: hidden;
			line-height: 39px;

			>li:first-child {
				float: left;
				font-size: 14px;

				>span:last-child {
					color: #fb6436;
				}
			}

			>li:last-child {
				width: 160px;
				float: right;
			}
		}

		.pricePopup {
			z-index: 100;
			position: relative;

			.priceM {
				font-size: 16px;
				color: #333;
				text-align: center;
				margin-top: 14px;
				position: relative;
				margin-bottom: 25px;

				>span {
					position: absolute;
					right: 15px;
					font-size: 15px;
				}
			}

			.priceClass {
				padding: 0 13px;
				overflow: hidden;

				>span:first-child {
					font-size: 15px;
					color: #333;
					float: left;
				}

				>span:last-child {
					font-size: 16px;
					color: #333;
					float: right;
				}
			}

			.buyNow {
				position: absolute;
				bottom: 12px;
				padding: 0 15px;
				width: 90%;

				.buyBtn {
					font-size: 14px;
				}
			}
		}

	}
</style>
