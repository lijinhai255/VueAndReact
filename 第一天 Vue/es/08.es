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
	// 计算属性数据
	computed: {
		// key表示数据名称
		dealMsg(v) {
			// console.log(this, arguments)
			// 通过参数获取数据
			// return v.msg.toUpperCase();
			// 通过this获取数据
			return this.msg.toUpperCase();
			// 返回值是得到的结果
			// return '100'
		}
	}
})