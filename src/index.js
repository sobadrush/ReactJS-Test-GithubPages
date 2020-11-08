import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter, HashRouter, Route } from 'react-router-dom'


/**
 * 原本長這樣
 */
// ReactDOM.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

/**
 * 因為RouterView中使用 withRouter 時，報錯 You should not use <Route> or withRouter() outside a <Router>
 * ref. https://blog.csdn.net/Jane_96/article/details/84754823?utm_medium=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-BlogCommendFromMachineLearnPai2-1.channel_param
 */
ReactDOM.render(
  (
    <HashRouter>
      <Route path="/" component={App}></Route>
    </HashRouter>
  ),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
