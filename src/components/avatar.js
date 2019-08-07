import React from 'react'

const cdn = `http://d7q5y8ilrfexc.cloudfront.net/parliament-listening/politicians`

const imageUrl = (name) => {
    return `${cdn}/${name.replace(/ +/g, "-")}.jpg`
}

const Avatar = ({src, width=60}) => {
    return <span style={{
      display: "inline-block",
      width: `${width}px`,
      height: `${width}px`,
      borderRadius: width,
      overflow: `hidden`
    }}>
      <img src={imageUrl(src)} style={{
        width: "100%", verticalAlign: "middle"
      }}/>
    </span>
}

export default Avatar