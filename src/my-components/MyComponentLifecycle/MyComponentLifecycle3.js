import React from 'react';
import { Component } from 'react';

import lifecycleImg from '../../assets/img/ReactJS-生命週期2.png';

export default class MyComponentLifecycle3 extends Component {

    constructor(props) {
        super(props);
        // ---------------------------------------------------
        this.timer1 = null;
        // ---------------------------------------------------
        this.getNowDateTime = this.getNowDateTime.bind(this);
        this.doEnlarge = this.doEnlarge.bind(this);
        this.doShrinkage = this.doShrinkage.bind(this);
        // ---------------------------------------------------
        this.state = {
            nowDateTime: undefined,
            scalePercent: 60
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
            this.setState({ nowDateTime: date + ' ' + time });
        }, 1000);
    }

    doEnlarge() {
        this.setState({
            nowDateTime: this.state.nowDateTime,
            scalePercent: this.state.scalePercent * 1.3
        });
    }

    doShrinkage(){
        this.setState({
            nowDateTime: this.state.nowDateTime,
            scalePercent: this.state.scalePercent / 1.3
        });
    }

    render() {
        return (
            <div>
                <img src={lifecycleImg} alt="lifecycleImg.png" width={this.state.scalePercent + '%'} 
                    onMouseEnter={this.doEnlarge} onMouseLeave={this.doShrinkage}></img>
                <h1>我是MyComponentLifecycle3</h1>
                <p>componentWillUnmount - 最常被用來移除 componentDidMount 中「只想要隨著元件新增的一切東西」</p>
                <h2>{this.state.nowDateTime}</h2>
            </div>
        )
    }
}