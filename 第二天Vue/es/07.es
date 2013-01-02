// 引入vue
import Vue from 'vue';

// 定义vue实例化对象
new Vue({
	// 容器
	el: '#app',
	// 数据
	data: {
		// 绑定数据
		// color: ''
		color: [],
		// 邮箱
		email: ['163', '126', 'sina', 'yeah', 'sohu', '139'],
		// 选中的邮箱
		choosEmail: ''
	}
})