// 引入vue
import Vue, { filter } from 'vue';
// 自定义过滤器
Vue.filter('uppercase', (str = '') => {
	// 先转换成字符串，再转成大写。
	return String(str).toUpperCase();
	// return 'abc'
})
// 驼峰式命名
Vue.filter('toCamel', (str = '', firstCharIsUpper) => {
	// console.log(str, arg)
	// str = str === undefined ? '' : str;
	// 转成字符串
	str = String(str);
	// 如果首字母大写
	if (firstCharIsUpper) {
		// 首字母大写，并且拼接后面的字符串
		str = str[0].toUpperCase() + str.slice(1)
	}
	// 替换横线和下换线，后面的字母大写
	// return str.replace(/[-_]([a-z])?/g, (match, $1 = '') => {
	// 	// 变成大写
	// 	return $1.toUpperCase();
	// })
	// 箭头函数，省略函数体
	return str.replace(/[-_]([a-z])?/g, (match, $1 = '') => $1.toUpperCase())
})
// console.log(Vue.filter)
// console.log(111, filter)
// 实例化创建vm对象
var app = new Vue({
	// 绑定视图
	el: '#app',
	// 绑定数据
	data: {
		msg: 'hello ickt',
		// msg: 100
		title: 'abc-efg-Hij_klm_Nop'
	}
})