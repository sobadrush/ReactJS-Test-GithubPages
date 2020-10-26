import React, { useState, useEffect } from 'react';

const MyComponentLifecycle5 = (props) => {

    let timer1 = null;
    //-------------------------------------------------
    const [salary, setSalary] = useState(23000);
    const [nowDateTime, setNowDateTime] = useState(null);
    //-------------------------------------------------

    useEffect(() => {
        /* 下面是 componentDidMount 和  componentDidUpdate */
        checkSalary("我在componentDidMount觸發");
        getNowDateTime();
        /* 上面是 componentDidMount 和  componentDidUpdate */

        return () => {
            /* 下面是 componentWillUnmount */
            checkSalary("我在componentWillUnmount觸發");

            // 若不取消註冊
            // memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.
            clearInterval(timer1);
            /* 上面是 componentWillUnmount */
        };

    }, [salary /*, nowDateTime*/]); /* 加入監控的變數, i.e. 第二個參數是用來限定當哪些變數被改變時 useEffect 要觸發 */

    const checkSalary = (msg) => {
        console.log(` === ${msg} - MyComponentLifecycle5.checkSalary === `);
    }

    const doChangeSalary = (e) => {
        let salary = parseInt(e.target.value);

        if (salary === parseInt(e.target.min) || salary === parseInt(e.target.max)) {
            setSalary(salary);
            return;
        }

        salary += parseInt(e.target.step);
        setSalary(salary);
    }

    const getNowDateTime = function () {
        timer1 = setInterval(() => {
            let today = new Date();
            let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            // this.setState({ nowDateTime: date + ' ' + time });
            setNowDateTime(date + ' ' + time);
        }, 1000);
    }

    return (
        <div style={{ border: "3px solid white" }} className="my-margin">
            <h1>MyComponentLifecycle5</h1>
            <p>測試 useEffect</p>
            <p>可把第27行的salary拔掉，會發現不會觸發useState</p>
            <p>{nowDateTime}</p>
            <input type="text" style={{ width: "20%" }} value={salary} readOnly={true} /><br />
            <input type="range" min="22000" max="55000" step="100" defaultValue={salary} onChange={(e) => doChangeSalary(e)} />
        </div>
    );

}

export default MyComponentLifecycle5;