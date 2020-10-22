import React, { Component } from 'react';
import './MyComponentUseClass.css'

class MyComponentUseClass extends Component { // 繼承Component類別

    constructor(props) { // 加入建構子以及props參數
        super(props);
        console.log('MyComponentUseClass props >>> ', props);
        //-------------------------------------------------------------------------
        this.empName = `Roger`;
        //-------------------------------------------------------------------------
        this.changeEmpName = this.changeEmpName.bind(this); // 自訂function綁定至自己
        this.changePercent = this.changePercent.bind(this); // 自訂function綁定至自己
        //-------------------------------------------------------------------------
        this.state = { // 宣告state物件，內包含一個變數percent
            myPercent: "30%"
        }
    }

    // 自訂function
    changeEmpName() {
        alert(">>> 觸發changeEmpName (但執行完後this.empName沒變) <<<")
        this.empName = `Roger - Be Changed`;
    }

    // 自訂function
    changePercent(event) {
        console.log(" >>> changePercent <<< ");
        console.log(" >>> changePercent event.target.value <<< ", event.target.value);
        // (1)state這個變數是read-only的，我們並 不能 用 this.state.變數=值, 直接修改state，
        // 而是必須要透過React預寫好的函式setState()來更改。(註:跟使用其他函式一樣，前面要加上this)
        // (2) setState() 中「存在但沒有被寫到的state」不會被移除，不存在的state會被建立。
        // (3) 移除state: 設成undefined ex: this.setState({mounted: undefined});
        // (4) 對於state中的物件不能只修改單一屬性
        //     this.setState({ 
        //         styleData:{
        //             width: "70%",
        //             height: this.state.styleData.height // 保留height屬性
        //         } 
        //     });
        // (ref.) https://ithelp.ithome.com.tw/articles/10219561

        // this.setState({ myPercent: `${event.target.value}%` });
        this.setState({ myPercent: `${event.target.value}%` }, () => {
            console.log(`測試setState第2個參數, 當state被設定完之後，就會執行。我們可以利用這個參數來作想在state改變後的事情`);
        });
    }

    // HTML部分
    render() {
        return (
            <div style={{ border: '3px solid white', margin: '1cm' }}>
                <h2>MyComponentUseClass</h2>
                <h3>使用ES6 class建立的component</h3>
                <button type="button" onClick={this.changeEmpName}>click ({ this.empName })</button>

                <br />
                <p>Default range slider:</p>


                輸入%數: <input type="text" style={{ width: '20%' }} defaultValue={ this.state.myPercent } onKeyUp={ this.changePercent }></input>

                <br />
                我是進度條
                <div className="progress-back" style={{ margin: '10px auto', backgroundColor: "rgba(255,255,255,0.2)", width: "70%", height: "15px", borderRadius: "5px" }}>
                    <div className="progress-bar" style={{ backgroundColor: "RGB(0, 255, 0)", width: this.state.myPercent, height: "15px", borderRadius: "5px" }}></div>
                </div>
            </div>
        );
    }
}
export default MyComponentUseClass;