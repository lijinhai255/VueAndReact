// 引入react和样式
import React, { Component } from 'react';
// 引入header组件
import Header from './components/header';
// 引入组件
import Home from './pages/home/home';
import Start from './pages/start/start';
// 引入css组件
import Css from './pages/css/css';
// 引入page组件
import Page from './pages/page/page';
// 属性约束
// import PropTypes from 'prop-types';
// 样式
// import './base.less';
import './app.less';

// 定义应用程序组件
export default class App extends Component {
	// 构造函数
	constructor(props) {
		// 构造函数继承
		super(props);
		// 初始化状态
		this.state = {
			// 属性名称可以使用表达式
			[props.page]: true
		}
	}
	// 获取选中的页面名称
	getChoosePage() {
		// 遍历state，找出属性值为true页面
		for (let page in this.state) {
			// page表示页面名称，this.state[page]表示是否显示
			if (this.state[page]) {
				// 返回页面名称，不用继续遍历了
				return page;
			}
		}
	}
	// 父组件方法
	changePage(page) {
		// console.log(page, this)
		// 排他法。修改状态数据
		// 将所有页面隐藏
		let state = this.state;
		for (let key in state) {
			// 隐藏
			state[key] = false;
		}
		// 将选中的页面显示
		state[page] = true;
		// 更新状态
		this.setState(state);
	}
	// 渲染
	render() {
		// 解构数据
		let { home, start, css, js, component, marker } = this.state;
		return (
			<div>
				{/*让相应的导航选中，是典型的父组件向子组件通信*/}
				{/*header中修改数据要传递给app，是一个典型的子组件向父组件通信模型*/}
				<Header page={this.getChoosePage()} method={this.changePage.bind(this)}></Header>
				{/*组件只有自定义数据属性，设置style样式对象没有意义*/}
				<Home style={home}></Home>
				{/*<Start style={start}></Start>*/}
				{/*<Css style={css}></Css>*/}
				<Page style={start} url="data/start.json" title="起步" info="简要介绍 Bootstrap，以及如何下载、使用，还有基本模版和案例，等等。"></Page>
				<Page style={css} url="data/css.json" title="全局 CSS 样式" info="设置全局 CSS 样式；基本的 HTML 元素均可以通过 class 设置样式并得到增强效果；还有先进的栅格系统。"></Page>
				<Page style={component} url="data/component.json" title="组件" info="无数可复用的组件，包括字体图标、下拉菜单、导航、警告框、弹出框等更多功能。"></Page>
				<Page style={js} url="data/js.json" title="JavaScript 插件" info="jQuery 插件为 Bootstrap 的组件赋予了“生命”。可以简单地一次性引入所有插件，或者逐个引入到你的页面中。"></Page>
				<Page style={marker} url="data/marker.json" title="定制并下载 Bootstrap" info="通过自定义 Bootstrap 组件、Less 变量和 jQuery 插件，定制一份属于你自己的 Bootstrap 版本吧。"></Page>
				{/*<h1 style={{ display: js ? '' : 'none' }}>JavaScript 插件</h1>
				<h1 style={{ display: marker ? '' : 'none' }}>定制</h1>*/}
			</div>
		)
	}
}

// 属性约束
// App.propTypes = {
// 	page: PropTypes.string.isRequired
// }

// 默认属性
App.defaultProps = {
	page: 'home'
}
