import React from 'react';
import { Component } from 'react';

import myTitle from '../../assets/img/componentDidMount.png';
import myDetail001 from '../../assets/img/componentDidMount001.png';
import myDetail002 from '../../assets/img/componentDidMount002.png';

export default class MyComponentLifecycle2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isServerResponsed: false, // 初始值 - Server尚未回應
            bookList: undefined
        }

        // 綁定自訂function
        this.doFetchData = this.doFetchData.bind(this);
        this.doDelay = this.doDelay.bind(this);
    }

    /**
     * 生命週期
     * constructor() -> static getDerivedStateFromProps() -> render() -> 渲染DOM -> componentDidMount()
     * 
     * 假使一定要用jQuery操作DOM，大部份的人也是建議在componentDidMount中使用比較好，其中之一的原因也是因為這點
     */
    componentDidMount() {
        console.log(" >>> MyComponentLifecycle2 componentDidMount <<< ")

        setTimeout(() => {
            document.querySelector("#msg").style.color = "LightCoral";
            document.querySelector("#msg").innerHTML = "我是改變後的MSG";
        }, 1500);


        // this.doFetchData();
        this.doDelay(this.doFetchData, 2000);
    }

    // 自訂函式
    doDelay(func, secs) {
        setTimeout(func, secs);
    }

    // 自訂函式
    doFetchData = () => {
        console.log(" >>> MyComponentLifecycle2 doFetchData <<<");
        let bookApiUrl = `http://localhost:3001/books`;
        fetch(bookApiUrl, { method: "GET" })
            .then(res => res.json())
            .then(cbData => {
                console.log("MyComponentLifecycle2 cbData >>>", cbData);
                this.setState({
                    isServerResponsed: true,
                    bookList: cbData
                });
            })
            .catch(e => {
                /*發生錯誤時要做的事情*/
                console.error(e);
            });
    }

    render() {

        return (
            <div>
                <h1>我是MyComponentLifecycle2</h1>
                <img src={myTitle} alt="componentDidMount.png"></img>
                <br /><br />
                <img src={myDetail001} alt="componentDidMount001.png"></img>
                <br /><br />
                <img src={myDetail002} alt="componentDidMount002.png"></img>
                <h5 id="msg" style={{ color: "lightgreen", margin: "2cm" }}>我是初始MAG</h5>

                {/* ------------------------------------ */}

                <table className="table table-hover table-striped" style={{ marginBottom: '2cm' }}>
                    <thead>
                        <tr style={{ backgroundColor: 'lightblue' }}>
                            <th>id</th>
                            <th>title</th>
                            <th>author</th>
                        </tr>
                    </thead>
                    <tbody style={{ backgroundColor: 'lightgray' }}>
                        {/* Inline If 與 && 邏輯運算子 */}
                        {/* ref. https://zh-hant.reactjs.org/docs/conditional-rendering.html */}

                        {
                            this.state.isServerResponsed === false &&
                            <tr><td colSpan="3">...Data is Loading...</td></tr>
                        }

                        {
                            this.state.isServerResponsed === true &&
                            // 可如此用map render (ref. https://stackoverflow.com/questions/25646502/how-can-i-render-repeating-react-elements)
                            this.state.bookList?.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.author}</td>
                                    </tr>
                                )
                            })

                        }
                    </tbody>
                </table>

            </div>
        )

    }
}