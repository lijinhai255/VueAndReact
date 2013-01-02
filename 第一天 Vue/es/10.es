// 引入vue
import Vue from 'vue';
// 实例化创建vm对象
var app = new Vue({
	// 绑定视图
	'el': '#app',
	// 绑定数据
	data: {
		msg: 'hello ickt'
	},
	// 定义方法
	methods: {
		// 事件回调函数
		clickBtn() {
			console.log(arguments, this)
			// 使用其他方法
			this.demo();
		},
		// 其他方法
		demo() {
			console.log('demo')
		},
		// 事件回调函数
		showMsg(e) {
			console.log(this.msg, e.keyCode)
		}
	}
})