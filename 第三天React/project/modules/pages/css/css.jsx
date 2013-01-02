// css组件与start组件很相似，因此可以将start组件看成是混合类，让css组件继承。
import Start from '../start/start';
// 定义css类，继承start混合类类
export default class Css extends Start {
	// 重写构造函数，覆盖数据
	constructor(props) {
		super(props);
		// 重写状态数据
		this.state = {
			title: '全局 CSS 样式',
			info: '设置全局 CSS 样式；基本的 HTML 元素均可以通过 class 设置样式并得到增强效果；还有先进的栅格系统。',
			url: 'data/css.json',
			data: []
		}
	}
}

// // 引入库
// import React, { Component } from 'react';
// // 异步请求
// import axios from 'axios';
// // 引入组件
// import Banner from '../../components/banner/banner';
// import Content from '../../components/content/content';

// // 定义组件暴露接口
// export default class Css extends Component {
// 	// 构造函数
// 	constructor(props) {
// 		super(props);
// 		// 初始化数据
// 		this.state = {
// 			title: '全局 CSS 样式',
// 			info: '设置全局 CSS 样式；基本的 HTML 元素均可以通过 class 设置样式并得到增强效果；还有先进的栅格系统。',
// 			url: 'data/css.json',
// 			data: []
// 		}
// 	}
// 	// 组件构建前请求
// 	componentWillMount() {
// 		// 发送请求
// 		axios.get(this.state.url)
// 			// 监听数据返回
// 			.then(({ data }) => this.setState({ data }))
// 	}
// 	// 渲染虚拟DOM
// 	render() {
// 		// 解构
// 		let { title, info, data } = this.state;
// 		return (
// 			<div style={{ display: this.props.style ? '' : 'none' }}>
// 				<Banner title={title} info={info}></Banner>
// 				<Content data={data}></Content>
// 			</div>
// 		)
// 	}
// }