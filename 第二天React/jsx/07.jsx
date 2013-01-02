// 引入库
import React, { Component } from 'react';
import { render, findDOMNode } from 'react-dom';

// 定义组件
class Demo extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		this.state = {
			username:  '融贝网',
			result:'',
			password: true,
			lock:true,
		}
	}
	// 修改用户名
	changeUsername(e) {
		// 获取内容
		let username = e.target.value;
		console.log(username,"ljh-username");
		// 表单校验
		// if (!/^.{2,8}$/.test(username)) {
		// 	// 不合法要返回
		// 	return;
		// }
		// 合法继续更新
		// this.setState({ username })
	}
	// 修改密码
	changePassword(e) {
		this.setState({ password: e.target.checked })
	}
	// 展示结果
	showResult(result) {
		// 获取状态数据
		console.log(result,"ljh");
		console.log(this.state);
		this.setState({
			result
		})
	}
	// 修改数据
	changeResult(result) {
		let {username,lock} =  this.state;
		if(lock){
			
			this.refs.username.value = result+username;
			this.setState({
				lock:false
			})
		}else{
			username.split(0,1);
			this.refs.username.value = result+username;
		}
		// this.refs.username.value.chart
		
		// 修改状态数据
		
	}
	componentWillReceiveProps(){
		console.log(arguments,"ljh-111")
	}
	shouldComponentUpdate(newProps, newState){
		return true ;
	}
	componentWillUpdate(oldprop,newprop){

		console.log(oldprop,newprop,"ljh-componentWillUpdate")
	}
	componentDidUpdate() {

		console.log(arguments,"componentDidUpdate")

	}


	renderusername(){
		let { result, username } = this.state;
		// console.log(result=== result,"ljh")
		console.log(this.refs.username,"ljh-ljh")
		return (result=== result ? result :result) +username
	}
	render() {
		// 解构
		let { username, password ,result} = this.state;
		return (
			<div>
				<p>
					<label htmlFor="">用户名</label>
					<input type="text" ref="username" value={username}  onChange={e => this.setState({ username: e.target.value })} />
				</p>
				<p>
					<label htmlFor="">是否设置密码</label>
					{/*<input type="checkbox" checked={password} onChange={this.changePassword.bind(this)} />*/}
					{/*工作中，对于简单的状态更新，我们直接写在箭头函数中*/}
					<input type="checkbox" checked={password} onChange={e => this.setState({ password: e.target.checked })} />
				</p>
				<p>
					<button onClick={e => this.showResult()}>获取数据</button>
					<button onClick={e => this.changeResult()}>修改数据</button>
					<button onClick={e => this.changeResult(1)}>改变1</button>
					<button onClick={e => this.changeResult(2)}>改变2</button>

				</p>
			</div>
		)
	}
}

render(<Demo />, app)