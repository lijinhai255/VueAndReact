import React, { Component } from 'react';
import { render } from 'react-dom';
// 消息对象
let Observer = (function() {
	// 消息管道
	let msg = {};
	return {
		// 订阅消息
		on(type, fn) {
			// 如果该类型的消息存在
			if (msg[type]) {
				// 存储fn
				msg[type].push(fn);
			} else {
				// 定义该类型的消息管道
				msg[type] = [fn];
			}
		},
		// 发布消息
		trigger(type, ...args) {
			// 如果消息存在。遍历消息管道
			msg[type] && msg[type].forEach(fn => fn(...args))
		}
	}
})()
// 定义组件
class App extends Component {
	// 订阅事件回调函数
	sendRemoveMsg() {
		// 减少2的消息
		Observer.trigger('removeNum', 2)
	}
	render() {
		// 渲染虚拟DOM
		return (
			<div>
				<button onClick={this.sendRemoveMsg}>父组件：减少2</button>
				<AddNum></AddNum>
				<ShowNum></ShowNum>
			</div>
		)
	}
}
// 增加数字子组件
class AddNum extends Component {
	render() {
		// 渲染虚拟DOM
		return (
			<div>
				<button onClick={e => Observer.trigger('addNum', 5)}>子组件：增加5</button>
			</div>
		)
	}
}
// 显示数字子组件
class ShowNum extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 初始化状态
		this.state = {
			num: 0
		}
	}
	// 组件构建完成
	componentDidMount() {
		// 订阅消息
		Observer.on('addNum', num => this.setState({ num: this.state.num + num }))
		// 订阅消息
		Observer.on('removeNum', num => this.setState({ num: this.state.num - num }))
	}
	render() {
		// 渲染虚拟DOM
		return (
			<div>
				<h1>{'reuslt: ' + this.state.num}</h1>
			</div>
		)
	}
}
// 渲染组件
render(<App></App>, app)