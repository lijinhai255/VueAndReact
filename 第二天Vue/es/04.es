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
		email: ['qq', '163', '126', '189', 'sina', 'hotmail', 'gmail', 'sohu', '21cn'],
		// 当前li的索引值
		num: -1,
		// 是否是第一次
		hasMove: false
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
	},
	// 定义方法
	methods: {
		// 点击并选中li
		clickChooseLi(e) {
			// 获取当前元素
			let dom = e.target;
			// 获取dom的内容，并存储在msg中
			this.msg = dom.innerHTML;
		},
		/***
		 * 根据num获取真正的索引值
		 * @len 		当前li的长度
		 **/
		getIndexByNum(len) {
			// 以前算法：处理边界值
			// 今天换一种算法，
			// 不论num多么大，对10取余，就是当前索引值
			// 不论num多么小，对10取余，就是-10到0之间的数
			// 不论num多么大或者多么小，对10取余就是-10~10
			// let num = this.num % 10;
			// // 此时加上10，就是0-20之间的一个数
			// // num += 10;
			// num = num + 10
			// // 此时再取余，就是0-10之间的一个数，就是我们要得到的结果
			// return num = num % 10;
			// num %= 10
			// 三步合成一步
			return (this.num % len + len) % len
		},
		// 改变li的样式
		changeLiStyle() {
			// 根据li的长度，获取当前li的索引值
			let lis = document.getElementsByTagName('li');
			// 长度
			let len = lis.length;
			// 根据num获取真正的索引值
			let index = this.getIndexByNum(len);
			// 排他法，设置样式
			// 遍历
			// for (var i = 0; i < len; i++) {}
			// 将类数组对象转化成数组
			// Array.from(lis)
			// 	// 遍历
			// 	.forEach(li => li.className = '')
			// // 设置特殊的
			// lis[indx] = 'choose'
			Array.from(lis)
				// 遍历
				.forEach((li, i) => li.className = i === index ? 'choose' : '')
		},
		// 选中上一个li
		choosePrevLi(e) {
			// 阻止默认行为
			e.preventDefault();
			// 如果移动过，才能减
			if (this.hasMove) {
				// 减少num
				this.num--;
			}
			// 移动过了
			this.hasMove = true;
			// console.log(this.num)
			// 改变li的样式
			this.changeLiStyle();
		},
		// 选中下一个li
		chooseNextLi() {
			// 增加num
			this.num++;
			// 改变li的样式
			this.changeLiStyle();
			// 也移动过了
			this.hasMove = true;
		},
		// 选中当前li
		chooseCurrentLi() {
			// 根据当前li获取索引值
			let lis = document.getElementsByTagName('li');
			// 获取长度
			let len = lis.length;
			// 获取索引值
			let index = this.getIndexByNum(len);
			// 获取li的内容，修改msg
			this.msg = lis[index].innerHTML;
		}
	}
})