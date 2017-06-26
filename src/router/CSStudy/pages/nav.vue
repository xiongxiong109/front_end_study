<template>
	<div class="nav">
		<input type="text" placeholder="请输入关键字搜索" v-model="filterNm" />
		<ul class="nav-group">
			<li v-for="item in filteredLinks"><router-link :to="root + item.path">{{item.nm}}</router-link></li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	import navLinks from '../nav.links';
	export default {
		data() {
			return {
				root: '/css_study',
				filterNm: '',
				navLinks
			}
		},
		computed: {
			filteredLinks() {
				let fi = new RegExp(this.filterNm, 'ig');
				let links = this.navLinks;
				return links.filter(item => fi.test(item.nm) || fi.test(item.path));
			}
		}
	}
</script>