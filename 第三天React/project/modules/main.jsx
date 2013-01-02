// 引入react
import React from 'react';
// 引入渲染库
import { render } from 'react-dom';
// 引入应用程序
import App from './app';

// 渲染
render(<App page="start"></App>, document.getElementById('app'))
{/*render(<App></App>, document.getElementById('app'))*/}