// 引入库
import React, { Component } from 'react';
// 引入样式
import './banner.less';

// 定义组件并暴露接口
export default class Banner extends Component {
	render() {
		// 解构
		let { title, info } = this.props;
		return (
			<div className="app-banner">
				<div className="container">
					<h1>{title}</h1>
					<p>{info}</p>
				</div>
			</div>
		)
	}
}