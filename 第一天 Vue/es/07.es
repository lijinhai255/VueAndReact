// 引入vue
import Vue from 'vue';
// 定义数据
let data = {
	msg: 'hello ickt'
}
// 实例化创建vm对象
var app = new Vue({
	// 绑定视图
	['e' + 'l']: '#app',
	// 绑定数据
	data,
	// 监听数据的变化
	watch: {
		// 监听msg变化
		msg() {
			console.log(arguments, this)
		}
	}
})
// 改变数据的值，视图更新
setTimeout(() => {
	app.msg = '爱创课堂'
}, 1000)