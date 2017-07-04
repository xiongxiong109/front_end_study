<template>
	<div class="mutation-page" v-track="{id: 10458, value: 'mutation_page'}">
		<h4 v-highlight>h5的mutationObserver api来监听dom变化</h4>
	</div>
</template>
<script type="text/javascript">
	// 以插件的方式注入自定义指令
	export default {
		// 局部注册vue指令，来操作原生dom
		directives: {
			highlight: {
				inserted(el) {
					// console.log(el);
				}
			}
		}
	}
</script>