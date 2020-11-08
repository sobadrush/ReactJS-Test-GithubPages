import React from 'react';

import { Prompt } from 'react-router-dom';

export default class UserInfo extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("UserInfo.componentDidMount() => this.props.match >>>", this.props.match);
  }

  render(){
    return (
      <div>
        {/* when為true時表示阻止默認的跳轉行為 */}
        <Prompt when={true} message='確認離開此頁面 FUCK？(使用 Prompt )'/>

        <h1>我是UserInfo元件</h1><span>傳入的路由參數: { JSON.stringify(this.props.match) }</span>
      </div>
    );
  }

}
