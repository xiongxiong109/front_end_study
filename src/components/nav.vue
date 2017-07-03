<template>
	<div class="nav">
		<input type="text" placeholder="请输入关键字搜索" v-model="filterNm" />
		<ul class="nav-group">
			<li v-for="item in filteredLinks"><router-link :to="`/${root}${item.path}`">{{item.nm}}</router-link></li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		name: 'com-nav',
		props: ['links', 'root'],
		data() {
			return {
				filterNm: ''
			}
		},
		computed: {
			filteredLinks() {
				let fi = new RegExp(this.filterNm, 'ig');
				let links = this.links;
				return links.filter(item => fi.test(item.nm) || fi.test(item.path));
			}
		},
		created() {
			console.log(this.links)
		}
	}
</script>