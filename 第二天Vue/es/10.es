// 引入vue
import Vue from 'vue';
// 2 定义组件类
let Home = Vue.extend({
	// 模板
	// template: '<h1>child</h1>',
	// 模板也可以是选择器
	template: '#tpl',
	// 绑定数据
	data() {
		// 返回值才是绑定的数据
		return {
			color: 'red',
			msg: 'child msg'
		}
	},
	// 计算属性数据
	computed: {
		dealMsg() {
			return this.msg.toUpperCase();
		}
	},
	// 方法
	methods: {
		clickH1() {
			console.log('child', this)
		}
	}
})
// 3 注册组件
// 全局注册
// Vue.component('home', Home)
// 新版本中，没有区分首字母大小写
// Vue.component('Home', Home)

// 定义vue实例化对象
new Vue({
	// 容器
	el: '#app',
	// 局部注册
	components: {
		Home
	},
	// 数据
	data: {
		msg: 'parent message'
	},
	// 计算属性数据
	computed: {
		dealMsg() {
			return this.msg.toUpperCase();
		}
	},
	// 方法
	methods: {
		clickH1() {
			console.log(this.msg)
		}
	}
})