<template>
	<div class="com-page">
		<h4>圆形进度条</h4>
		<div class="container-box">
			<div class="progress">
				<div class="left-circle">
					<div class="half-circle"></div>
				</div>
				<div class="right-circle">
					<div class="half-circle"></div>
				</div>
			</div>
		</div>
	</div>
</template>
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
	}
	.left-circle, .right-circle {
		flex: 1;
		height: 100%;
		overflow: hidden;
		position: relative;
		background-color: #000;
	}
	.half-circle {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #cdefcd;
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