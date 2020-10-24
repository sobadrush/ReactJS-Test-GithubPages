import React from 'react';
import { Component } from 'react';

export default class MyComponentLifecycle3 extends Component {

    constructor(props) {
        super(props);
        // ---------------------------------------------------
        this.timer1 = null;
        // ---------------------------------------------------
        this.getNowDateTime = this.getNowDateTime.bind(this);
        // ---------------------------------------------------
        this.state = {
            nowDateTime: undefined
        }
    }

    /**
     * 生命週期
     * constructor() -> static getDerivedStateFromProps() -> render() -> 渲染DOM -> componentDidMount()
     * 
     * 假使一定要用jQuery操作DOM，大部份的人也是建議在componentDidMount中使用比較好，其中之一的原因也是因為這點
     */
    componentDidMount() {
        console.log(" >>> MyComponentLifecycle3 componentDidMount <<< ");
        this.getNowDateTime();
    }

    // 最常被用來移除 componentDidMount 中「只想要隨著元件新增的一切東西」
    componentWillUnmount() {
        console.log(" >>> MyComponentLifecycle3 componentWillUnmount <<< ");

        // 若不取消註冊
        // memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
        clearInterval(this.timer1);
    }

    getNowDateTime() {
        this.timer1 = setInterval(() => {
            let today = new Date();
            let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            this.setState( { nowDateTime: date + ' ' + time } );
        }, 1000);
    }

    render() {
        return (
            <div>
                <h1>我是MyComponentLifecycle3</h1>
                <h2>{ this.state.nowDateTime }</h2>
            </div>
        )
    }
}