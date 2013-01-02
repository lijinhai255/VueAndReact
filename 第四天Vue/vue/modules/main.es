import Vue from 'vue';

// 引入应用程序
import App from './app.vue';

// 实例化
new Vue({
	// 渲染应用程序
	render: h => h(App)
// 确定挂载点
}).$mount('#app');


// // 引入组件
// import Home from './home.vue';
// // 定义vue实例化对象
// new Vue({
// 	el: '#app',
// 	// 注册组件
// 	components: { Home },
// 	data: {
// 		msg: '爱创课堂'
// 	}
// })
