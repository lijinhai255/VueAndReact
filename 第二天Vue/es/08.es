// 引入vue
import Vue from 'vue';

// 自定义指令
// Vue.directive('icktHtml', {
// 	// 绑定时候执行的方法
// 	bind(dom, obj) {
// 		console.log('bind', 111, this, arguments)
// 		// 更新数据
// 		dom.innerHTML = obj.value;
// 	},
// 	// 更新时候执行的方法
// 	update(dom, obj) {
// 		console.log('update', 222, this, arguments)
// 		// 更新数据
// 		dom.innerHTML = obj.value;
// 	},
// 	// 解除绑定时候执行的方法
// 	unbind() {
// 		console.log('unbind', 333, this, arguments)
// 	}
// })
// 指令函数表示bind和update方法
Vue.directive('icktHtml', (dom, obj) => {
	// console.log(this, arg)
	// console.log(obj.value, obj)
	// dom.innerHTML = obj.value
	// 优化执行
	if (obj.value !== obj.oldValue ) {
		// 更新
		dom.innerHTML = obj.value
		console.log(obj.value)
	}
})
// 单次插值只需要在绑定的时候更新即可
Vue.directive('icktOnce', {
	// 绑定时候执行的方法
	bind(dom, obj) {
		// 只执行一次，不需要判断前后两个值了
		dom.innerHTML = obj.value;
	}
})

// 定义vue实例化对象
new Vue({
	// 容器
	el: '#app',
	// 数据
	data: {
		msg: '<a href="">hello</a>',
		title: ''
	}
})