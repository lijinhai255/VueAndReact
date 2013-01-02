// 引入库
import React, { Component } from 'react';
import { render } from 'react-dom';
// 引入属性约束模块
import PropTypes from 'prop-types';

console.log(PropTypes)

class Nav extends Component {
	// 类的内部定义静态属性
	static get color() {
		return 'red';
	}
	// 渲染列表的方法
	createList() {
		// 静态属性数据，不能在类的内部访问。
		// console.log(this.color, this.num)
		console.log(this.props.data)
		// 返回虚拟DOM
		return this.props.data.map((item, index) => <li key={index}>{item}</li>)
	}
	// 渲染
	render() {
		return (
			<ul>{this.createList()}</ul>
		)
	}
}
// 类的外部定义静态属性
Nav.num = 10;
// 静态属性数据，只能通过类访问
// console.log(Nav.color, Nav.num)
// 定义默认属性数据
Nav.defaultProps = {
	data: ['默认网址']
}
// 定义属性约束
Nav.propTypes = {
	// data: PropTypes.string
	// 数组类型
	// data: PropTypes.array
	// 必填的
	data: PropTypes.array.isRequired
}

// 使用组件
render(<Nav data={['教你理财', '天猫购物季', '千图网']}></Nav>, app1)
render(<Nav data={['新浪•NBA', '搜狐体育', 'CCTV5', '虎扑体育', '直播吧']}></Nav>, app2)
render(<Nav></Nav>, app3)