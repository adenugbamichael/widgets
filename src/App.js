import React from "react"
import Accordion from "./components/Accordion"
import Search from "./components/Search"
import Dropdown from "./components/Dropdown"
import { items, options } from "./store"

function App() {
  return (
    <div>
      {/* <Accordion items={items} />{" "} */}
      {/* <Search /> */}
      <Dropdown options={options} />
    </div>
  )
}

export default App
