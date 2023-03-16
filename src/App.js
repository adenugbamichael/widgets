import React, { useState } from "react"
import Accordion from "./components/Accordion"
import Search from "./components/Search"
import Dropdown from "./components/Dropdown"
import { items, options } from "./store"

function App() {
  const [selected, setSelected] = useState(options[0])
  const [showDropdown, setShowDropdown] = useState(true)

  return (
    <div>
      {/* <Accordion items={items} />{" "} */}
      {/* <Search /> */}
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null}
    </div>
  )
}

export default App
