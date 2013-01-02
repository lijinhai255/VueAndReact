// 引入vue
import Vue from 'vue';

// 定义vue实例化对象
new Vue({
	// 容器
	el: '#app',
	// 数据
	data: {
		// 绑定数据
		sports: 'basketball',
		// 多选框绑定的数据
		interest: {
			football: '',
			basketball: true,
			pingpang: '选中乒乓球'
		},
		// 未选中时候的值
		notChoose: '没有选中'
	}
})