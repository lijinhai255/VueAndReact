// 引入react
import React, { Component } from 'react';
import { render } from 'react-dom';

// 定义父组件
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
		// console.log(e)
		// 3 更新状态
		// this.setState({ msg: e.target.value })
		// 3 更新状态
		this.setState({ msg })
	}
	render() {
		// 渲染
		return (
			<div>
				{/*1 传递方法，并绑定this*/}
				{/*<Child method={this.parentMethod.bind(this)}></Child>*/}
				{/*1 传递方法的时候，可以简写成箭头函数*/}
				<Child method={msg => this.setState({ msg })}></Child>
				<h1>{this.state.msg}</h1>
			</div>
		)
	}
}

// 子组件
class Child extends Component {
	// 子组件方法
	childMethod(e) {
		// 执行父组件方法，并传递参数
		this.props.method(e.target.value)
	}
	// 渲染
	render() {
		// 2 作为事件回调函数
		// return <input type="text" onChange={this.props.method}/>
		// 2 子组件方法中执行
		// return <input type="text" onChange={this.childMethod.bind(this)}/>
		// 2 简写成箭头函数
		return <input type="text" onChange={e => this.props.method(e.target.value)}/>
	}
}

// 渲染组件
render(<Parent></Parent>, app)