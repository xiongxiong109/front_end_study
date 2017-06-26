<!-- home page -->
<template>
	<div class="home-box">
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
					{nm: 'rad_circle', url: '/css_study/rad_circle'}
				]
			}
		}
	}
</script>