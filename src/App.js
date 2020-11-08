import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import MyProgressBar from './my-components/MyProgressBar/MyProgressBar.js'
import MyComponent from "./my-components/MyComponent/MyComponent.js";
import MyComponentUseClass from "./my-components/MyComponentUseClass/MyComponentUseClass.js";
import MyComponentWithUseState from "./my-components/MyComponentWithUseState/MyComponentWithUseState.js";
import MyHttpApiComponent from "./my-components/MyHttpApiComponent/MyHttpApiComponent.js";
import MyComponentLifecycle from "./my-components/MyComponentLifecycle/MyComponentLifecycle.js";
import MyComponentLifecycle2 from "./my-components/MyComponentLifecycle/MyComponentLifecycle2.js";
import MyComponentLifecycle3 from "./my-components/MyComponentLifecycle/MyComponentLifecycle3.js";
import MyComponentLifecycle4 from "./my-components/MyComponentLifecycle/MyComponentLifecycle4.js";
import MyComponentLifecycle5 from "./my-components/MyComponentLifecycle/MyComponentLifecycle5.js";

import Parent from './my-components/ComponentCommunicate/Parent.js'

import Board from "./my-components/MyComponentOOXX/Board.js";

import ProgressDIY from "./my-components/ComponentProgressDIY/ProgressDIY.js"

import MyProductList from "./my-components/ProductListComponent/MyProductList"

import { Link } from "react-router-dom";

const myStyle = { color: 'orange', fontSize: '40px' }

let doLogConsole1 = (event) => {
  console.log("%c doLogConsole1: event is : %s", 'color:pink', event);
  console.log("%c doLogConsole1: event.target.value : %s", 'color:pink', event.target.value);
}
let doLogConsole2 = (event) => {
  console.log("%c doLogConsole2: event is : %s", 'color:lightgreen', event);
  console.log("%c doLogConsole2: event.target.value : %s", 'color:lightgreen', event.target.value);
}

// 「{ { } }」，外面那層括號代表裡面是javascript語法，裡面的括號表示物件型態
const myMultiButton = () => {
  let btnArr = [];
  for (let i = 0; i < 3; i++) {
    // btnArr.push(<button type="button" value={i} onClick={ doLogConsole1 }>我是第{i}個按鈕</button>);
    btnArr.push(<button type="button" key={i} value={i} onClick={(e) => { doLogConsole1(e); doLogConsole2(e); }}>我是第{i}個按鈕</button>);
  }
  return btnArr;
}

const printMessage = () => {
  document.querySelector("#show-area").value = "我被按到了！"
}

function App(props) {

  const [isEnter, setIsEnter] = useState(true);
  const [isShowComponent5, setIsShowComponent5] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <h2 style={myStyle}>Hello World!</h2>

        {/* 用{}包裹, 才會是int、boolean型態 */}
        <MyProgressBar />

        <br />
        {myMultiButton()}
        <img src={logo} className="App-logo" alt="logo" />

        <MyComponent myName="父元件往子元件傳的值" myNumber={87} getData={true} handleClick={printMessage} />

        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >Learn React</a>

        <input type="text" id="show-area" style={{ border: '5px solid orange', height: '1cm', margin: '1cm', width: '15cm' }} placeholder="測試綁定函式 - 子元件click後, 父元件異動"></input>

        <hr style={{ height: '1px', borderTop: '2px solid red', width: '100%' }} />

        <MyComponent>
          在「元件標籤」中設定的children文字
        </MyComponent>

        <hr style={{ height: '1px', borderTop: '2px solid red', width: '100%' }} />
        <MyComponentUseClass myName={'父元件往子元件傳的值'} />

        <hr style={{ height: '1px', borderTop: '2px solid red', width: '100%' }} />
        <MyComponentWithUseState myName={'父元件往子元件傳的值'} />

        <hr style={{ height: '1px', borderTop: '2px solid red', width: '100%' }} />
        <MyHttpApiComponent />

        <hr style={{ height: '1px', borderTop: '2px solid red', width: '100%' }} />
        <MyComponentLifecycle myName="大雄" />
        <MyComponentLifecycle myName="靜香" />

        <hr style={{ height: '1px', borderTop: '2px solid red', width: '100%' }} />
        <MyComponentLifecycle2 />

        <hr style={{ height: '1px', borderTop: '2px solid red', width: '100%' }} />

        <div style={{ margin: '2cm' }}>
          <button type="button" onClick={(e) => { setIsEnter(!isEnter) }}>
            {(isEnter === true) ? "我又進來啦(MyComponentLifecycle3)" : "我又出去啦(MyComponentLifecycle3)"}
          </button>
          {isEnter === true ? <MyComponentLifecycle3 /> : null}
        </div>

        <hr style={{ height: '1px', borderTop: '2px solid red', width: '100%' }} />
        <MyComponentLifecycle4/>

        <hr style={{ height: '1px', borderTop: '2px solid red', width: '100%' }} />

        <button type="button" className="btn btn-outline-info my-margin" 
          onClick={(e) => { setIsShowComponent5(!isShowComponent5) }}>
            顯示Component5
        </button>
        { isShowComponent5 == true ? <MyComponentLifecycle5/> : '' }
        
        <hr style={{ height: '1px', borderTop: '2px solid red', width: '100%' }} />
        <Board/>

        <hr style={{ height: '1px', borderTop: '2px solid red', width: '100%' }} />
        <Parent/>

        <hr style={{ height: '1px', borderTop: '2px solid red', width: '100%' }} />
        <ProgressDIY/>

        <hr style={{ height: '1px', borderTop: '2px solid red', width: '100%' }} />
        <MyProductList/>

        <hr style={{ height: '1px', borderTop: '2px solid red', width: '100%' }} />
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/userInfo">userInfo</Link></li>
        </ul>
        {props.children}

      </header>
    </div>
  );
}

export default App;
