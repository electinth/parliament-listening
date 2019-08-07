import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const ControlBox = ({
      namePlaceholder,
      onNameSearch,
      onSelectedChairmanChange,
    }) => {
  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      onNameSearch(event.target.value)
    }
  }

  const [selectedChairman, setSelectedChairman] = useState(true)

  return <div style={{
      display: "table",
      fontWeight: "bold",
      width: "100%",
      margin: "20px 0px"
    }}>
    <span style={{display: "table-cell", verticalAlign: "middle"}}>
        <input type="checkbox"
          style={{marginRight: "5px"}}
          checked={selectedChairman}
          onChange={() => {
            const newValue = !selectedChairman
            setSelectedChairman(newValue)
            onSelectedChairmanChange(newValue)
          }}/>ประธานสภา
    </span>
    <span style={{float: "right", display: "table-cell"}}>
      <i style={{
          fontWeight: "normal",
          marginRight: "10px",
        }}>
          (กด Enter เพื่อค้นหา)
      </i>
      <span style={{
          display: "inline-block",
          padding: "5px 10px",
          border: "2px solid",
          borderRadius: "5px",
        }}>
        <input type="text" 
        defaultValue={namePlaceholder}
        placeholder="ค้นหาจากชื่อ"
        onKeyDown={onKeyDown}
        style={{border: "0px"}}
        /> 
        <span>
          <FontAwesomeIcon icon={faSearch}/>
        </span>
      </span>
    </span>
  </div>
}

export default ControlBox