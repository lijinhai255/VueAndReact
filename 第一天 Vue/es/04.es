// 引入vue
import Vue from 'vue';
// 实例化创建vm对象
var app = new Vue({
	// 绑定视图
	el: '#app',
	// 绑定数据
	data: {
		msg: 'hello',
		// 数组
		colors: ['red', 'green'],
		obj: {
			num: 10
		},
		// 第四类：解决：初始化
		title: ''
	}
})
// 修改普通属性数据
// app.msg = '爱创课堂'
// 第一类：数组中的值类型
// app.colors[0] = 'blue'
// 解决：覆盖新数组
// app.colors = ['blue', 'green'];

// 通用方案
// app.$set(app, 'colors', ['blue', 'green'])
app.$set(app.colors, '0', 'gold')

// 第二类：数组中的新成员，
// app.colors[3] = 'pink'; 
// 解决：覆盖新数组
// app.colors = ['red', 'green', , 'pink']
// 第三类：对象中的新属性
// app.obj.size = 20;
// 解决：覆盖新对象
// app.obj = { num: 10, size: 20 }
// 第四类：未初始化的
// app.title = '爱创课堂'
console.log(app)