<template>
	<div class="page">
		vu-bear page index
		<tab-view></tab-view>
	</div>
</template>
<script type="text/javascript">
	import { TabView } from 'vu-bear'
	export default {
		components: {
			[TabView.name]: TabView
		}
	}
</script>