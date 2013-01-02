// 引入vue
import Vue from 'vue';
import './demo.less';
// 实例化创建vm对象
var app = new Vue({
	// 绑定视图
	'el': '#app',
	// 绑定数据
	data: {
		color: 'red',
		span: [],
		img: []
	},
	// 方法
	methods: {
		// 切换样式
		toggle(id) {
			// console.log(id)
			// MVVM：数据驱动视图
			// 判断id
			switch (id) {
				case 37: 
					// 不要直接修改，会丢失数据
					// this.span[0] = 'red'
					// 赋值新数组
					// this.span = ['red']
					// 通用解决方案
					// 丢失颜色
					// this.$set(this.span, '0', 'red')
					// 覆盖新数组
					// this.$set(this, 'span', ['red'])
					this.span = ['red']
					this.img = ['disabled', 'disabled', 'disabled']
					// console.log(this)
					break;
				case 38: 
					// this.$set(this, 'span', [undefined, 'red'])
					this.span = [, 'red']
					this.img = ['disabled', 'disabled']
					break;
				case 39: 
					this.span = [, , 'red']
					this.img = []
					break;
			}
		}
	}
})