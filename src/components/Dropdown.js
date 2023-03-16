import React, { useState } from "react"

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false)

  const renderedOptions = options.map((option) => {
    if (option.image === selected.image) {
      return null
    }
    return (
      <div
        key={option.image}
        className='item'
        onClick={() => onSelectedChange(option)}
      >
        {option.country}
      </div>
    )
  })
  return (
    <div className='ui form'>
      <div className='field'>
        <label htmlFor='' className='label'>
          Select a Color
        </label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className='dropdown icon'></i>
          <div className='text'>{selected.country}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
