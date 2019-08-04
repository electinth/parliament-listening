import React from 'react'

const width=50

const Avatar = ({src}) => {
    return <img src={`https://i.pravatar.cc/300?ss=${src}`} style={{
        borderRadius: width, width: width, verticalAlign: "middle"
    }}/>
}

export default Avatar