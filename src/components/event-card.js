import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareRight } from '@fortawesome/free-regular-svg-icons'

import Avatar from "./avatar"
import TimeLabel from './time-label';

const EventCard = ({
      name, description, isGovTeam, eventType,
      duration, videoUrl, isChairman
    }) => {
    const color = isChairman ? "white": "black"
    const background = isChairman ? "black": "white"
    return <div style={{
      width: "100%",
      border: "2px solid black",
      borderTopRightRadius: "5px",
      borderBottomRightRadius: "5px",
      color: color,
      background: background,
    }}>
      <div style={{padding: "5px", position: "relative"}}>
          <div style={{
            float: "left",
            width: isChairman ? `0`: `10px`,
            height: "100%",
            background: isGovTeam ? `#0E64B9` : `#E1161F`,
            position: "absolute",
            top: 0,
            left: 0
           }}></div>
          <div style={{float: "right", fontWeight: "bold"}}>
              {eventType} <TimeLabel duration={duration}/>
          </div>
          <div style={{float: "left", marginLeft: "15px"}}>
            <div style={{float: "left", marginRight: "10px"}}>
              <Avatar src={name} width={isChairman ? 40 : undefined}/>
            </div>
            <div style={{float: "left", fontSize: "1.2rem"}}>
                <b>{name}
                  <a href={videoUrl} target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        marginLeft: "5px",
                        color: color,
                        textDecoration: "none",
                    }}
                  >
                    <FontAwesomeIcon icon={faCaretSquareRight}/>
                  </a>
                </b><br/>
                {!isChairman && description}
            </div>
          </div>
          <div style={{clear: "both"}}></div>
      </div>
    </div>
}

export default EventCard