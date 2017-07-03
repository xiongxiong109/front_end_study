<template>
	<div class="async-page">
		<span>async await 来实现异步</span>
		<p>模拟的异步过程: </p>
		<ul>
			<li>1. 获取用户信息</li>
			<li>2. 获取购买数据</li>
			<li>3. 下单</li>
			<li>4. 下单成功提示</li>
		</ul>
		<ul>
			<li v-for="(item, key) in uInfo">{{key}}:{{item}}</li>
			<li v-for="(item, key) in payInfo">{{key}}:{{item}}</li>
			<li v-for="(item, key) in payRst">{{key}}:{{item}}</li>
		</ul>
		<button @click="evt_fetch" :disabled="isFetching">{{tip}}</button>
	</div>
</template>
<script type="text/javascript">
	export default {
		data: () => ({
			isFetching: false,
			uInfo: {},
			payInfo: {},
			payRst: {},
			tip: '立即购买'
		}),
		methods: {
			evt_fetch() {
				try {
					this.getUserLoginInfo()
					.then(this.getPayInfo)
					.then(this.goPay)
					.then(() => {
						this.tip = 'success';
					})
				} catch (e) {
					console.log(e);
				}
			},
			fetchUser() {
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						resolve({unm: 'xiongxiong', uid: 123456});
					}, 1000);
				});
			},
			fetchPayInfo(uInfo) {
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						resolve({payId: '123asd1as3d'});
					}, 3000);
				});
			},
			fetchPay() {
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						resolve({code: 'success'});
					}, 2000);
				});
			},
			// 通过async字段来设置一个异步函数
			async getUserLoginInfo() {
				this.isFetching = true;
				this.tip = '正在获取用户信息';
				var info = await this.fetchUser();
				this.uInfo = info;
				this.isFetching = false;
			},
			async getPayInfo() {
				this.isFetching = true;
				this.tip = '正在获取订单信息';
				this.payInfo = await this.fetchPayInfo(this.uInfo);
				this.isFetching = false;
			},
			async goPay() {
				this.isFetching = true;
				this.tip = '正在下单';
				this.payRst = await this.fetchPay();
				this.isFetching = false;
			}
		}
	}
</script>