<template>
	<div>
		<com-nav :links="links" root="js_study" />
	</div>
</template>
<script type="text/javascript">
	import Nav from '@/components/nav';
	import links from '../nav.links';
	export default {
		data: () => ({
			links
		}),
		components: {
			[Nav.name]: Nav
		}
	}
</script>