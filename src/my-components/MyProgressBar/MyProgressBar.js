import React from 'react';
import './MyProgressBar.css'

function Progress() {
  const barWidth = "50%";
  return (
    <div style={{border: '3px solid white'}}>
      <h2>我是MyProgressBar</h2>
      <div className="progress-back my-margin" style={{ backgroundColor: "rgba(0,0,0,0.2)", width: "200px", height: "7px", borderRadius: "10px" }}>
        <div className="progress-bar" style={{ backgroundColor: "#fe5196", width: barWidth, height: "100%", borderRadius: "10px" }}></div>
      </div>
    </div>
  );
}

export default Progress;
