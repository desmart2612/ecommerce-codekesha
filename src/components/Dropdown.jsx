import React from 'react'

function Dropdown({ options, first }) {
  return (
    <select className="dropdownSelect form-select">
      <optgroup label={first}></optgroup>
      {options[0].options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  )
}

export default Dropdown
