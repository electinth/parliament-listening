import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'


// @todo #2 implement control box (name search & filter)
const ControlBox = ({namePlaceholder, onNameSearch}) => {
  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      onNameSearch(event.target.value)
    }
  }
  return <div style={{display: "table", fontWeight: "bold", width: "100%"}}>
    <span style={{display: "table-cell", verticalAlign: "middle"}}>
        <input type="checkbox"/> ประธานสภา
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