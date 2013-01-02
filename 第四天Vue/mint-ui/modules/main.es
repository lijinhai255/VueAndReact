// 引入vue
import Vue from 'vue';
// 引入mint ui
import MintUI from 'mint-ui';
// 安装
Vue.use(MintUI)
// 引入样式文件
import 'mint-ui/lib/style.css';
// 引入应用程序
// import App from './app.vue';
// 省略拓展名
import App from './app';

// 实例化
new Vue({
	// 渲染应用程序
	render: h => h(App)
// 定义挂载点
}).$mount('#app')