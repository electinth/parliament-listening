import React from 'react'

const width=50

const Avatar = ({src="https://i.pravatar.cc/300"}) => {
    return <img src={src} style={{
        borderRadius: width, width: width, verticalAlign: "middle"
    }}/>
}

export default Avatar