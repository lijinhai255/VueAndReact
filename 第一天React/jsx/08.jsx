// 引入库
import React, { Component } from 'react';
import { render } from 'react-dom';

// 其他对象
let obj = { color: 'red' }

class Ickt extends Component {
	// 定义事件回调函数
	clickBtn(e) {
		// console.log(arguments, e.target, e.currentTarget)
		console.log(this, arguments)
	}
	// 渲染
	render() {
		return (
			<div>
				<button onClick={this.clickBtn}>按钮1</button>
				{/*bind方法改变this指向*/}
				<button onClick={this.clickBtn.bind(this, 100, true, 'color')}>按钮2</button>
				{/*箭头函数改变this指向*/}
				<button onClick={e => this.clickBtn(100, e, true, 'color')}>按钮3</button>
				{/*我们可以将this指向其他对象，但是不建议*/}
				<button onClick={this.clickBtn.bind(obj)}>按钮4</button>
				<button onClick={function demo(e) {
					console.log(123, arguments)
				}}>按钮5</button>
			</div>
		)
	}
}
// 使用组件
render(<Ickt />, app)