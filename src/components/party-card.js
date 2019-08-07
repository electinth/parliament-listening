import React from 'react'

import TimeLabel from "./time-label"

const partyLogoURL = (name) => {
  return `https://elect.in.th/candidates/statics/party-logos/${name}.png`
}

const PartyCard = ({
    title="Talkative Party",
    partyName="Party ABC",
    duration="100"
  }) => {
  return <div style={{marginBottom: "20px"}}>
    <div style={{fontWeight: "bold", marginBottom: "10px"}}>{title}</div>
    <span style={{float: "left"}}>
      <img style={{
          width: "70px",
          borderRadius: "70px",
          marginRight: "10px",
          marginBottom: "0px",
        }}
        src={partyLogoURL(partyName)}
      />
    </span>
    <span>
      <div style={{fontWeight: "bold", fontSize: "1.5rem"}}>{partyName}</div>
      <TimeLabel duration={duration}/>
    </span>
    <div style={{clear: "both"}}></div>
  </div>
}

export default PartyCard