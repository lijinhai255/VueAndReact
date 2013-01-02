// 引入库
import React, { Component } from 'react';
import { render } from 'react-dom';

// 定义组件类
class Demo extends Component {
	render() {
		// 定义变量
		let str = '爱创课堂';
		let msg = 'hello ';
		let time = new Date();
		// 渲染虚拟DOM
		// <!-- 注释 -->
		return (
			<div>
				{// 单行注释
				}
				{/* 多行注释 */}
				{/*快捷定义多行注释*/}
				<h1>{msg.toUpperCase() + str}</h1>
				<h1>{time.getFullYear()}</h1>
			</div>
		)
	}
}
// 渲染
render(<Demo></Demo>, app)