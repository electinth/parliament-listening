import React, { useState, useEffect } from 'react'

import { stateFromQueryParam, StringParam, BooleanParam }
  from '../components/utils'

import appendQuery from 'append-query'

import EventCard from "./event-card"
import ControlBox from './control-box';

import moment from "moment";
import 'moment/locale/th';

const thai_date = (str) => {
  const dmy = moment(str, "DD-MM-YYYY").locale('th').add(543, 'years').format("DD MMM YYYY");
  return dmy;
}

const DayList = ({data}) => {
    const [query, setQuery] = stateFromQueryParam('q', StringParam)
    const [chairmanFilter, setChairmanFilter] = stateFromQueryParam(
      'chariman',
      BooleanParam
    )

    const [events, setEvents] = useState([])

    useEffect(() => {
      const rx = new RegExp(query)
      const filteredEvents = data.events.filter(e => {
        if(chairmanFilter){
          return e.name.match(rx)
        } else{
          return e.name.match(rx) && !e.is_chairman
        }
      })

      setEvents(filteredEvents)
    }, [query, chairmanFilter])

    return <div style={{marginTop: "10px"}}>
        <h2 style={{margin: 0, textAlign: "center"}}>
          ไทม์ไลน์การประชุมสภาฯ วันที่ {thai_date(data.name.trim())}
        </h2>
        <ControlBox
          namePlaceholder={query}
          defaultChairmanFilter={chairmanFilter}
          onNameSearch={(n) => {
            setQuery(n)
          }}
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
                            videoUrl={appendQuery(data.videos[e.video_ix] || "", {t: e.start_second})}
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