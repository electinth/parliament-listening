import React from 'react'

import placeholderImage from "../images/democracy-monument.png";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const cdn = `https://elect.thematter.co/data/politicians`

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
      <LazyLoadImage
        src={imageUrl(src)}
        placeholderSrc={placeholderImage}
        width="100%"/>
    </span>
}

export default Avatar