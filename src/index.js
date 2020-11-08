import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { HashRouter, Route, Switch } from "react-router-dom";

import About from './my-components/MyRouterTestComponent/About'
import UserInfo from './my-components/MyRouterTestComponent/UserInfo'

// ReactDOM.render(
//   <React.StrictMode>
//     <App/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  (
    <HashRouter>
      <Route path="/" component={App}></Route>
      <Route path="/about" component={About} />
      <Route path="/userInfo" component={UserInfo} />
      {/* <Route path="userInfo/:userId" component={UserInfo}/> */}
    </HashRouter>
  ),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
