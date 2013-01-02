// 引入库
import React, { Component } from 'react';
import { render, findDOMNode } from 'react-dom';

// // 约束性多选下拉框
// class Demo extends Component {
// 	// 定义状态
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			color: ['isBlue']
// 		}
// 	}
// 	// 改变颜色
// 	changeColor(e) {
// 		// 定义获取的结果
// 		let color = [];
// 		// 获取所有的options
// 		let options = e.target.options;
// 		// 遍历options
// 		for (let i = 0; i < options.length; i++) {
// 			// options[i]代表每一个option
// 			// 找到被选中的options并存储结果
// 			if (options[i].selected) {
// 				// 存储值
// 				color.push(options[i].value)
// 			}
// 			// console.log(options[i].selected)
// 		}
// 		// 更新状态
// 		this.setState({ color })
// 	}
// 	// 展示结果
// 	showResult() {
// 		// 获取状态数据
// 		console.log(this.state.color)
// 	}
// 	// 修改数据
// 	changeResult() {
// 		// 修改状态数据
// 		this.setState({ color: ['isRed', 'isBlue'] })
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<p>
// 					{/*默认值通过value绑定状态定义*/}
// 					<select value={this.state.color} onChange={e => this.changeColor(e)} multiple>
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

// 非约束性多选下拉框
class Demo extends Component {
	// 展示结果
	showResult() {
		// 定义结果
		let color = [];
		// 获取元素，
		let options = this.refs.color.options;
		// 遍历options
		for (var i = 0; i < options.length; i++) {
			// 如果被选中
			if (options[i].selected) {
				// 存储内容值
				color.push(options[i].value)
			}
		}
		// 再获取数据
		console.log(color)
	}
	// 修改数据
	changeResult() {
		// 将结果改成
		let choose = ['isRed', 'isGreen'];
		// let choose = ['isBlue', 'isGreen'];
		// 获取元素
		let options = this.refs.color.options;
		// 遍历options，寻找每一个option的值在choose数组中，如果在将其选中，不在取消选中
		// ickt: for (let i = 0; i < options.length; i++) {
		// 	// 每个options的值:option.value
		// 	let option = options[i];
		// 	// 是否在choose数组中
		// 	for (let j = 0; j < choose.length; j++) {
		// 		// 每一个值：choose[i]
		// 		// 如果每一个值与options的值相等，说明在数组中
		// 		if (choose[j] === option.value) {
		// 			// 让options被选中
		// 			option.selected = true;
		// 			// 找到了option，还需要继续遍历么？
		// 			// 不需要遍历choose数组了，而是遍历下一个option
		// 			// 使用游标，跳出j循环，进入i循环
		// 			continue ickt;
		// 		}
		// 	}
		// 	// options的值，不在choose数组中，将option取消选中
		// 	option.selected = false;
		// }

		// for (let i = 0; i < options.length; i++) {
		// 	// 每个options的值:option.value
		// 	let option = options[i];
		// 	// 首先option取消选中
		// 	option.selected = false;
		// 	// 是否在choose数组中
		// 	for (let j = 0; j < choose.length; j++) {
		// 		// 每一个值：choose[i]
		// 		// 如果每一个值与options的值相等，说明在数组中
		// 		if (choose[j] === option.value) {
		// 			// 让options被选中
		// 			option.selected = true;
		// 			// 找到了option，跳出j循环，
		// 			break;
		// 		}
		// 	}
		// }

		// es5语法
		// 遍历options
		// for (let i = 0; i < options.length; i++) {
		// 	// 每一个option
		// 	let option = options[i];
		// 	// 判断option的值是否在choose数组中，
		// 	if (choose.indexOf(option.value) >= 0) {
		// 		// 选中options
		// 		option.selected = true;
		// 	} else {
		// 		// 取消选中
		// 		option.selected = false;
		// 	}
		// }

		// es6 遍历类数组对象
		// Array.from(options)
		// 	// 使用数组迭代器方法
		// 	.forEach(item => {
		// 		// 如果item的值在choose数组中
		// 		if (choose.indexOf(item.value) >= 0) {
		// 			// 选中
		// 			return item.selected = true;
		// 		}
		// 		// 省略else
		// 		item.selected = false;
		// 	})

		// 三元运算符
		Array.from(options)
			// 使用数组迭代器方法
			.forEach(item => item.selected = choose.indexOf(item.value) >= 0 ? true : false)
	}
	render() {
		return (
			<div>
				<p>
					{/*默认值通过defaultValue定义数组*/}
					<select defaultValue={['isBlue']} ref="color" multiple>
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