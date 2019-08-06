import React from 'react'

import Avatar from "./avatar"

const TopKList = ({title, list}) => {
    return <div>
        <b>{title}</b>
        <ul>
            {
                list.map(p => {
                    return <li key={p.name}>
                        <Avatar src={p.name}/> {p.name} ({p.duration} วินาที)
                    </li>
                })
            }
        </ul>
    </div>
}

export default TopKList