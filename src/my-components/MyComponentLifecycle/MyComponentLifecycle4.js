import React from 'react';
import { Component } from 'react';

import './MyComponentLifecycle4.css';

export default class MyComponentLifecycle4 extends Component {

    constructor(props) {
        super(props);
        // ---------------------------------------------------
        this.timer1 = null;
        // ---------------------------------------------------
        this.doRotate = this.doRotate.bind(this);
        this.inputChangedHandler = this.inputChangedHandler.bind(this);
        this.doRotadoRotateRangeBarte = this.doRotateRangeBar.bind(this);
        // ---------------------------------------------------
        this.state = {
            rotateAng: 0,
        }
    }

    /**
     * 生命週期
     * constructor() -> static getDerivedStateFromProps() -> render() -> 渲染DOM -> componentDidMount()
     * 
     * 假使一定要用jQuery操作DOM，大部份的人也是建議在componentDidMount中使用比較好，其中之一的原因也是因為這點
     */
    componentDidMount() {
        console.log(" >>> MyComponentLifecycle4 componentDidMount <<< ");
    }

    // 最常被用來移除 componentDidMount 中「只想要隨著元件新增的一切東西」
    componentWillUnmount() {
        console.log(" >>> MyComponentLifecycle4 componentWillUnmount <<< ");
    }

    /**
     * 和componentDidMount一樣，這個函數被強烈建議把「更新後想做的事情」放在這裡，
     * 包括先前提過的fetch等。因為這個函數是唯一也是最後在DOM真的被更新後執行的週期函數
     */
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(" >>> MyComponentLifecycle4 componentDidUpdate <<< ");
        console.log(" >>> MyComponentLifecycle4 componentDidUpdate prevProps <<< ", prevProps);
        console.log(" >>> MyComponentLifecycle4 componentDidUpdate prevState <<< ", prevState);
        console.log(" >>> MyComponentLifecycle4 componentDidUpdate snapshot <<< ", snapshot);
        // ------------------------------------------------------------------------------------------
        
    }

    /**
     * 這個函數的功用像是守門員，用來做確認是不是真的要update。這個函數要return一個布林值。
     * 當函數回傳false時，元件就不會更新，也不會繼續執行接下來的render()以及剩下的update生命週期函數。預設會回傳true。
     */
    shouldComponentUpdate(nextProps, nextState) {
        console.log(" >>> MyComponentLifecycle4 shouldComponentUpdate <<< ");
        console.log(" >>> MyComponentLifecycle4 shouldComponentUpdate nextProps <<< ", nextProps);
        console.log(" >>> MyComponentLifecycle4 shouldComponentUpdate nextState <<< ", nextState);
        return true; // 不override的話預設是true
    }

    doRotate() {

        this.setState((state, props) => {
            // console.log("state >>> " , state);
            // console.log("props >>> " , props);

            let angAfterRotate = state.rotateAng + 90;
            if (angAfterRotate >= 360){
                angAfterRotate -= 360;
            }

            return {
                rotateAng: angAfterRotate
            }
        });

        console.log("this.state.rotateAng : ", this.state.rotateAng);
    }

    inputChangedHandler(e){

        if(e.target.value === ''){
            e.target.value = 0;
        }

        let angAfterRotate = parseInt(e.target.value);
        this.setState((state, props) => {
            // console.log("state >>> " , state);
            // console.log("props >>> " , props);
            
            if (angAfterRotate >= 360){
                angAfterRotate = 360;
            }

            return {
                rotateAng: angAfterRotate
            }
        });
    }

    doRotateRangeBar(e){
        let angAfterRotate = parseInt(e.target.value);
        this.setState((state, props) => {
            // console.log("state >>> " , state);
            // console.log("props >>> " , props);
            
            if (angAfterRotate >= 360){
                angAfterRotate = 360;
            }

            return {
                rotateAng: angAfterRotate
            }
        });
    }

    render() {
        return (
            <div style={{ margin: "2cm" }}>
                <h1>MyComponentLifecycle4</h1>
                <input type="text" className="shortInput"
                    value={ this.state.rotateAng }
                    onChange={ (e) => this.inputChangedHandler(e) } /> deg
                <button type="button" className="btn btn-outline-primary" onClick={ this.doRotate } style={{ marginLeft: "5px" }}>順時轉90度</button>
                <br/><br/>
                <input type="range" min="0" max="360" value={ this.state.rotateAng } step="1" onChange={ (e) => this.doRotateRangeBar(e) }/>
                <br/><br/>
                <img src={require('../../assets/img/卡通林克.png')} alt="卡通林克.png"
                    width="200" className="rotate" style={{ "--deg": this.state.rotateAng + "deg" }} ></img>
            </div>
        )
    }
}