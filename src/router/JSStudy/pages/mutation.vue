<template>
	<div class="mutation-page" v-track="{id: 10458, value: 'mutation_page'}">
		<h4 v-highlight>h5的mutationObserver api来监听dom变化</h4>
		<button @click="evt_add">add item</button>
		<button @click="evt_change">change value</button>
		<button @click="evt_changeAttr">change id</button>
		<div ref="trackDOM" :data-id="id">
			<p v-for="item in list">{{val}}</p>
		</div>
	</div>
</template>
<script type="text/javascript">
	// 以插件的方式注入自定义指令
	export default {
		data: () => ({
			id: 0,
			list: [],
			val: 'hello'
		}),
		mounted() {
			this.observeDOM(this.$refs.trackDOM);
		},
		methods: {
			// 监听dom变化
			observeDOM(el) {
				// native api, 建立监听实例
				this.observer = new MutationObserver(mutations => {
					console.log(mutations);
				});
				// console.log(this.observer);
				// 配置监听参数
				this.observer.observe(el, {
					// 子元素的变动
					childList: true,
					// 属性变动
					attributes: true,
					// 节点内容或文本变动
					characterData: true,
					// 子节点变动
					subtree: true
				})
			},
			evt_add() {
				this.list = [Math.random(), ...this.list];
			},
			evt_change() {
				this.val = Math.random();
			},
			evt_changeAttr() {
				this.id = Math.random();
			}
		},
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