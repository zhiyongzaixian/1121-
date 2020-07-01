import React from 'react';
import ReactDOM from 'react-dom';

import {HashRouter, BrowserRouter} from 'react-router-dom';
import App from './App';

// render: 1) 编译组件虚拟DOM对象Wie真实DOM对象， 2) 将编译后的真实DOM对象片段插入指定的容器中
ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'));

