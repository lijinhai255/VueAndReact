// 引入vue
import Vue from 'vue';
// 样式
import './demo.scss';

// 定义vue实例化对象
new Vue({
	// 容器
	el: '#app',
	// 数据
	data: {
		// 输入的内容
		msg: '',
		// 邮箱
		email: ['qq', '163', '126', '189', 'sina', 'hotmail', 'gmail', 'sohu', '21cn']
	},
	// 计算属性数据
	computed: {
		// 处理msg
		dealMsg() {
			// 如果有@，截取@前面的
			if (this.msg.indexOf('@') >= 0) {
				// 截取@之前的
				return this.msg.slice(0, this.msg.indexOf('@'))
			}
			// 否则返回msg
			return this.msg;
			// 从头到@之间的字符串
			// slice， substr， substring 1 参数
			// return this.msg.slice(0, this.msg.indexOf('@'))
		},
		// 处理邮箱
		dealEmail() {
			// 如果包含@
			if (this.msg.indexOf('@') >= 0) {
				// 获取@后面的字符,不能包含@符号
				let str = this.msg.slice(this.msg.indexOf('@') + 1)
				// console.log(str)
				// 过滤数组
				return this.email.filter(item => {
					// 添加后缀
					let dealItem = item + (item === '189' ? '.c' : '.co')
					// 条件是：以str开头
					return dealItem.indexOf(str) === 0
				})
			}
			// 否则直接返回邮箱
			return this.email;
		}
	}
})