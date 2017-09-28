<template>
	<div class="page">
		<p>在after伪元素中通过attr获取元素标签上的属性值，填写到content里面去</p>
		<p class="pop" :class="{active: isActive}" @click="isActive = !isActive" :data-msg="popMsg">click me to show the pop</p>
	</div>
</template>
<script type="text/javascript">
	export default {
		data: () => {
			return {
				isActive: false,
				popMsg: 'from xiongxiong109'
			}
		}
	}
</script>
<style type="text/css">
	.pop {
		padding: 10px;
		color: #cd00cd;
		position: relative;
		display: inline-block;
	}
	.pop:before {
		content: '';
		width: 0;
		height: 0;
		border: 8px solid #000;
		position: absolute;
		left: 10px;
		bottom: 3px;
		border-top-color: transparent;
		border-right-color: transparent;
		border-left-color: transparent;
		display: none;
	}
	.pop:after {
		content: attr(data-msg);
		position: absolute;
		left: 0;
		bottom: -20px;
		padding: 3px 10px;
		color: #fff;
		background-color: #000;
		border-radius: 3px;
		display: none;
	}
	.pop.active:before {display: block;}
	.pop.active:after {display: block;}
</style>