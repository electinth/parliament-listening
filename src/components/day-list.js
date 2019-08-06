import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareRight } from '@fortawesome/free-regular-svg-icons'

import appendQuery from 'append-query'

import Avatar from "./avatar"
import TimeLabel from './time-label';


const EventCard = ({
      name, description, eventType,
      duration, videoUrl, isChairman
    }) => {
    const color = isChairman ? "white": "black"
    const background = isChairman ? "black": "white"
    return <div style={{
      width: "100%",
      border: "2px solid",
      borderTopRightRadius: "5px",
      borderBottomRightRadius: "5px",
      color: color,
      background: background,
    }}>
      <div style={{padding: "5px", position: "relative"}}>
          <div style={{
            float: "left",
            width: "10px",
            height: "100%",
            background: eventType === `อภิปราย` ? `#0E64B9` : `#E1161F`,
            position: "absolute",
            top: 0,
            left: 0
           }}></div>
          <div style={{float: "left", marginLeft: "15px", marginRight: "10px"}}>
            <Avatar src={name} width={isChairman ? 40 : undefined}/>
          </div>
          <div style={{float: "left", fontSize: "1.2rem"}}>
              <b>{name}
                <a href={videoUrl} target="_blank"
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
          <div style={{float: "right", fontWeight: "bold"}}>
              {eventType} <TimeLabel duration={duration}/>
          </div>
          <div style={{clear: "both"}}></div>
      </div>
    </div>
}

const DayList = ({data, nameFilter=""}) => {
    const rx = new RegExp(nameFilter)
    const events = data.events.filter(e => {
        return e.name.match(rx)
    })
    return <div style={{marginTop: "10px"}}>
        {
            // @todo #2 use proper format for date i.e. 25 ก.ค. 2562
        }
        <h2>ไทม์ไลน์การประชุมสภาฯ วันที่ {data.name.trim()}</h2>
        <ul style={{listStyle: "none", margin: "0px"}}>
            {
                events.map( (e, i) => {
                    return <li key={`${e.name}-${i}`}
                            style={{
                                marginLeft: e.type === `ประท้วง` ? `10%`: 0
                            }}
                        >
                        <EventCard
                            name={e.name}
                            description={`some paty`}
                            eventType={e.type}
                            duration={e.duration}
                            isChairman={e.is_chairman}
                            videoUrl={appendQuery(data.videos[e.video_ix], {t: e.start_second})}
                        />
                    </li>
                })
            }
        </ul>
    </div>
}

export default DayList