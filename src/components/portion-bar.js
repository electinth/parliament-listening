import React from 'react'
import TimeLabel from "./time-label"

const Bar = ({percentage, height="16px", color}) => {
  return <div
    style={{
      display: `inline-block`,
      width: `${percentage}%`,
      height: height,
      background: color,
    }}
  />
}

const PortionBar = ({
    leftLabel, rightLabel,
    leftDuration=70, rightDuration=30,
    leftColor="blue", rightColor="red"
  }) => {

  const total = leftDuration + rightDuration
  const leftPercentage = leftDuration / total * 100
  const rightPercentage = rightDuration / total * 100
  return <div>
    <div style={{fontWeight: "bold", textAlign: "center"}}>
      <span style={{float: "left"}}>{leftLabel}</span>
      <span>vs</span>
      <span style={{float: "right"}}>{rightLabel}</span>
      <div style={{position: "relative"}}>
        <div style={{border: "3px solid", position: "absolute", height: "22px",
          width: "100%"}}>
        </div>
        <Bar percentage={leftPercentage} color={leftColor}/>
        <Bar percentage={rightPercentage} color={rightColor}/>
      </div>
      <div>
        <span style={{float: "left"}}>
          <TimeLabel duration={leftDuration}/>
        </span>
        <span style={{float: "right"}}>
          <TimeLabel duration={rightDuration}/>
        </span>
      </div>
    </div>
  </div>
}

export default PortionBar