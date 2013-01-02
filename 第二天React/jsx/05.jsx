// 引入库
import React, { Component } from 'react';
import { render, findDOMNode } from 'react-dom';

// 定义组件
class Demo extends Component {
	// 销毁期方法
	componentWillUnmount() {
		console.log(this, arguments)
	}
	render() {
		return <h1>hello</h1>
	}
}

render(<Demo />, app)

// 2s之后，渲染爱创课堂h1标签
setTimeout(() => {
	render(<h1>爱创课堂</h1>, app)
}, 2000)