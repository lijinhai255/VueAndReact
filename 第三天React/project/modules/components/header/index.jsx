// 引入库
import React, { Component } from 'react';
// 引入样式
import './index.less';

// div.app-header.navbar.navbar-static-top>div.container>(div.navbar-header>a.navbar-brand{Bootstrap})+(ul.navbar-nav.nav.nav-pills.pull-right>li>a{Bootstrap中文网})+ul.navbar-nav.nav.nav-pills>(li>a)*6
// 暴露接口
export default class Header extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 初始化状态
		this.state = {
			[props.page]: 'choose'
		}
	}
	// 事件回调函数
	changePage(page) {
		// 根据id修改state
		// 排他法设置
		let state = this.state;
		for (let key in state) {
			// 清除类
			state[key] = '';
		}
		// 这种写法不行，因为原来状态中的数据没有改变
		// let state = {};
		// 设置选中
		state[page] = 'choose';
		// 修改状态
		this.setState(state)

		// 向父组件通信
		this.props.method(page);
	}
	render() {
		// 解构数据
		let { start, css, component, js, marker } = this.state;
		return (
			<div className="app-header navbar navbar-static-top">
				<div className="container">
					<div className="navbar-header">
						<a href="javascript:void(0)" className="navbar-brand" onClick={e => this.changePage('home')}>Bootstrap</a>
					</div>
					<ul className="navbar-nav nav nav-pills pull-right">
						<li>
							<a href="">Bootstrap中文网</a>
						</li>
					</ul>
					<ul className="navbar-nav nav nav-pills">
						<li>
							<a href="javascript:void(0)" className={start} onClick={e => this.changePage('start')}>起步</a>
						</li>
						<li>
							<a href="javascript:void(0)" className={css} onClick={e => this.changePage('css')}>全局 CSS 样式</a>
						</li>
						<li>
							<a href="javascript:void(0)" className={component} onClick={e => this.changePage('component')}>组件</a>
						</li>
						<li>
							<a href="javascript:void(0)" className={js} onClick={e => this.changePage('js')}>JavaScript 插件</a>
						</li>
						<li>
							<a href="javascript:void(0)" className={marker} onClick={e => this.changePage('marker')}>定制</a>
						</li>
						<li>
							<a href="">网站实例</a>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}