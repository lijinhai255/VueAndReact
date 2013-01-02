// 引入react
import React, { Component } from 'react';
import { render } from 'react-dom';
// 引入类库
import ImageZoom from '../image-zoom.es';

// 定义类
class Demo extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 状态
		this.state = {
			width: 200,
			url: './demo.jpg'
		}
	}
	// 等到组件创建完成，我们才能操作虚拟DOM
	componentDidMount() {
		// 解构数据
		let { width, url } = this.state;
		// 使用放大器
		new ImageZoom(this.refs.container, url, width)
	}
	// 渲染
	render() {
		return (
			<div className="demo">
				<div className="image-container" ref="container"></div>
				<div className="small-image">
					<img src={this.state.url} width="60" height="60" alt=""/>
				</div>
			</div>
		)
	}
}
// 渲染组件
render(<Demo></Demo>, app)

// 测试
// new ImageZoom(app, './demo.jpg', 200);