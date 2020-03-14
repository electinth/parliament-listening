import React from 'react'

import Avatar from "./avatar"
import TimeLabel from "./time-label"

import theyWorkForUs from "../they-work-for-us"

const TopKList = ({title, list}) => {
    return <div>
        <b>{title}</b>
        <ul style={{listStyle: "none", padding: "0px", margin: "0px"}}>
            {
                list.map(p => {
                    return <li key={p.name}>
                        <div style={{float: "left", marginRight: "5px"}}>
                            <a href={theyWorkForUs.peopleUrl(p.name)} target="_blank" rel="noopener noreferrer">
                                <Avatar src={p.name}/>
                            </a>
                        </div>
                        <div>
                            <a href={theyWorkForUs.peopleUrl(p.name)} target="_blank" rel="noopener noreferrer">
                                <b>{p.name}</b>
                            </a><br/>
                            {`${p.party} `}
                            <TimeLabel duration={p.duration}/>
                        </div>
                        <div style={{clear: "both"}}></div>
                    </li>
                })
            }
        </ul>
    </div>
}

export default TopKList