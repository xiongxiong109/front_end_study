<!-- css 内凹圆角 -->
<template>
	<div class="com-content">
		<p>利用径向渐变实现一个内凹的圆角</p>
		<code>background-image: -webkit-radial-gradient(top right, #ddd 100px, #ccc 100px);</code>
		<div class="circle"></div>
		<p>综合实例: 一个圆润内圆角的导航</p>
		<nav class="ui-nav">
			<div
				class="nav-item"
				v-for="(item, idx) in nav"
				:class="{'is-cur': idx == cur}"
				@click="evt_toggle(idx)"
			>{{item}}</div>
		</nav>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				cur: 0,
				nav: ['tab1', 'tab2']
			}
		},
		methods: {
			evt_toggle(idx) {
				if (this.cur != idx) {
					this.cur = idx;
				}
			}
		}
	}
</script>
<style type="text/css">
	.circle {
		width: 100px;
		height: 100px;
		/*使用径向渐变制造圆形*/
		background-image: -webkit-radial-gradient(top right, #ddd 100px, #ccc 100px);
	}
	/*梯形导航*/
	.ui-nav {
		display: flex;
		height: 50px;
		margin-top: 10px;
		background-color: #ccc;
	}
	.nav-item {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #32a3f1;
		transition: .2s ease;
	}
	.nav-item.is-cur {
		position: relative;
		color: #fff;
		z-index: 9;
		height: 110%;
		background-color: #666;
		top: -10%;
		border-radius: 0 4px 0 0;
	}
	.nav-item.is-cur:after {
		content: '';
		position: absolute;
		bottom: 0;
		right: -8px;
		width: 8px;
		height: 8px;
		background-image: -webkit-radial-gradient(top right, transparent 8px, #666 8px);
	}
	.nav-item.is-cur:last-child {
		border-radius: 4px 0 0 0;
	}
	.nav-item.is-cur:last-child:after {
		right: auto;
		left: -8px;
		background-image: -webkit-radial-gradient(top left, transparent 8px, #666 8px);
	}
</style>