// 引入react
import React, { Component,PureComponent } from 'react';
import { render } from 'react-dom';

// 父组件
class Child extends PureComponent{
    render() {
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
    componentDidMount() {
        console.log('mount',this.props.name)
    }
    componentDidUpdate() {
        console.log('update',this.props.name)
    }
    componentWillUnmount() {
        console.log('unmount',this.props.name)
    }
 
}
class App extends Component{
    constructor(props){
        super(props);
        this.state={
                list: ['a','b','c']
        }
    }
    render() {
        return (
            <div>
                {this.state.list.map(item => <Child  key={item}  name={item}/>)}
                <button onClick={e => {
                    this.setState({
                        list: ['b','c','d']
                    })
                }}>set</button>
            </div>
        );
    }
}
// 渲染组件
render(<App></App>, app)