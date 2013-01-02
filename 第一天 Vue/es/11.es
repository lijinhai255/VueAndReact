// 引入vue
import Vue from 'vue';
// 引入样式文件
import './demo.less';
// 实例化创建vm对象
var app = new Vue({
	// 绑定视图
	'el': '#app',
	// 绑定数据
	data: {
		// 绑定的数据
		cls: ''
	},
	// 定义方法
	methods: {
		// 显示视图
		showLayer() {
			// 字符串
			// this.cls = 'show';
			this.cls = true;
		},
		// 隐藏视图
		hideLayer() {
			// this.cls = '';
			this.cls = false;
		},
	}
})