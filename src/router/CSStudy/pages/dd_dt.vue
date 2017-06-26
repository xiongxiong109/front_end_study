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
			<dt>姓名</dt>
			<dd>Bear Cambridge</dd>
			<dt>年龄</dt>
			<dd>24</dd>
			<dt>爱好</dt>
			<dd>足球</dd>
			<dd>coding</dd>
			<dd>妹纸</dd>
		</div>
	</div>
</template>
<style type="text/css">
	.ui-dls {
		text-align: left;
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