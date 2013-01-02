// 引入库
import React, { Component } from 'react';
// 移入异步请求库
import axios from 'axios';
// 引入组件
import Banner from '../../components/banner/banner';
import Content from '../../components/content/content';

// 定义组件并暴露接口
export default class Start extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 初始化状态数据
		this.state = {
			title: '起步',
			info: '简要介绍 Bootstrap，以及如何下载、使用，还有基本模版和案例，等等。',
			url: 'data/start.json',
			// 数据
			data: []
		}
	}
	// 组件构建前
	componentWillMount() {
		// 请求数据
		axios.get(this.state.url)
			// 监听数据返回
			.then(({ data }) => this.setState({ data }))
	}
	render() {
		// 解构
		let { info, title, data } = this.state;
		return (
			<div style={{ display: this.props.style ? '' : 'none' }}>
				<Banner title={title} info={info}></Banner>
				<Content data={data}></Content>
			</div>
		)
	}
}