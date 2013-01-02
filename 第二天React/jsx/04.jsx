// 引入库
import React, { Component } from 'react';
import { render, findDOMNode } from 'react-dom';
// 引入样式
import './demo.less';

// 定义父组件
class Slider extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 状态
		this.state = {
			text: '头条新闻'
		}
	}
	// 组件创建完成
	// componentDidMount() {
	// 	window.addEventListener('scroll', () => {
	// 		// 判断滚条位置
	// 		// console.log(scrollY)
	// 		// 如果高于500，显示返回顶部
	// 		if (scrollY > 500) {
	// 			this.setState({ text: '返回顶部' })
	// 		} else {
	// 			this.setState({ text: '头条新闻' })
	// 		}
	// 	})
	// }
	render() {
		return (
			<div className="slider">
				<GoTop text={this.state.text}></GoTop>
			</div>
		)
	}
}

// 定义子组件
class GoTop extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		this.state = {
			text: '头条新闻'
		}
	}
	// 1 组件即将接收新的属性数据
	componentWillReceiveProps(newProps) {
		console.log(111, 'componentWillReceiveProps', this.props, newProps)
	}
	// 2 组件是否可以更新
	shouldComponentUpdate(newProps, newState) {
		console.log(222, 'shouldComponentUpdate', this.props, newProps, 'state', this.state, newState)
		// 属性数据改变或者状态数据改变才可以更新
		return newProps.text !== this.props.text || newState.text !== this.state.text
		// return true;
	}
	// 3 组件即将更新
	componentWillUpdate(newProps, newState) {
		console.log(333, 'componentWillUpdate', this.props, newProps, 'state', this.state, newState, findDOMNode(this).innerHTML)
	}
	// 4 渲染更新组件
	render() {
		console.log(444, 'render', this.props, 'state', this.state)
		// 绑定this
		// return <span>{this.props.text}</span>
		return <span>{this.state.text}</span>
	}
	// 5 组件更新完毕
	componentDidUpdate(oldProps, oldState) {
		console.log(555, 'componentDidUpdate', this.props, oldProps, 'state', this.state, oldState, findDOMNode(this).innerHTML)
	}
	// 组件创建完成
	componentDidMount() {
		window.addEventListener('scroll', () => {
			// 判断滚条位置
			// console.log(scrollY)
			// 如果高于500，显示返回顶部
			if (scrollY > 500) {
				this.setState({ text: '返回顶部' })
			} else {
				this.setState({ text: '头条新闻' })
			}
		})
	}
}

render(<Slider />, app)