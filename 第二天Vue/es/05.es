// 引入vue
import Vue from 'vue';
// 引入样式
import './demo.scss';

// 定义vue实例化对象
new Vue({
	// 容器
	el: '#app',
	// 数据
	data: {
		// 控制显隐
		isShow: true
	},
	// 方法
	methods: {
		// 切换方法
		toggle() {
			// 切换
			this.isShow = !this.isShow;
		}
	}
})