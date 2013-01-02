import Vue from 'vue';
// 引入axios
import axios from 'axios';
// console.log(axios)
// 安装axios
// Vue.prototype.ickt = axios;
// 工作中，常常定义成$http
Vue.prototype.$http = axios;

// 定义组件类
let Home = Vue.extend({
	template: '<h1>home page -- {{msg}}</h1>',
	// 绑定数据
	data() {
		return {
			msg: ''
		}
	},
	// 组件构建完成
	mounted() {
		// console.log(this);
		// 发送请求
		 this.$http.get('data/test.json')
		// 请求qq音乐的数据
		// this.$http.get('https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg')
		this.$http
			.get('/data/test', {
				// query数据
				params: {
					g_tk: 5381,
					loginUin: 0,
					hostUin: 0,
					format: 'json',
					inCharset: 'utf8',
					outCharset: 'utf-8',
					notice: 0,
					platform: 'yqq.json',
					needNewCode: 0
				}
			})
			// 监听数据
			.then(({ data }) => this.msg = data.data.special_key)
	}
})

// 创建vue实例化对象
new Vue({
	// 容器
	el: '#app',
	// 注册组件
	components: { Home },
	// 数据
	data: {
		title: ''
	},
	// 组件创建完成
	created() {
		// 发送请求
		axios
			 .get('data/demo.json?color=red', {
			 	// query
			 	params: {
			 		num: 100
			 	}
			 })
			 // post请求
			 .post('data/demo.json?color=green', {
			 	num: 200
			 }, {
			 	params: {
			 		msg: 'hello'
			 	},
			 	// 更改请求头
			 	headers: {
			 		'Content-Type': 'application/x-www-form-urlencoded'
			 	}
			 })
			 // 监听数据返回
			 .then(
			 	// 成功时候的回调函数
			 	({ data }) => this.title = data.msg,
			 	// 失败时候的回调函数
			 	res => console.log('error', 111, res)
			 )
			 // 再次订阅
			 .then(res => console.log(res))
	}
})