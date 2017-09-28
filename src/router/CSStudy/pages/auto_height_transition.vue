<template>
	<div class="page">
		<p>当height设置成auto的时候, 高度变化时, 使用transition无法实现动画效果</p>
		<p>可以通过对max-height进行设置, 来实现transition的动画</p>
		<ul class="list">
			<li v-for="item, idx in [1,2,3,4]" @click="evt_toggleItem(idx)" :class="{open: cur == idx}">
				<h5 class="title">常见问题</h5>
				<p class="content">常见问题常见问题常见问题常见问题常见问题常见问题常见问题常见问题常见问题常见问题常见问题常见问题常见问题常见问题常见问题常见问题常见问题常见问题常见问题常见问题常见问题常见问题常见问题常见问题常见问题常见问题常见问题常见问题常见问题常见问题常见问题常见问题常见问题常见问题常见问题常见问题</p>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		data: () => {
			return {
				cur: -1
			}
		},
		methods: {
			evt_toggleItem(idx) {
				if (this.cur == idx) {
					this.cur = -1;
				} else {
					this.cur = idx;
				}
			}
		}
	}
</script>
<style type="text/css" scoped>
	.list {
		padding: 10px;
		margin-top: 10px;
		border-top: 1px solid #ddd;
		color: #333;
	}
	.list li {
		border-bottom: 1px solid #ddd;
		background-color: #fff;
		background-color: #efefef;
		text-align: left;
		position: relative;
		max-height: 37px;
		overflow: hidden;
		transition: all .3s ease;
	}
	.list li.open {
		max-height: 999px;
	}
	.list li .title {
		padding: 10px;
	}
	.list li:after {
		content: '';
		position: absolute;
		right: 10px;
		top: 16px;
		margin-top: -4px;
		width: 8px;
		height: 8px;
		border: 1px solid #333;
		border-right-color: transparent;
		border-bottom-color: transparent;
		transform-origin: center;
		transform: rotate(45deg);
		transition: .2s ease;
	}
	.list li.open:after {
		margin-top: -8px;
		transform: rotate(225deg);
	}
	.content {
		background-color: #f6f6f6;
		padding: 5px;
	}
</style>