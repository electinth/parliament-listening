import React, { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareRight } from '@fortawesome/free-regular-svg-icons'

import appendQuery from 'append-query'

import Avatar from "./avatar"
import TimeLabel from './time-label';
import ControlBox from './control-box';

import { DESKTOP_MIN_WIDTH, media } from "../shared/style"

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

const short_months = ["", "ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
const thai_date = (str) => {
  const dmy = str.split("-"); // NOTE the date string must be "dd-mm-yyyy"
  return `${+dmy[0]} ${short_months[+dmy[1]]} ${+dmy[2] + 543}`;
}

const DayList = ({data}) => {
    const [nameFilter, setNameFilter] = useState("")
    const [chairmanFilter, setChairmanFilter] = useState(false)
    const [events, setEvents] = useState([])

    useEffect(() => {
      const rx = new RegExp(nameFilter)
      const filteredEvents = data.events.filter(e => {
        if(chairmanFilter){
          return e.name.match(rx)
        } else{
          return e.name.match(rx) && !e.is_chairman
        }
      })

      setEvents(filteredEvents)
    }, [nameFilter, chairmanFilter])

    return <div style={{marginTop: "10px"}}>
        <h2 style={{margin: 0, textAlign: "center"}}>
          ไทม์ไลน์การประชุมสภาฯ วันที่ {thai_date(data.name.trim())}
        </h2>
        <ControlBox
          namePlaceholder={nameFilter}
          defaultChairmanFilter={chairmanFilter}
          onNameSearch={(n) => setNameFilter(n)}
          onSelectedChairmanChange={(v) => setChairmanFilter(v)}
        />
        <div style={{
          margin: "10px 0",
          textAlign: "center",
          width: "100%",
        }}>⏤ เริ่มต้นการประชุม ⏤</div>
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
                            description={e.eventDescription}
                            isGovTeam={e.team === `ฝ่ายรัฐบาล` || e.category === `cabinet` || e.category === `senate`}
                            eventType={e.type}
                            duration={e.duration}
                            isChairman={e.is_chairman}
                            videoUrl={appendQuery(data.videos[e.video_ix], {t: e.start_second})}
                        />
                    </li>
                })
            }
        </ul>
        <div style={{
          margin: "10px 0",
          textAlign: "center",
          width: "100%",
        }}>⏤ ปิดประชุม ⏤</div>
    </div>
}

export default DayList