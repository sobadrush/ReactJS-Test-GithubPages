import React, { useState, useEffect } from 'react';

const MyComponentLifecycle5 = (props) => {

    //-------------------------------------------------
    const [salary, setSalary] = useState(23000);
    //-------------------------------------------------

    useEffect(() => {
        /* 下面是 componentDidMount 和  componentDidUpdate */
        checkSalary("我在componentDidMount觸發");
        /* 上面是 componentDidMount 和  componentDidUpdate */

        return () => {
            /* 下面是 componentWillUnmount */
            checkSalary("我在componentWillUnmount觸發");
            /* 上面是 componentWillUnmount */
        };

    }, [salary]); /* 加入監控的變數, i.e. 第二個參數是用來限定當哪些變數被改變時 useEffect 要觸發 */

    const checkSalary = (msg) => {
        console.log(` === ${msg} - MyComponentLifecycle5.checkSalary === `);
    }

    const doChangeSalary = (e) => {
        let salary = parseInt(e.target.value);
        salary += 100;
        setSalary(salary);
    }

    return (
        <div style={{ border: "3px solid white" }}>
            <h1>MyComponentLifecycle5</h1>
            <p>測試 useEffect</p>
            <input type="range" min="22000" max="55000" step="100" defaultValue={salary} />
        </div>
    );

}

export default MyComponentLifecycle5;