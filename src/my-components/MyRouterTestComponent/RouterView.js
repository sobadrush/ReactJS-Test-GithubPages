import React from 'react';

import './RouterView.css'

import About from './About'
import UserInfo from './UserInfo'
import NoMatch from './NoMatch'

// 路由
// import { HashRouter, Route, Switch, Link } from "react-router-dom";
import { BrowserRouter, HashRouter, Route, Link, Switch, Redirect, NavLink, withRouter } from 'react-router-dom';

//export default class RouterView extends React.Component {
class RouterView extends React.Component {

    constructor(props) {
        super(props);
    }

    /**
     * 產生亂數，不足四位左側補0
     */
    generateRandomNumber = () => {
        return (Math.floor(Math.random() * 10000) + 1).toString().padStart(4, 0);
    }

    doNavigateToPage = () => {
        alert(` === dokNavigateToPage 編程式導頁 === `);
        this.props.history.push("/userInfo/7788");
    }

    render() {

        let randNum = this.generateRandomNumber();

        return (
            <HashRouter>
                <div style={{ marginBottom: "3cm" }}>
                    <ul>
                        <li>
                            {/* <Link to="/about/">路由：About元件</Link> */}
                            <NavLink to="/about/" activeClassName="selected">路由：About元件</NavLink>
                        </li>
                        <li>
                            {/* <Link to="/GG919">路由重定向：將 /GG919，Redirect 到 /about</Link> */}
                            <NavLink to="/GG919/" activeClassName="selected">路由重定向：將 /GG919，Redirect 到 /about</NavLink>
                        </li>
                        <li>
                            {/* <Link to="/userInfo/">路由：UserInfo元件</Link> */}
                            <NavLink to="/userInfo/" activeClassName="selected">路由：UserInfo元件</NavLink>
                        </li>
                        <li>
                            {/* <Link to="/userInfo/5566">路由：UserInfo元件(UserId: 5566)</Link> */}
                            <NavLink to="/userInfo/5566" activeClassName="selected">路由：UserInfo元件(UserId: 5566)</NavLink>
                        </li>
                        <li>
                            {/* <Link to={"/userInfo/" + randNum}>路由：UserInfo元件(UserId亂數: {randNum})</Link> */}
                            <NavLink to={`/userInfo/${randNum}`} activeStyle={{ color: "red" }}>路由：UserInfo元件(UserId亂數: {randNum})</NavLink>
                        </li>
                        <li>
                            <button type="button" className="btn btn-outline-info" onClick={(e) => this.doNavigateToPage(e)}>編程式跳頁：UserInfo元件(UserId亂數: {randNum})</button>
                        </li>
                    </ul>

                    {/* ※ 改完路由要進行重起才會生效 */}
                    {/* 不使用<Switch>包裹的情况下，每一个被location匹配到的<Route>将都会被渲染 */}
                    <Switch>
                        <Route path="/about" component={About} />
                        <Route path="/userInfo" component={UserInfo} exact={true} />{/* exact: 是否精準匹配, 若此處不加exact, 則帶參數的URL會被此路由攔截到, 便無法取得參數 */}
                        <Route path="/userInfo/:userId" component={UserInfo} />

                        {/* Redirect: 路由重定向：將 /GG919，Redirect 到 /about */}
                        <Redirect from='/GG919' to='/about' />
                        {/* 萬用路由 */}
                        <Route component={NoMatch} />
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}

export default withRouter(RouterView);