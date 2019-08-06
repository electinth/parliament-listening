import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

const durationToText = (duration) => {
  const totalMinutes = Math.ceil(duration / 60)
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  const hourStr = hours > 0 ? `${hours} ชั่วโมง` : ``
  const minStr = minutes > 0 ? `${minutes} นาที` : ``

  return [hourStr, minStr].join(` `)
}

const TimeLabel = ({duration}) => {
  return <span>
    <FontAwesomeIcon icon={faClock}/>
    {` `}
    {durationToText(duration)}
  </span>
}

export default TimeLabel