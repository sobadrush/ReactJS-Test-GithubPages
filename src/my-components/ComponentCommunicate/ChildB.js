import React from 'react';
import emitter from '../../utils/events';

export default class ChildB extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            "message": ""
        }
    }

    changeSiblingChildA = (e, _msg) => {
        alert(`ChildB changeSiblingChildA, emit事件給 ChildA 的 EventListener : ${_msg}`);
        console.log("changeSiblingChildA e is : ", e);
        let msgObj = { "message": _msg, "other-info": "哈哈哈" }
        emitter.emit('changeMessageFromChildB'/*ChildA中ComponentDidMound訂閱的事件*/, msgObj);
    }

    render() {
        return (
            <div className={'my-margin'} style={{ border: "3px solid lightgreen" }}>
                <h1>我是ChildB</h1>
                <pre style={ {color: "white"} }>
                    { JSON.stringify( this.state.message  ) }
                </pre>
                <input type="text" placeholder="發送給ChildA的訊息" onKeyUp={ (e) => this.setState({ "message": e.target.value }) }/>
                <button type="button" className="btn btn-outline-info my-margin" onClick={ (e) => this.changeSiblingChildA(e, this.state.message) }>使用Events向ChildA傳資料</button>
            </div>
        );
    }

}
