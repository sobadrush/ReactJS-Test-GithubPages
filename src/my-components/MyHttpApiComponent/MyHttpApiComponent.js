import React, { Component } from 'react';

class MyHttpApiComponent extends Component {
    constructor(props) {
        super(props);
        console.log("MyHttpApiComponent props >>> ", props);
        // ------------------------------------------------------
        this.bookList = [];
        // ------------------------------------------------------
        this.doFetchBookData = this.doFetchBookData.bind(this); // 自訂function綁定至自己
        this.generateTableRow = this.generateTableRow.bind(this); // 自訂function綁定至自己
    }

    // 自訂函式
    doFetchBookData() {
        let bookApiUrl = `http://localhost:3001/books`;
        fetch(bookApiUrl, { method: "GET" })
            .then(res => res.json())
            .then(cbData => {
                console.log("cbData >>>", cbData);
                this.setState({ bookList: cbData });
            })
            .catch(e => {
                /*發生錯誤時要做的事情*/
                console.error(e);
            })
    }

    generateTableRow = () => {
        let bookList = this.state?.bookList;
        console.log("bookList?.length >>> " , bookList?.length);

        let rows = [];
        // bookList?.map( x => 
        //     rows.push(<tr><td>{ x.id }</td><td>{ x.title }</td><td>{ x.author }</td></tr>)
        // )
        
        for (let i = 0; i < bookList?.length; i++) {
            rows.push(
                <tr key={i}>
                    <td>{ bookList[i].id }</td>
                    <td>{ bookList[i].title }</td>
                    <td>{ bookList[i].author }</td>
                </tr>
            );
        }
        return rows;
    }

    clearTable = () => {
        alert("========= clearTable =========");
        this.setState({ bookList: undefined });
    }

    render = () => {
        return (
            <div style={{ border: "3px solid white" }}>
                <h2>MyHttpApiComponent</h2>
                <button type="button" className="btn btn-danger my-margin" onClick={this.doFetchBookData}>點我查db.json的資料</button>
                <button type="button" className="btn btn-outline-secondary" onClick={this.clearTable}>清空TABLE</button>
                <table className="table table-hover" style={ {color: 'orange'} }>
                    <tbody>
                        {console.log("@@", this.state?.bookList)}
                        {   
                            // 可如此用map render (ref. https://stackoverflow.com/questions/25646502/how-can-i-render-repeating-react-elements)
                            this.state?.bookList?.map((perData, i) => 
                                <tr key={i}>
                                    <td>{perData.id}</td>
                                    <td>{perData.title}</td>
                                    <td>{perData.author}</td>
                                </tr>
                            )
                        }

                        {/* 也可如此 */}
                        {/* { this.generateTableRow() } */}
                    </tbody>
                </table>

            </div>
        );
    }
}

export default MyHttpApiComponent;