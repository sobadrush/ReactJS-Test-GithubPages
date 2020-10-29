import React, { Component } from 'react';

export default class Child extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            "isShowPic" : !props.empData.isShowPic
        }
    }

    componentDidMount(){
        
    }

    handlerEmitToParent = (e) => {
        // emitToParent : 父元件 透過 props 往 子元件 binding的函式
        
        this.setState({
            "isShowPic" : !this.state.isShowPic
        })

        this.props.emitToParent({
            "MSG": "我是要向Parent送的資料",
            "isShowPic" : this.state.isShowPic
        });
    }

    render(){
        return (
            <div className={ 'my-margin' }>
                <h1>我是Child</h1>
                <table className="table table-striped table-hover" border="3">
                    <tbody>
                        <tr className="table-primary">
                            <td>父元件透過props傳遞給子元件的資料</td>
                            <td>{ JSON.stringify(this.props.empData) }</td>
                        </tr>                        
                        <tr className="table-primary">
                            <td>子元件向父元件通訊</td>
                            <td>
                                <button type="button" onClick={ this.handlerEmitToParent }>向Parent傳資料</button>
                            </td>
                        </tr>                        
                    </tbody>
                </table>
            </div>
        );
    }
    
}
