<template>
	<div class="page">
		<h4>3d变换</h4>
		<p>translate-3d, perspective, transform-style, backface-visibility</p>
		<br>
		<p>实例练习: 轮盘指示picker</p>
		<br>
		<div class="test-stage">
			<div class="test-container">
				<!-- 使用负的animation-delay, 可以让动画瞬间出现在指定位置 -->
				<div class="test-item" v-for="(item, idx) in list" :style="{
					'animation-delay': (-idx / list.length * 3 * 2) + 's'
				}"></div>
			</div>
		</div>
		<!-- 舞台设置景深(视距) -->
		<div class="picker-container">
			<!-- 容器设置3d视图 -->
<!-- 			<ul class="picker-scroll">
				<li v-for="(item, idx) in list" :style="{
					transform: 'rotateX('+(-idx * 360 / list.length)+'deg) translateY('+d3Y+'px)'
				}">{{item}}</li>
			</ul> -->
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				list: []
			}
		},
		computed: {
			d3Y() {
				let { list } = this;
				let Y = 25 / Math.tan((360 / list.length));
				return Y;
			}
		},
		created() {
			for (let i = 0; i < 10; i++) {
				this.list.push(i);
			}
		}
	}
</script>
<style type="text/css">
.test-stage {
	perspective: 150px;
}
.test-container {
	transform-style: preserve-3d;
	position: relative;
	height: 50px;
}
.test-item {
	width: 50px;
	height: 50px;
	background-color: #c00;
	margin: auto;
	position: absolute;
	left: 0;
	right: 0;
	/*transform: rotateY(10deg) translateZ(50px);*/
	animation: rotate 3s linear infinite;
}
@keyframes rotate {
	from {
		transform: rotateY(0deg) translateZ(50px) rotateZ(0);
	}
	to {
		transform: rotateY(360deg) translateZ(50px) rotateZ(360deg);
	}
}
</style>