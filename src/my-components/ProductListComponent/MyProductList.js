import React from "react"
import "./MyProductList.css"

export default class MyProductList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [
                { "pId": "7001", "name": "薩爾達傳說", "price": "1750", "inventory": "22" },
                { "pId": "7002", "name": "草泥馬足球", "price": "980" , "inventory": "120" },
                { "pId": "7003", "name": "馬力歐派對", "price": "1200", "inventory": "77" },
            ],
            inputObj: {
                "pId": "",
                "name": "",
                "price": 0,
                "inventory": 0,
            },
        }

    }

    componentDidMount() {
        // alert(`MyProductList - componentDidMount`);
    }

    componentDidUpdate(prevProps, prevState) {
        //alert(`MyProductList - componentDidUpdate`);
        console.log(`MyProductList - componentDidUpdate`);
    }

    doDelete = (_pId) => {
        // alert(`doDelete - ${_pId}`);
        if (window.confirm(`確定刪除商品編號：${_pId}嗎？`) == false) {
            return;
        }

        let productsAfterRemoved = this.state.products.filter(prodVO => {
            return _pId != prodVO.pId;
        });
        console.log("productsAfterRemoved >>>", productsAfterRemoved);
        this.setState({
            products: productsAfterRemoved
        })
    }

    doInsert = () => {
        alert(`doInsert`);
        console.log(`doInsert 時, this.state.inputObj is:`, this.state.inputObj);

        // 模擬新增
        this.setState({
            products: [...this.state.products/*既有的解構*/, this.state.inputObj /*塞入要新增的資料*/]
        })
    }

    handleChange = (event) => {
        let key = event.target.name;
        // console.log("handleChange >>> event.target.value is: ", event.target.value);

        // console.log("...this.state.products.map(vo => vo.pId) = " , ...this.state.products.map(vo => vo.pId));
        let maxProdId = Math.max(...this.state.products.map(vo => vo.pId))
        console.log("maxProdId = ", maxProdId);

        switch (key) {
            case "name":
                this.setState({
                    inputObj: {
                        "pId": maxProdId + 1,
                        "name": event.target.value,
                        "price": this.state.inputObj.price,
                        "inventory": this.state.inputObj.inventory
                    }
                });
                break;
            case "price":
                this.setState({
                    inputObj: {
                        "pId": maxProdId + 1,
                        "name": this.state.inputObj.name,
                        "price": event.target.value,
                        "inventory": this.state.inputObj.inventory
                    }
                });
                break;
            case "inventory":
                this.setState({
                    inputObj: {
                        "pId": maxProdId + 1,
                        "name": this.state.inputObj.name,
                        "price": this.state.inputObj.price,
                        "inventory": event.target.value
                    }
                });
                break;
        }
    }

    render() {
        return (
            <div>
                <textarea value={ JSON.stringify(this.state) } cols="70" rows="5" readOnly></textarea>
                <h1>我是MyProductList</h1>

                <input type="text" placeholder="輸入商品名稱" name="name" onChange={this.handleChange} /> <br />
                <input type="text" placeholder="輸入商品售價" name="price" onChange={this.handleChange} /> <br />
                <input type="text" placeholder="輸入商品庫存" name="inventory" onChange={this.handleChange} /> <br />
                <button type="button"
                    className="btn btn-outline-primary my-margin"
                    style={{ width: "8cm" }}
                    onClick={() => this.doInsert()}>新增</button>

                <table className="table table-hover table-grid">
                    <thead>
                        <tr className="table-success">
                            <th scope="col">#</th>
                            <th scope="col">商品編號</th>
                            <th scope="col">商品名稱</th>
                            <th scope="col">售價</th>
                            <th scope="col">庫存</th>
                            <th scope="col">操作</th>
                        </tr>
                    </thead>
                    <tbody className="table-light">
                        {
                            this.state.products.map((prodVO, index) => {
                                return (
                                    <tr key={prodVO.pId}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{prodVO.pId}</td>
                                        <td>{prodVO.name}</td>
                                        <td>{prodVO.price} NT</td>
                                        <td>{prodVO.inventory}</td>
                                        <td>
                                            <button type="button"
                                                className="btn btn-outline-danger"
                                                style={{ borderRadius: "7px" }}
                                                onClick={() => this.doDelete(prodVO.pId)}>刪除</button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>

            </div>
        );
    }
}