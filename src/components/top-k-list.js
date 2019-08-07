import React from 'react'

import Avatar from "./avatar"
import TimeLabel from "./time-label"

const TopKList = ({title, list}) => {
    return <div>
        <b>{title}</b>
        <ul style={{listStyle: "none", padding: "0px", margin: "0px"}}>
            {
                list.map(p => {
                    return <li key={p.name}>
                        <div style={{float: "left", marginRight: "5px"}}>
                            <Avatar src={p.name}/>
                        </div>
                        <div>
                            <b>{p.name}</b> <br/>
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