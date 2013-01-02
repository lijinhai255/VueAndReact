// 引入react
import React, { Component,PureComponent } from 'react';
import { render } from 'react-dom';

// 父组件
class App extends Component{
    constructor(props){
        super(props);
        this.state={
                num: 1
        }
    }
    render() {
        return (
            <div>
                sss
            </div>
        );
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(this.state.num)
    }
    componentDidMount() {
        setTimeout(() => {
            console.log('timeout')
        })
        new Promise((resovle) => {
            console.log('before')
            resovle('then')
            console.log('after')
        }).then(res => {
            console.log(res)
        })
        let {num} = this.state
        this.setState({
            num: ++num
        }, () => {
            console.log('after setState')
        })
        console.log('---')
    }
}
// 渲染组件
render(<App></App>, app)