// 引入库
import React, { Component } from 'react';
import { render } from 'react-dom';

// 定义无状态组件
// 可以简写成函数
// let Demo = () => <button>hello</button>

// 定义有状态组件
class Demo extends Component {
	// 定义构造函数
	constructor(props) {
		// 构造函数继承
		super(props);
		console.log(arguments, this.props === props)
		// 初始化状态数据
		this.state = {
			// color: 'red',
			// // 用属性数据为状态数据赋值，实现数据由外部流入内部
			// // 由于super继承了props，所以this.props和props是一样的
			// num: props.num
			// 当前显示的索引值
			num: 0
		}
		// console.log(this)
	}
	// 创建字列表
	createChildList(arr) {
		// 根据arr成员，返回新闻
		return arr.map((item, index) => <span key={index}>{item}</span>)
	}
	// 定义数据
	createList() {
		// this.num对index取余
		let num = this.state.num % this.props.data.length;
		// 创建li
		return this.props.data.map((item, index) => <li style={{
			display: index === num ? '' : 'none'
		}} key={index}>{this.createChildList(item)}</li>)
	}
	// 切换显示新闻方法
	toggle() {
		// 获取num
		let num = this.state.num;
		// 更新num
		num++;
		// 更新状态
		this.setState({ num })
	}
	render() {
		return (
			<div>
				<span onClick={e => this.toggle()}>换一换</span>
				<ul>{this.createList()}</ul>
			</div>
		)
	}
}

// 使用组件
render(<Demo data={[
		['玛莎母亲老公出轨'],
		['快鹿高管被判无期'],
		['济南大白宫被拆'],
		['郜林激动怒斥裁判']
	]} num="10"></Demo>, app)

render(<Demo data={[
		['曝张柏芝豪宅装修', '孤存6杀吃鸡'],
		['李承铉为女儿庆生', '中铁成都局回应'],
		['广德申报火锅之乡', '库里三分创纪录'],
		['小罐茶 智商税', '北京地铁拆座椅'],
		['青岛香奈儿遭打砸', '业主割断安全绳']
	]}></Demo>, app2)