// 引入vue
import Vue from 'vue';

// 自定义指令
// Vue.directive('icktCheck', (dom, obj) => {
// 	// 优化
// 	if (obj.value !== obj.oldValue) {
// 		// 获取数据
// 		let value = obj.value;
// 		// 获取校验规则
// 		let regValue = dom.getAttribute('test');
// 		// 定义正则
// 		var reg = new RegExp(regValue);
// 		// 检测value是否合法
// 		if (reg.test(value)) {
// 			// 不要显示提示文案
// 			dom.innerHTML = '';
// 		} else {
// 			// 提示错误信息
// 			dom.innerHTML = dom.getAttribute('warn-text')
// 		}
// 	}
// })
// 更新的时候校验，可以放在update方法中
Vue.directive('icktCheck', {
	// 更新方法
	update(dom, obj) {
		// 优化
		if (obj.value !== obj.oldValue) {
			// 获取数据
			let value = obj.value;
			// 获取校验规则
			let regValue = dom.getAttribute('test');
			// 定义正则
			var reg = new RegExp(regValue);
			// 检测value是否合法
			if (reg.test(value)) {
				// 不要显示提示文案
				dom.innerHTML = '';
			} else {
				// 提示错误信息
				dom.innerHTML = dom.getAttribute('warn-text')
			}
		}
	}
})

// 定义vue实例化对象
new Vue({
	// 容器
	el: '#app',
	// 数据
	data: {
		username: '',
		password: ''
	}
})