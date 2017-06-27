<!-- 3d轮盘选择器 -->
<template>
	<div class="time-picker">
		<h4>3d轮盘选择器</h4>
		<div class="picker-stage">
			<div class="picker-container"
				:style="{
					'transform': 'rotateX('+rotateX+'deg)'
				}"
				@touchstart="evt_rotateStart"
				@touchmove.prevent="evt_rotate"
			>
				<div
					class="picker-item"
					v-for="(item, idx) in hourList"
					:style="{
						transform: 'rotateX('+(idx / hourList.length * 360)+'deg) translateZ(100px)'
					}"
				>{{item}}</div>
			</div>
			<div class="picker-container"
				:style="{
					'transform': 'rotateX('+rotateX+'deg)'
				}"
				@touchstart="evt_rotateStart"
				@touchmove.prevent="evt_rotate"
			>
				<div
					class="picker-item"
					v-for="(item, idx) in hourList"
					:style="{
						transform: 'rotateX('+(idx / hourList.length * 360)+'deg) translateZ(100px)'
					}"
				>{{item}}</div>
			</div>
		</div>
	</div>
</template>
<style type="text/css">
	html, body {
		height: 100%;
		overflow: hidden;	
	}
	.time-picker {
		position: absolute;
		width: 100%;
		height: 200px;
		left: 0;
		bottom: 0;
	}
	.picker-stage {
		/*perspective: 300px;*/
		display: flex;
		height: 100%;
		overflow: hidden;
		position: relative;
	}
	.picker-container {
		transform-style: preserve-3d;
		flex: 1;
		height: 100%;
		/*如果要做Z轴变换, 变换的容器不能设置overflow: hidden*/
		/*overflow: hidden;*/
	}
	.picker-stage:before,
	.picker-stage:after {
		content: '';
		position: absolute;
		left: 0;
		width: 100%;
		height: 40px;
		z-index: 6;
	}
	.picker-stage:before {
		top: 0;
		background-image: -webkit-linear-gradient(top, #fff 10%, transparent);
	}
	.picker-stage:after {
		bottom: 0;
		background-image: -webkit-linear-gradient(bottom, #fff 10%, transparent);
	}
	.picker-item {
		position: absolute;
		width: 100%;
		height: 20px;
		top: 50%;
		left: 0;
		z-index: 4;
		backface-visibility: hidden;
		transform-origin: top center;
	}
</style>
<script type="text/javascript">
	export default {
		name: 'time-picker',
		data() {
			return {
				startY: 0,
				dy: 0,
				hourList: _.range(1, 24),
				minList: _.range(0, 60)
			}
		},
		computed: {
			rotateX() {return -this.dy}
		},
		methods: {
			evt_rotateStart(e) {
				var touchInfo = e.changedTouches[0];
				this.startY = touchInfo.clientY - this.dy;
			},
			evt_rotate(e) {
				var touchInfo = e.changedTouches[0];
				this.dy = touchInfo.clientY - this.startY;
			}
		}
	}
</script>