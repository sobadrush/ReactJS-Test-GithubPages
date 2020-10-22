import React from 'react';
import "./MyComponent.css"

function MyComponent(props) {
  return (
    <div style={{border: '3px solid white'}}>
       <h2>我是MyComponent</h2>

       {console.log("元件中的 props is : ", props)}

       <h1 style={{color: 'yellow'}}>{ props.myName }</h1> 

    <button type="button" className="btn btn-danger my-margin" onClick={ props.handleClick }>
      測試綁定函式（<span style={{color: "lightgreen"}}>{ props.children }</span>）
    </button>
    </div>
  );
}

export default MyComponent;
