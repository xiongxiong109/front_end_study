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
	.progress {
		width: 200px;
		height: 200px;
		margin: auto;
		/*background-color: #c00;*/
		position: relative;
		overflow: hidden;
	}
	.left-circle, .right-circle {
		width: 50%;
		height: 100%;
		position: absolute;
		overflow: hidden;
	}
	.left-circle {
		left: 0;
		/*background-color: #ddd;*/
	}
	.right-circle {
		right: 0;
		/*background-color: #ccc;*/
	}
	.half-circle {
		width: 200%;
		height: 100%;
		border-radius: 50%;
		position: absolute;
		top: 0;
		border: 4px solid #c00;
		box-sizing: border-box;
	}
	.left-circle .half-circle {
		left: 0;
		clip: rect(0 200px 200px 100px);
	}
	.right-circle .half-circle {
		right: 0;
		clip: rect(0 100px 200px 0);
	}
</style>