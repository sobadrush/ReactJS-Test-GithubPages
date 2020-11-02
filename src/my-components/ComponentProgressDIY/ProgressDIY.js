import React from 'react';

export default class ProgressDIY extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rateVal: 30
        }
        // ---------------------
        this.timerIdIncrease = null;
        this.timerIddecrease = null;
        // ---------------------
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if ( (prevState.rateVal >= this.state.rateVal )){
            if(this.timerIdIncrease){
                clearTimeout(this.timerIdIncrease);
                // this.decreaseRate(30);
            }
        } else if(prevState.rateVal <= this.state.rateVal){
            if(this.timerIddecrease){
                clearTimeout(this.timerIddecrease);
                // this.increaseRate(90);
            }
        }
    }

    increaseRate = (_targetRate) => {
        // alert(_targetRate);
        const percent = this.state.rateVal + 1;
        if (percent > _targetRate) return;

        this.setState({ /*rateVal: _targetRate*/ rateVal: percent },
            () => {
                if (parseInt(this.state.rateVal) >= parseInt(_targetRate)) {
                    return;
                }
                this.timerIdIncrease = setTimeout(() => { this.increaseRate(_targetRate) }, 20);
            }
        );
    }

    decreaseRate = (_targetRate) => {
        // alert(_targetRate);
        const percent = this.state.rateVal - 1;

        if (percent < _targetRate) return;

        this.setState({ /*rateVal: _targetRate*/ rateVal: percent },
            () => {
                if (parseInt(this.state.rateVal) <= parseInt(_targetRate)) {
                    return;
                }
                this.timerIddecrease = setTimeout(() => { this.decreaseRate(_targetRate) }, 20);
            }
        );
    }

    render() {
        return (
            <div>
                <h1>ProgressDIY</h1>
                <input type="text" value={this.state.rateVal} readOnly/>
                <div style={{ border: '3px solid white' }}>
                    <button type="button" myrate="90" onClick={(e) => this.increaseRate(e.target.getAttribute("myrate"))}>增加比率至90</button>
                    <button type="button" myrate="30" onClick={(e) => this.decreaseRate(e.target.getAttribute("myrate"))}>減少比率至30</button>
                    <div className="progress-back my-margin" style={{ backgroundColor: "rgba(0,0,0,0.2)", width: "200px", height: "7px", borderRadius: "10px" }}>
                        <div
                            style={{
                                backgroundColor: "#fe5196",
                                width: this.state.rateVal + '%',
                                height: "100%",
                                borderRadius: "10px"
                            }}>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}