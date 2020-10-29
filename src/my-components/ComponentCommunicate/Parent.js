import React from 'react';
import Child from './Child';

import lianyu from "../../assets/img/煉獄大哥.png";

export default class Parent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            "empName": "Roger",
            "empAge": 31,
            "empSalary": 52000,
            "isShowPic" : false
        }
    }

    handleChildEmitData = (dataFromChild) => {
        console.log("dataFromChild", dataFromChild);
        this.setState({
            "empName": this.state.empName,
            "empAge": this.state.empAge,
            "empSalary": this.state.empSalary,
            "isShowPic" : dataFromChild.isShowPic
        });
    }

    render() {
        return (
            <div className={'my-margin'}>
                <h1>我是Parent</h1>

                { this.state.isShowPic == true ? <img src={lianyu} alt="煉獄大哥.png" style={{ width: "5cm" }} /> : "" }
                

                <Child empData={ this.state } emitToParent={ this.handleChildEmitData } />

            </div>
        );
    }

}
