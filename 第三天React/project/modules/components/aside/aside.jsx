// 引入库
import React, { Component } from 'react';
// 引入样式
import './aside.less';

// 定义组件并暴露接口
export default class Aside extends Component {
	// 创建列表
	createList() {
		// 遍历属性数据
		return this.props.data.map((item, index) => 
			<li key={index}>
				<a href={'#' + item.id}>{item.title}</a>
			</li>
		)
	}
	render() {
		return <ul className="app-aside">{this.createList()}</ul>
	}
}

// 默认属性数据
Aside.defaultProps = {
	data: []
}