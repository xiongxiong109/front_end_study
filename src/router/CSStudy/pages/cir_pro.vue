<template>
	<div class="com-page">
		<h4>圆形进度条</h4>
		<input type="range" v-model="cur" :max="max">
		<span>{{rad}}deg</span>
		<div class="container-box">
			<div class="progress">
				<div class="left-circle">
					<div class="half-circle" :style="{
						transform: `rotateZ(${rad > 180 ? rad - 180 : 0}deg)`
					}"></div>
				</div>
				<div class="right-circle">
					<div class="half-circle" :style="{
						transform: `rotateZ(${Math.min(180, rad)}deg)`
					}"></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data: () => {
			return {
				cur: 68,
				max: 100
			}
		},
		computed: {
			rad() {
				return Math.ceil(this.cur / this.max * 360);
			}
		}
	}
</script>
<style type="text/css">
	.container-box {
		height: 300px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.progress {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		border: 2px solid #fff;
		background: #000;
	}
	.progress:after {
		content: '';
		position: absolute;
		width: 146px;
		height: 146px;
		border-radius: 50%;
		background-color: #fff;
	}
	.left-circle, .right-circle {
		width: 150px;
		height: 150px;
		overflow: hidden;
		position: relative;
	}
	.half-circle {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #cdcdcd;
	}
	.left-circle .half-circle {
		content: '';
		transform-origin: right center;
		transform: rotateZ(0);
	}
	.right-circle .half-circle {
		transform-origin: left;
		transform: rotateZ(0);
	}
</style>