// 引入库
import React, { Component } from 'react';
// 引入组件
import Article from '../article/article';
import Aside from '../aside/aside';


// 定义组件并暴露接口
export default class Content extends Component {
	render() {
		// 解构
		let { data } = this.props;
		return (
			<div className="container">
				<Aside data={data}></Aside>
				<Article data={data}></Article>
			</div>
		)
	}
}