<!-- 连字符换行 -->
<template>
	<div class="page">
		<p>利用content: '\A', 字符码'0X0000A', <br>来代替br实现换行</p>
		<p>white-space: pre, 来保留文本中的空白字符</p>
		<br>
		<p>再合理利用css选择器，来实现最简洁的布局</p>
		<br>
		<p>实例: 单行显示</p>
		<div class="ui-dls">
			<template v-for="item in lists">
				<dt>{{item.nm}}</dt>
				<dd v-for="vs in item.vs">{{vs}}</dd>
			</template>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				lists: [
					{
						nm: '姓名',
						vs: ['Bear Cambridge']
					},
					{
						nm: '昵称',
						vs: ['酱酱熊', '小小酱油熊', '大帅比', '页面仔']
					},
					{
						nm: '年龄',
						vs: [24]
					},
					{
						nm: '爱好',
						vs: ['足球', 'coding', '妹纸']
					}
				]
			}
		}
	}
</script>
<style type="text/css">
	.ui-dls {
		text-align: left;
		width: 80%;
		margin: auto;
	}
	dt, dd {
		display: inline;
	}
	dt {
		text-align: right;
		white-space: pre;
	}
	dd ~ dt:before {
		content: '\A';
	}
	dd + dd:before {
		content: '、';
	}
	dt:after {
		content: '：';
	}
</style>