// 引入vue
import Vue from 'vue';
// 安装element-ui
import ElementUI from 'element-ui';
Vue.use(ElementUI)
// 引入样式
import 'element-ui/lib/theme-chalk/index.css';

// 引入应用程序
import App from './app';

// 实例化
new Vue({
	// 渲染
	render: h => h(App)
// 挂载
}).$mount('#app')