import React, { useState } from "react"
import Accordion from "./components/Accordion"
import Search from "./components/Search"
import Dropdown from "./components/Dropdown"
import Translate from "./components/Translate"
import { items, options } from "./store"
import Route from "./components/Route"

const showAccordion = (accordion) => {
  if (window.location.pathname === "/") {
    return <Accordion items={items} />
  }
}

const showList = () => {
  if (window.location.pathname === "/list") {
    return <Search />
  }
}

const showDropdown = () => {
  if (window.location.pathname === "/dropdown") {
    return <Dropdown />
  }
}

const showTranslate = () => {
  if (window.location.pathname === "/translate") {
    return <Translate />
  }
}

// const showComponents = (route, component) => {
//   return window.location.pathname === route ? component : null
// }

function App() {
  const [selected, setSelected] = useState(options[0])
  // const [showDropdown, setShowDropdown] = useState(true)

  return (
    <div>
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/list'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <Dropdown
          country='Select a country'
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  )
}

export default App
