// 引入库
import React, { Component } from 'react';
// 引入样式
import './article.less';

// 定义组件并暴露接口
export default class Article extends Component {
	// 渲染列表
	createList() {
		// 遍历数据
		return this.props.data.map((item, index) => 
			<li key={index} id={item.id}>
				<h3>{item.title}</h3>
				<p>{item.content}</p>
			</li>
		)
	}
	render() {
		return <ul className="app-article">{this.createList()}</ul>
	}
}
// 定义默认属性数据
Article.defaultProps = {
	data: []
}
