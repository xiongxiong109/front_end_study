<template>
	<div class="page">
		<h4>3d变换</h4>
		<p>translate-3d, perspective, transform-style, backface-visibility</p>
		<br>
		<p>实例练习: 旋转木马 <button @click="isPlay = !isPlay">{{isPlay ? '暂停': '播放'}}</button></p>
		<br>
		<div class="test-stage">
			<div class="test-container">
				<!-- 使用负的animation-delay, 可以让动画瞬间出现在指定位置 -->
				<div class="test-item" v-for="(item, idx) in list" :style="{
					'animation-delay': (-idx / list.length * 3 * 2) + 's',
					'animation-play-state': isPlay ? 'running': 'paused'
				}"></div>
			</div>
		</div>
		<p>一般一个3d的视图，需要一个舞台，一个容器，以及一些内容</p>
		<br>
		<p>舞台一般设置perspective景深, 来控制视距, 视距越大, 离得越远, 一般视距可设为容器元素的1.5倍</p>
		<br>
		<p>容器一般要设置transform-style: preserve-3d</p>
		<p>然后就可以对元素进行3d变换了</p>
		<time-picker />
	</div>
</template>
<script type="text/javascript">
	import TimePicker from '@/components/time.picker';

	export default {
		data() {
			return {
				isPlay: false,
				list: []
			}
		},
		computed: {
			d3Y() {
				let { list } = this;
				// 用三角函数计算离Z轴的距离
				let Y = 25 / Math.tan((360 / list.length));
				return Y;
			}
		},
		created() {
			for (let i = 0; i < 10; i++) {
				this.list.push(i);
			}
		},
		components: {
			[TimePicker.name]: TimePicker
		}
	}
</script>
<style type="text/css">
.test-stage {
	perspective: 150px;
}
.test-container {
	transform-style: preserve-3d;
	transform: rotateY(15deg);
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
	animation-play-state: paused;
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