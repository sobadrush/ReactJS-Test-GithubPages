import React from 'react';
import { useState } from 'react';
import "./MyComponentWithUseState.css"

function MyComponentWithUseState(props) {

  console.log('MyComponentWithUseState props.myName >>>', props.myName);

  const [empName, changeEmpName] = useState("Roger");
  const [percent, changePercent] = useState("30%");

  return (
    <div style={{ border: '3px solid white', margin: '1cm' }}>
      <h2>MyComponentWithUseState</h2>
      <h3>使用function component 搭配 useState</h3>
      <button type="button" onClick={ () => { changeEmpName('Roger - Be Changed') } }>click ({empName})</button>

      <br />
      <p>Default range slider:</p>

      輸入%數: <input type="text" style={{ width: '20%' }} onKeyUp={(e) => changePercent(e.target.value + '%')}></input>

      <br />
      我是進度條
      <div className="progress-back" style={{ margin: '10px auto', backgroundColor: "rgba(255,255,255,0.2)", width: "70%", height: "15px", borderRadius: "5px" }}>
        <div className="progress-bar" style={{ backgroundColor: "RGB(0, 255, 0)", width: percent, height: "15px", borderRadius: "5px" }}></div>
      </div>
    </div>
  );
}

export default MyComponentWithUseState;
