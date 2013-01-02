// 引入react
// import React from 'react';
import { createElement } from 'react';
// 引入渲染方法
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
// console.log(ReactDOM) 

// console.log(React)
// 定义虚拟DOM
var h1 = createElement('h1', { title: '专业前端培训学校' }, '爱创课堂');
// console.log(h1)
// 将虚拟DOM渲染到页面中
render(h1, document.getElementById('app'), (...args) => console.log(args))