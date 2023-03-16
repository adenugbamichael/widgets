import React from "react"

const Dropdown = ({ options }) => {
  const renderedOptions = options.map((option) => {
    return (
      <div key={option.image} className='item'>
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
        <div className='ui selection dropdown active'>
          <i className='dropdown icon'></i>
          <div className='tex'>Select Color</div>
          <div className='menu visible transition'>{renderedOptions}</div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
