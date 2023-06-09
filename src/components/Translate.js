import React, { useState } from "react"
import Dropdown from "./Dropdown"
import Convert from "./Convert"

const options = [
  {
    country: "Afrikaans",
    image: "af",
  },
  {
    country: "Arabic",
    image: "ar",
  },
  {
    country: "Hindi",
    image: "hi",
  },
  {
    country: "Dutch",
    image: "nl",
  },
]

const Translate = () => {
  const [language, setLanguage] = useState(options[0])
  const [text, setText] = useState("")

  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label htmlFor=''>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        country='Select a Language'
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr />
      <h3 className='ui header'>Output</h3>
      <Convert text={text} language={language} />
    </div>
  )
}

export default Translate
