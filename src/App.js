import React, { useState } from "react"
import Accordion from "./components/Accordion"
import Search from "./components/Search"
import Dropdown from "./components/Dropdown"
import { items, options } from "./store"

function App() {
  const [selected, setSelected] = useState(options[0])

  return (
    <div>
      {/* <Accordion items={items} />{" "} */}
      {/* <Search /> */}
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  )
}

export default App
