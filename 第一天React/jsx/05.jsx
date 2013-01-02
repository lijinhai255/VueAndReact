// 引入库
import React, { Component } from 'react';
import { render } from 'react-dom';

// 定义组件类
class Demo extends Component {
	render() {
		// 渲染虚拟DOM
		return (
			<div>
				{/*title就是元素属性*/}
				{/*data-id与abc就是自定义数据属性*/}
				<h1 title="专业前端培训学校" style={{
					color: 'red',
					backgroundColor: 'green'
				}} data-id="100" abc="20">爱创课堂</h1>
				{/*class命中关键字*/}
				<h1 className="green">专业前端培训学校</h1>
				<label htmlFor="username">用户名</label>
				<input type="text" id="username" />
			</div>
		)
	}
}
// 渲染
render(<Demo></Demo>, app)
// js语法
// var h1 = React.createElement('h1', {
// 		title: 'abc',
// 		// 设置样式
// 		style: {
// 			color: 'orange'
// 		}
// 	}, 'hello')
// render(h1, app)