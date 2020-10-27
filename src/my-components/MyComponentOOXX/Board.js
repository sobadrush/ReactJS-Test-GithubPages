import React from 'react';

import './MyComponentOOXX.css';

class Square extends React.Component {

    constructor(props){
        super(props);
        // ---------------------------------------
        let squareIndex = props.passFromParentVal;
        // ---------------------------------------
        this.state = {
            icon: "",
            squareIndex: squareIndex
        }
        // ---------------------------------------
        this.doClick = this.doClick.bind(this);
    }

    doClick = () => {
        // alert( this.props.passFromParentVal );
        console.log("從父層送來的資料：this.props.iconToChange >>> ", this.props.iconToChange);
        this.setState({ icon: this.props.iconToChange });
        this.props.handleClickFromParent(this.state.squareIndex/*往parentComponent送的參數*/);
    }

    render(){
        return (
            <div className="square" 
                 onClick={ this.doClick } 
                //  onClick={ (e) => this.props.handleClickFromParent("30678"/*往parentComponent送的參數*/) } 
                 style={{ textAlign: "center", color: "red", display: "flex", alignItems: "center", justifyContent: "center" }}>
                 {/* { this.props.passFromParentVal } */}
                 { this.state.icon }
            </div>
        );
    }
}

export default class Board extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            currentPlayer: "O", 
            nextPlayer: "X",
            squareStatus : Array(9).fill("")
        }
        // ---------------------------------
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick = (_valFromChild) => {
        console.log("從子層送來的資料：clickHandeler _valFromChild", _valFromChild);

        let squareIndexFromChild = _valFromChild;
        this.state.squareStatus[squareIndexFromChild] = this.state.currentPlayer; // O 或 x

        this.setState({
            currentPlayer : this.state.currentPlayer === 'O' ? 'X' : 'O',
            squareStatus: this.state.squareStatus
        });

        console.log("%c After handleClick , this state is :", 'color:red', this.state);
    }

    render(){
        let edgeLength = 9;
        return (
            <div style={{ marginBottom: "3cm"}}> 
                <h2>OOXX遊戲</h2>
                <p>官網教學: https://zh-hant.reactjs.org/tutorial/tutorial.html</p>
                <h3>Now player: { this.state.currentPlayer }</h3>
                <h3>Next player: { this.state.currentPlayer === 'O' ? 'X' : 'O' }</h3>
                <br></br>
                <div className="board-row" style={{display: "table", margin: "0 auto", height: `${edgeLength}cm`, width: `${edgeLength}cm` }}>
                    <Square passFromParentVal="0" iconToChange={ this.state.currentPlayer } handleClickFromParent={ (valFromChild) => { this.handleClick(valFromChild) } }/>
                    <Square passFromParentVal="1" iconToChange={ this.state.currentPlayer } handleClickFromParent={ (valFromChild) => { this.handleClick(valFromChild) } }/>
                    <Square passFromParentVal="2" iconToChange={ this.state.currentPlayer } handleClickFromParent={ (valFromChild) => { this.handleClick(valFromChild) } }/>
                    <br/>
                    <Square passFromParentVal="3" iconToChange={ this.state.currentPlayer } handleClickFromParent={ (valFromChild) => { this.handleClick(valFromChild) } }/>
                    <Square passFromParentVal="4" iconToChange={ this.state.currentPlayer } handleClickFromParent={ (valFromChild) => { this.handleClick(valFromChild) } }/>
                    <Square passFromParentVal="5" iconToChange={ this.state.currentPlayer } handleClickFromParent={ (valFromChild) => { this.handleClick(valFromChild) } }/>
                    <br/>
                    <Square passFromParentVal="6" iconToChange={ this.state.currentPlayer } handleClickFromParent={ (valFromChild) => { this.handleClick(valFromChild) } }/>
                    <Square passFromParentVal="7" iconToChange={ this.state.currentPlayer } handleClickFromParent={ (valFromChild) => { this.handleClick(valFromChild) } }/>
                    <Square passFromParentVal="8" iconToChange={ this.state.currentPlayer } handleClickFromParent={ (valFromChild) => { this.handleClick(valFromChild) } }/>
                </div>
            </div>
        );
    }
}