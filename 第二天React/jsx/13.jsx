// 引入react
import React, { Component } from 'react';
import { render } from 'react-dom';

// 父组件
class Parent extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 状态
		this.state = {
			msg: ''
		}
	}
	// 父组件方法
	parentMethod(msg) {
		// 3 父组件接收数据，并更新状态
		this.setState({ msg })
	}
	render() {
		return (
			<div>
				{/*1 向一个子组件传递父组件方法,并绑定作用域*/}
				{/*<Child method={this.parentMethod.bind(this)}></Child>*/}
				{/*简写成箭头函数*/}
				<Child method={msg => this.setState({ msg })}></Child>
				{/*4 将数据传递给另一个子组件*/}
				<Other msg={this.state.msg}></Other>
			</div>
		)
	}
}
// 定义两个子组件
// 第一个子组件
class Child extends Component {
	render() {
		// 2 子组件执行方法，并传递数据
		return <input type="text" onChange={e => this.props.method(e.target.value)}/>
	}
}
// 第二个子组件
class Other extends Component {
	render() {
		// 另一个子组件使用数据
		return <h1>{this.props.msg}</h1>
	}
}
// 渲染组件
render(<Parent></Parent>, app)