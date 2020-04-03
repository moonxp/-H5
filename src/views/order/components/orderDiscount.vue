<template>
	<div class="orderDiscount">
		<div>
			<p class="fll">选择优惠</p>
			<p class="flr" @click="visible = true">暂无可用 > </p>
		</div>
		<!--<a-drawer title="优惠卷" :placement="placement" :closable="false" @close="onClose" :visible="visible">
			<p>好多优惠卷</p>
			<p>好多优惠卷</p>
			<p>好多优惠卷</p>
		</a-drawer>-->
	</div>
</template>

<script>
	export default {
		name: 'orderDiscount',
		components: {},
		data() {
			return {
				visible: false,
				placement: 'right',
			}
		},
		methods: {
			onClose() {
				this.visible = false;
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.orderDiscount {
		background-color: #fff;
		margin-bottom: 15px;
		line-height: 50px;
		padding: 0 15px;
		
		>div{
			height: 50px;
		}
		.fll {
			font-size: 15px;
		}
		
	}
</style>
