import React from 'react'

import { DESKTOP_MIN_WIDTH, media } from "../shared/style"

const StatBox = ({children}) => {
  return <div css={{
      width: "100%",
      [media(DESKTOP_MIN_WIDTH)]: {
        width: "45%",
        margin: "0 2.5%",
        float: "left",
      }
    }}>
    {children}
  </div>
}

export default StatBox