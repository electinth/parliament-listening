import React from 'react'

const A = ({href, color="black", children}) => {
  return <a style={{textDecoration: "none", color: color}} href={href}>
    {children}
  </a>
}


export default A