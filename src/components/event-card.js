import React, { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareRight, faClosedCaptioning as faRegularCaptioning }
  from '@fortawesome/free-regular-svg-icons'

import { faClosedCaptioning as faSolidCaptioning }
  from '@fortawesome/free-solid-svg-icons'

import Avatar from "./avatar"
import TimeLabel from './time-label';

const EventCard = ({
      name, description, isGovTeam, eventType,
      duration, videoUrl, isChairman, transcript, is_manual_transcript
    }) => {

    const [captionToggle, setCaptionToggle] = useState(false)

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
                <b>{name}</b>
                <span style={{marginLeft: "10px"}}>
                  <span style={{ cursor: "pointer" }}>
                    <FontAwesomeIcon icon={
                      captionToggle ? faSolidCaptioning : faRegularCaptioning
                    } onClick={() => setCaptionToggle(!captionToggle) }/>
                  </span>
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
                </span>
                <br/>
                {!isChairman && description}
            </div>
          </div>
          <div style={{clear: "both"}}></div>
          { captionToggle && <div style={{marginLeft: "15px"}}>
            <div style={{
              fontSize: "0.8em",
              textAlign: "center",
              width: "100%",
            }}>
              (ถอดโดยโปรแกรมอัตโนมัติ)
            </div>
            <div style={{margin: "10px auto", whiteSpace: "pre-line"}}>
              {transcript}
            </div>
          </div>
          }
      </div>
    </div>
}

export default EventCard