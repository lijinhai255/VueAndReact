// 引入库
import React, { Component } from 'react';
import { render, findDOMNode } from 'react-dom';

// 定义组件
class Demo extends Component {
	// 展示结果
	showResult() {
		// 获取元素，再获取数据
		console.log(this.refs.username.value)
		console.log(this.refs.password.checked)
	}
	// 修改数据
	changeResult(result) {
		// 获取元素，再修改数据
		// this.refs.username.value = 'hello';
		// this.refs.password.checked = false;
		this.refs.username.value = result+username;
	}
	render() {
		return (
			<div>
				<p>
					{/*默认值用defaultValue或者defaultChecked*/}
					<label htmlFor="">用户名</label>
					<input type="text" ref="username" defaultValue="爱创课堂" />
				</p>
				<p>
					<label htmlFor="">是否设置密码</label>
					<input type="checkbox" ref="password" defaultChecked />
				</p>
				<p>
					<button onClick={e => this.showResult()}>获取数据</button>
					<button onClick={e => this.changeResult()}>修改数据</button>
					<button onClick={e => this.changeResult(1)}>改变1</button>
					<button onClick={e => this.changeResult(2)}>改变2</button>
				</p>
			</div>
		)
	}
}

render(<Demo />, app)