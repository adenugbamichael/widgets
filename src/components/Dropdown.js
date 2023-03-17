import React, { useState, useEffect, useRef } from "react"

const Dropdown = ({ country, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return
      }
      setOpen(false)
    }

    document.body.addEventListener("click", onBodyClick)
    return () => {
      document.body.removeEventListener("click", onBodyClick)
    }
  }, [])

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
    <div ref={ref} className='ui form'>
      <div className='field'>
        <label htmlFor='' className='label'>
          {country}
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
