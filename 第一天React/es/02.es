// 引入库
import { createElement, Component } from 'react';
import { render } from 'react-dom';

// 定义组件类
class Demo extends Component {
	// 渲染组件
	render() {
		// 返回值是虚拟DOM树
		return createElement(
			'ul',
			// 第二个参数表示属性对象，没有属性对象，可以传递null
			null,
			// 第三个参数开始，表示子虚拟DOM
			createElement('li', null, '教你理财'),
			createElement('li', null, '天猫购物季'),
			createElement('li', null, '千图网')
		)
	}
}

// 不能直接渲染组件，要将组件转换成虚拟DOM
let demo = createElement(Demo);

// 使用render方法渲染
// render(demo, document.getElementById('app'))
// 小技巧：可以直接用id获取元素
// 项目中，和工作中，不要用。
render(demo, app)