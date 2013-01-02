// 引入库
import React, { Component } from 'react';
import { render, findDOMNode } from 'react-dom';

// // 非约束性单选下拉框
// class Demo extends Component {
// 	// 展示结果
// 	showResult() {
// 		// 获取元素，再获取数据
// 		console.log(this.refs.color.value)
// 	}
// 	// 修改数据
// 	changeResult() {
// 		// 获取元素，再修改数据
// 		this.refs.color.value = 'isRed'
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<p>
// 					{/*默认值通过defaultValue定义*/}
// 					{/*<select defaultValue="green">
// 						<option>red</option>
// 						<option>green</option>
// 						<option>blue</option>
// 					</select>*/}
// 					<select defaultValue="isGreen" ref="color">
// 						<option value="isRed">red</option>
// 						<option value="isGreen">green</option>
// 						<option value="isBlue">blue</option>
// 					</select>
// 				</p>
// 				<p>
// 					<button onClick={e => this.showResult()}>获取数据</button>
// 					<button onClick={e => this.changeResult()}>修改数据</button>
// 				</p>
// 			</div>
// 		)
// 	}
// }

// 约束性单选下拉框
class Demo extends Component {
	// 定义状态
	constructor(props) {
		super(props);
		this.state = {
			color: 'isBlue'
		}
	}
	// 展示结果
	showResult() {
		console.log(this.state.color)
	}
	// 修改数据
	changeResult() {
		// 修改状态数据
		this.setState({ color: 'isRed' })
	}
	render() {
		return (
			<div>
				<p>
					{/*默认值通过value绑定状态定义*/}
					<select value={this.state.color} onChange={e => this.setState({ color: e.target.value })}>
						<option value="isRed">red</option>
						<option value="isGreen">green</option>
						<option value="isBlue">blue</option>
					</select>
				</p>
				<p>
					<button onClick={e => this.showResult()}>获取数据</button>
					<button onClick={e => this.changeResult()}>修改数据</button>
				</p>
			</div>
		)
	}
}

render(<Demo />, app)