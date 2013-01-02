// 引入库
import React, { Component } from 'react';
import { render, findDOMNode } from 'react-dom';

// 定义父组件
class Slider extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 状态
		this.state = {
			text: '返回顶部'
		}
	}
	// 父组件方法
	method() {
		console.log(this, arguments)
	}
	render() {
		return (
			<div className="slider">
				{/*使用子组件*/}
				{/*变量，字符串等不变的数据*/}
				{/*<GoTop text="网址导航"></GoTop>*/}
				{/*属性数据*/}
				{/*<GoTop text={this.props.title}></GoTop>*/}
				{/*状态数据*/}
				{/*<GoTop text={this.state.text}></GoTop>*/}
				{/*传递方法*/}
				{/*<GoTop parentMethod={this.method} text={this.state.text}></GoTop>*/}
				{/*传递方法的时候，绑定父组件*/}
				<GoTop parentMethod={this.method.bind(this, 123, 456)} text={this.state.text}></GoTop>
			</div>
		)
	}
}

// 定义子组件
class GoTop extends Component {
	// 子组件方法中
	childMethod(e) {
		console.log(this, 22)
		// console.log(111, this.props)
		// 执行父组件方法
		this.props.parentMethod.call(this, 100, e, 200);
	}
	// 渲染方法
	render() {
		// 绑定事件
		// return <span onClick={this.props.parentMethod}>{this.props.text}</span>
		// 绑定this
		return <span onClick={this.props.parentMethod.bind(this, 100, 200)}>{this.props.text}</span>
		// 在子组件方法中执行
		// return <span onClick={this.childMethod.bind(this)}>{this.props.text}</span>
		// 箭头函数
		{/*return <span onClick={e => this.props.parentMethod(111, e)}>{this.props.text}</span>*/}
	}
}

render(<Slider title="爱创课堂" />, app)