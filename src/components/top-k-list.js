import React from 'react'

import Avatar from "./avatar"
import TimeLabel from "./time-label"

import config from "../config"

const TopKList = ({title, list}) => {
    return <div>
        <b>{title}</b>
        <ul style={{listStyle: "none", padding: "0px", margin: "0px"}}>
            {
                list.map(p => {
                    return <li key={p.name}>
                        <div style={{float: "left", marginRight: "5px"}}>
                            <a href={config.theyWorkForUs.peoplePath + p.name.trim().replace(" ", "-")} target="_blank">
                                <Avatar src={p.name}/>
                            </a>
                        </div>
                        <div>
                            <a href={config.theyWorkForUs.peoplePath + p.name.trim().replace(" ", "-")} target="_blank">
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