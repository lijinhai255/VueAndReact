// 引入库
import React, { Component } from 'react';
import { render } from 'react-dom';

// 数据
let data = ['教你理财', '天猫购物季', '千图网']
// 定义组件类
class Demo extends Component {
	// 组件创建完成
	componentDidMount() {
		// 修改样式
		this.refs.title.style.color = 'red';
		console.log(this.refs.title)
	}
	// 定义方法
	createList() {
		// return <span>hello</span>
		// 返回一个数组
		// return [
		// 	<li key="0">教你理财</li>,
		// 	<li key="1">天猫购物季</li>,
		// 	<li key="2">千图网</li>
		// ]
		// 根据数据映射数组
		// return data.map((item, index) => {
		// 	return <li key={index}>{item}</li>
		// })
		// 省略函数体
		return data.map((item, index) => <li key={index}>{item}</li>)
	}
	render() {
		console.log(this)
		// 定义内容
		let str = '<a style="color: red" href="">hello</a>';
		let msg = 'hello'
		// 渲染虚拟DOM
		return (
			<div>
				{/*通过ref反向引用该元素*/}
				<h1 ref="title">爱创课堂</h1>
				<h1>{msg} 爱创课堂</h1>
				<h1>{msg + '爱创课堂'}</h1>
				<h1 dangerouslySetInnerHTML={{ __html: str }}></h1>
				<ul>{this.createList()}</ul>
				{/*<ul>
					{[
						<li>教你理财</li>,
						<li>天猫购物季</li>,
						<li>千图网</li>
					]}
				</ul>*/}
			</div>
		)
	}
}
// 渲染
render(<Demo></Demo>, app)