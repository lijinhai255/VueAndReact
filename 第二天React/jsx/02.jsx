// 引入库
import React, { Component } from 'react';
import { render, findDOMNode } from 'react-dom';

// 定义组件
class Demo extends Component {
	// 2 初始化状态数据
	constructor(props) {
		// 构造函数继承
		super(props);
		// 默认状态
		this.state = {
			// 可以用属性数据为状态数据赋值，实现数据有外部流入内部
			text: props.text
		}
	}
	// 3 组件即将构建
	componentWillMount() {
		console.log(333, 'componentWillMount', this.state, this.props, findDOMNode(this))
	}
	// 4 渲染方法
	render() {
		// render方法中，不能获取虚拟DOM
		console.log(444, 'render', this.state, this.props)
		return <span>{this.state.text}</span>
	}
	// 5 组件构建完成
	componentDidMount() {
		console.log(555, 'componentDidMount', this.state, this.props, findDOMNode(this))
	}
}

// 1 初始化属性数据
Demo.defaultProps = {
	text: '网址导航'
}

render(<Demo></Demo>, app)