// 引入vue
import Vue from 'vue';
// 引入样式文件
// import {} from './demo.scss';
// 简写 npm intall node-sass
// import 'demo.scss';
// console.log(Vue);
// 实例化创建vm对象
var app = new Vue({
	// 绑定视图
	el: '#app',
	// 绑定数据
	data: {
		msg: 'hello'
	}
})

console.log(app)