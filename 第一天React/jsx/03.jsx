// 引入库
import React, { Component } from 'react';
import { render } from 'react-dom';

// 定义组件
class Demo extends Component {
	// 渲染
	render() {
		// 返回值是虚拟DOM树
		return (
			<ul>
				<li>教你理财</li>
				<li>天猫购物季</li>
				<li>千图网</li>
			</ul>
		)
	}
}
// 将组件转成虚拟DOM
let demo = <Demo></Demo>
// 单标签
// let demo = <Demo />
// 渲染组件
render(demo, app)