import React from 'react';
import emitter from '../../utils/events';

export default class ChildA extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            "isShowPic" : !props.empData.isShowPic,
            "msgObjFromChildB": undefined
        }
    }

    componentDidMount() {
        // 元件裝載完成以後宣告一個自定義事件
        this.eventEmitter = emitter.addListener('changeMessageFromChildB', (messageObj) => {
            alert(messageObj.message);
            console.log("ChildA收到的 messageObj is:", messageObj);

            this.setState({
                "isShowPic" : this.state.isShowPic,
                "msgObjFromChildB": messageObj
            });

        });
    }

    componentWillUnmount() {
        emitter.removeListener(this.eventEmitter);
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
            <div className={ 'my-margin' } style={ { border: "3px solid pink" } }>
                <h1>我是ChildA</h1>
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
                        <tr className="table-info">
                            <td>ChildB 向 ChildA傳遞資料(使用 EventEmitter)</td>
                            <td>
                                { JSON.stringify(this.state.msgObjFromChildB) }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
    
}
