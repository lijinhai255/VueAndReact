// 引入库
import React, { Component } from 'react';
import { render } from 'react-dom';
// 引入redux
import { createStore } from 'redux';
// 引入插件
import { connect, Provider } from 'react-redux';
// import * as ReactRedux from 'react-redux';
// console.log(ReactRedux)

// 定义常量
const ADD_NUM = 'addNum';
const REMOVE_NUM = 'removeNum';
// 定义actions
let addNum5 = { type: ADD_NUM, data: 5 }
let removeNum2 = { type: REMOVE_NUM, data: 2 }
// 定义reducer
function reducer(state = 0, action) {
	// 判断消息类型
	switch (action.type) {
		// 判断类型
		case ADD_NUM:
			// 增加一个数字
			state += action.data;
			break;
		case REMOVE_NUM:
			// 减少一个数字
			state -= action.data;
			break;
	}
	// 返回新的state
	return state;
}
// 定义store
let store = createStore(reducer);
// 订阅消息
store.subscribe(res => console.log(store.getState()))
// 发布消息
// store.dispatch(addNum5)

// 定义组件
class App extends Component {
	// 事件回调函数
	sendMessage() {
		// 发布消息
		this.props.dispatch(removeNum2)
	}
	render() {
		//
		// 解构
		let { state, dispatch, addNum } = this.props;
		return (
			<div>
				{/*<button onClick={this.sendMessage.bind(this)}>减少2</button>*/}
				{/*箭头函数简化*/}
				<button onClick={e => dispatch(removeNum2)}>减少2</button>
				{/*子组件没有数据，我们可以传递*/}
				<AddNum dispatch={dispatch} addNum={addNum}></AddNum>
				{/*<ShowNum state={state}></ShowNum>*/}
				<ShowNum num={state}></ShowNum>
				{/*<Demo></Demo>*/}
				<DealDemo></DealDemo>
			</div>
		)
	}
}
// 定义子组件
class AddNum extends Component {
	render() {
		// console.log('addNum', this.props)
		// 解构
		let { dispatch, addNum } = this.props;
		return (
			<p>
				{/*<button onClick={e => this.props.dispatch(addNum5)}>增加5</button>*/}
				<button onClick={e => dispatch(addNum5)}>增加5</button>
				<button onClick={e => addNum(10)}>增加10</button>
				<button onClick={e => addNum(20)}>增加20</button>
			</p>
		)
	}
}
// 定义子组件
class ShowNum extends Component {
	render() {
		{/*return <h1>{'result: ' + this.props.state}</h1>*/}
		return <h1>{'result: ' + this.props.num}</h1>
	}
}
class Demo extends Component {
	render() {
		// console.log('demo', this.props)
		return <h1>demo</h1>
	}
}
// 渲染应用程序
// render(<App></App>, app)

// =========================
// 组件的属性对象如何接收state数据
function mapStateToProps(state) {
	// 返回值就是拓展的
	return { 
		state,
		// color: 'red'
	}
}
// 组件的属性对象如何接收dispatch方法
function mapDispatchToProps(dispatch) {
	// 返回值就是拓展的
	return {
		dispatch,
		// 封装一个发布消息的方法
		addNum(data) {
			// 发布消息
			dispatch({ type: ADD_NUM, data })
		}
	}
}
// 定义组件接收state和dispatch的方式
let dealFn = connect(mapStateToProps, mapDispatchToProps)
// 处理应用程序组件了
let DealApp = dealFn(App);
// 拓展新的组件
let DealDemo = dealFn(Demo);
// 提供store对象
render(
	// 通过store属性，提供store对象
	<Provider store={store}>
		{/*渲染处理后的应用程序*/}
		{/*<App></App>*/}
		<DealApp></DealApp>
	</Provider>
, app)