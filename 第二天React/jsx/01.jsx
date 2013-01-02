// 引入库
import React, { Component } from 'react';
import { render } from 'react-dom';
// 引入请求数据的模块
import axios from 'axios';
// 引入样式
import './skin.less'

// 定义换肤组件
class Skin extends Component {
	// 初始化状态
	constructor(props) {
		// 构造函数继承
		super(props);
		// 初始化
		this.state = {
			// 换肤数据
			data: []
		}
	}
	// 组件创建完成
	componentDidMount() {
		// 请求数据
		axios.get('data/skin.json')
			// 监听数据返回
			.then(({ data }) => this.setState({ data }))
	}
	// 点击图片。进行换肤
	changeBackground(e, id) {
		// console.log(e.currentTarget.getAttribute('data-id'), id)
		// 修改背景
		document.body.style.backgroundImage = `url(img/skin/big_${id}.jpg)`
	}
	// 创建列表
	createList() {
		// 返回列表
		return this.state.data.map((item, index) => 
			<li key={index} data-id={item.id} onClick={e => this.changeBackground(e, item.id)}>
				<img src={'img/skin/' + item.src} alt=""/>
				<p>{item.title}</p>
			</li>
		)
	}
	render() {
		// 返回虚拟DOM
		return (
			<div className="skin">
				<div className="skin-container">
					<ul>{this.createList()}</ul>
				</div>
			</div>
		)
	}
}

// 渲染
render(<Skin></Skin>, app)