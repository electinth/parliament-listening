import React from 'react'

// @todo #2 implement control box (name search & filter)
const ControlBox = ({namePlaceholder, onNameSearch}) => {
  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      onNameSearch(event.target.value)
    }
  }
  return <div style={{border: "1px dotted"}}>
    <span>
        <input type="checkbox"/> ซ่อนประธานสภา
    </span>
    <span style={{float: "right"}}>
      <input type="text" 
      defaultValue={namePlaceholder}
      placeholder="ค้นหาจากชื่อ"
      onKeyDown={onKeyDown}
      /> <i>(กด Enter เพื่อค้นหา)</i>
    </span>
  </div>
}

export default ControlBox