import React from 'react';
import logo from './logo.svg';
import './App.css';

const myStyle = {color : 'orange', fontSize: '40px'}

let doLogConsole1 = ( event ) => {
  console.log("%c doLogConsole1: event is : %s", 'color:pink', event);
  console.log("%c doLogConsole1: event.target.value : %s", 'color:pink', event.target.value);
}
let doLogConsole2 = ( event ) => {
  console.log("%c doLogConsole2: event is : %s", 'color:lightgreen', event);
  console.log("%c doLogConsole2: event.target.value : %s", 'color:lightgreen', event.target.value);
}

// 「{ { } }」，外面那層括號代表裡面是javascript語法，裡面的括號表示物件型態
const myMultiButton = () => {
  let btnArr = [];
  for (let i = 0; i < 3; i++) {
    // btnArr.push(<button type="button" value={i} onClick={ doLogConsole1 }>我是第{i}個按鈕</button>);
    btnArr.push(<button type="button" value={i} onClick={ (e) => { doLogConsole1(e); doLogConsole2(e); } }>我是第{i}個按鈕</button>);
  }
  return btnArr;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 style={myStyle}>Hello World!</h2>
        { myMultiButton() }
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
