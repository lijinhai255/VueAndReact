// 引入库
import React, { Component } from 'react';
// 异步请求
import axios from 'axios';
// 组件
import Banner from '../../components/banner/banner';
import Content from '../../components/content/content';

// 定义组件
export default class Page extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 状态
		this.state = {
			data: []
		}
	}
	// 组件构建前，请求数据
	componentWillMount() {
		// 发送请求
		axios.get(this.props.url)
			// 监听数据返回
			.then(({ data }) => this.setState({ data }))
	}
	// 渲染
	render() {
		// 解构数据
		let { title, info, style } = this.props
		return (
			<div style={{ display: style ? '' : 'none' }}>
				<Banner title={title} info={info}></Banner>
				<Content data={this.state.data}></Content>
			</div>
		)
	}
}
