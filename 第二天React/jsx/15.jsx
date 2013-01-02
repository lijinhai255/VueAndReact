// 引入react
import React, { Component,PureComponent } from 'react';
import { render } from 'react-dom';

// 父组件
class Child extends Component{
    render() {
        console.log('child render')
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
 
    componentDidUpdate(prevProps, prevState) {
        console.log('child update')
    }
 
}
 
class Parent extends Component{
    constructor(props){
        super(props);
        this.state= {
                name: 'aaa'
        }
    }
    render() {
        console.log('parent render')
        return (
            <div>
                <Child name={this.state.name}/>
                <button onClick={e => {
 
                    this.setState({name:'bbb'})
                }}>change</button>
            </div>
        );
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('parent update')
    }
}
// 渲染组件
render(<Parent></Parent>, app)