import React from 'react';
import { Component } from 'react';

export default class MyComponentLifecycle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isMale: true,
            isShowPic: false
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps.props >>>", props);
        console.log("getDerivedStateFromProps.state >>>", state);
        if (props.myName === "靜香") {
            return { isMale: false, isShowPic: false };
        } else {
            return { isMale: true, isShowPic: true };
        }
    }

    render() {

        let result = null;
        if (this.state.isMale === true) {
            result = <h3 style={{ color: "red" }}>{this.props.myName} is : 男生</h3>;
        } else {
            result = <h3 style={{ color: "orange" }}>{this.props.myName} is : 女生</h3>;
        }

        let isShowPic = this.state.isShowPic;

        return (
            <div style={{ border: '3px solid white' }}>
                <h1>我是MyComponentLifecycle</h1>

                <img src={isShowPic === true ? require('../../assets/img/getDerivedStateFromProps.png') : ''} alt="getDerivedStateFromProps.png"></img>

                {/* {console.log(123)} */}
                { result}

            </div>
        )
    }
}