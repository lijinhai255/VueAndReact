// 引入react
import React, { Component } from 'react';
import { render } from 'react-dom';
// 引入jQuery
import $ from 'jquery';

// 渲染新闻
class News extends Component {
	// 提供数据
	constructor(props) {
		super(props);
		// 状态
		this.state = {
			list: ["孟晚舟案让中国人感觉被朋友捅刀", "网友辱骂已故中国氢弹之父？抓！", "24.6亿人次的迁徙 交通部发布预警"]
		}
	}
	// 渲染列表
	createList() {
		// 根据状态数据渲染
		return this.state.list.map((item, index) => <li style={{ color: '#f30' }} key={index}>{item}</li>)
	}
	// 组件构建完成
	componentDidMount() {
		// 修改样式
		// $('li').css({ color: '#f30' })
		// 过了3秒钟，数据改变了
		setTimeout(() => {
			// 更新状态数据
			this.setState({
				list: ["出狱后 东北大哥做起了\"死人生意\"！", "29岁癫痫患者突然死亡：用了8天无限极", "男子买的房被占16年 还被隔成43间出租", "学生作弊被没收手机 第2天竟死在角落", "\"谁给我家铺了地板\" 马大哈工人干错活"]
			})
		}, 3000)
	}
	// 更新结束，更新样式
	// componentDidUpdate() {
	// 	$('li').css({ color: '#f30' })
	// }
	// 渲染虚拟DOM
	render() {
		return (
			<ul>{this.createList()}</ul>
		)
	}
}

// 渲染组件
render(<News></News>, app)