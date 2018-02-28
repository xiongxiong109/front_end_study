<!-- home page -->
<template>
	<div class="home-box" v-track="{id: 10000, value: 'home_page'}">
		<h4 class="home-page">{{title}}</h4>
		<ul class="nav-groups">
			<li v-for="item in navLinks">
				<router-link :to="item.url">{{item.nm}}</router-link>
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				title: 'Front_End Study',
				navLinks: [
					{nm: 'front_end_news', url: '/front_end'},
					{nm: 'css_secrets', url: '/css_study/nav'},
					{nm: 'js_tips', url: '/js_study/nav'},
					{nm: '框架测试', url: '/vu_bear/index'}
				]
			}
		}
	}
</script>