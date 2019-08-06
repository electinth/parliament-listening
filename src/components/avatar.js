import React from 'react'

const Avatar = ({src, width=60}) => {
    return <img src={`https://i.pravatar.cc/300?ss=${src}`} style={{
        borderRadius: width, width: width, verticalAlign: "middle"
    }}/>
}

export default Avatar