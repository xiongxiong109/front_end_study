// vue 埋点插件

const UBT = UBT || {};
// 通过插件和指令来实现track埋点
UBT.install = (Vue, options) => {
	// directives
	Vue.directive('track', {
		bind(el, binding, vnode) {
			// 虚拟节点
			// console.log(vnode);
			// console.log(binding);
			// 获取绑定的对象字面量
			// console.log(binding.value);
		},
		inserted(el, binding) {
			// 通过
			console.log('enter page');
			console.log(binding.value);
		},
		update(newV, oldV) {
			// console.log(newV);
		},
		componentUpdated(el) {
			// console.log(el);
		},
		unbind(el, binding) {
			console.log('leave page');
			console.log(binding.value);
		}
	});
}

export default UBT;