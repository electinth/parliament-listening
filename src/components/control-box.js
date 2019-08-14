import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { DESKTOP_MIN_WIDTH, media } from "../shared/style"

const ControlBox = ({
      namePlaceholder,
      onNameSearch,
      defaultChairmanFilter,
      onSelectedChairmanChange,
    }) => {
  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      onNameSearch(event.target.value)
    }
  }

  const [selectedChairman, setSelectedChairman] = useState(defaultChairmanFilter)

  return <div style={{
      display: "table",
      fontWeight: "bold",
      width: "100%",
      margin: "20px 0px"
    }}>
    <span css={{
        display: "block",
        [media(DESKTOP_MIN_WIDTH)]: {
          display: "table-cell",
          verticalAlign: "middle",
        }
      }}
      >
        <input type="checkbox"
          style={{marginRight: "5px"}}
          checked={selectedChairman}
          onChange={() => {
            const newValue = !selectedChairman
            setSelectedChairman(newValue)
            onSelectedChairmanChange(newValue)
          }}/>ประธานสภา
    </span>
    <span css={{
        float: "none",
        display: "block",
        width: "100%",
        textAlign: "center",
        [media(DESKTOP_MIN_WIDTH)]: {
          float: "right",
          display: "table-cell",
          width: "auto",
          textAlign: "right"
        }
      }}>
      <i style={{
          fontWeight: "normal",
          marginRight: "10px",
        }}>
          (กด Enter เพื่อค้นหา)
      </i>
      <span css={{
          position: "relative",
          padding: "5px 10px",
          border: "2px solid",
          borderRadius: "5px",
          display: "block",
          textAlign: "left",
          [media(DESKTOP_MIN_WIDTH)]: {
            display: "inline-block",
            width: "auto",
          }
        }}>
        <input type="text" 
        defaultValue={namePlaceholder}
        placeholder="ค้นหาจากชื่อ"
        onKeyDown={onKeyDown}
        css={{
          border: "0px",
          width: "100%",
        }}
        /> 
        <span css={{position: "absolute", top: "5px", right: "10px"}}>
          <FontAwesomeIcon icon={faSearch}/>
        </span>
      </span>
    </span>
  </div>
}

export default ControlBox