// 引入redux
// import * as Redux from 'redux';
import { createStore } from 'redux';

// 定义常量
const ADD_NUM = 'addNum';
const REMOVE_NUM = 'removeNum';
// 定义action
// type类型是可以被修改的的
// let addNum = { type: 'addNum', data: 5 };
// type类型不能被改变了
let addNum = { type: ADD_NUM, data: 5 };
let removeNum = { type: REMOVE_NUM, data: 2 };

// 定义reducer
// 由于定义了默认值，因此第一次执行时，返回的state就有数据了
function reducer(state = 0, action) {
	// console.log(state, action)
	// 判断消息类型
	switch (action.type) {
		// 增加数字
		case ADD_NUM:
			state += action.data;
			break;
		// 减少数字
		case REMOVE_NUM: 
			state -= action.data;
	}
	// 将新的state数据返回
	return state
}
// 创建store
let store = createStore(reducer)
console.log(store)
console.log(store.getState())
// 监听state变化
store.subscribe(res => console.log(store.getState()))

// 发布action消息
store.dispatch(addNum)
store.dispatch(addNum)
store.dispatch(addNum)
store.dispatch(removeNum)
store.dispatch(removeNum)