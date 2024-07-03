import React, { useState } from "react"
import Dropdown from "./components/Dropdown"
import InputField from "./components/InputField"
import { InputContextProvider } from "./context/InputContext"
import Body from "./components/Body"

function App() {
  const [name, setName] = useState("Jhon doe")
  const [companyName, setCompanyName] = useState("Google")
  const [effectiveDate, setEffectiveDate] = useState(null)
  const [lastDate, setLastDate] = useState(null)

  console.log(name)

  return (
    <InputContextProvider value={{name, companyName, effectiveDate, lastDate}}>
      <div className="container mx-auto my-10 flex-col items-center justify-center space-y-8 w-full h-screen">

        <div className="flex items-center justify-center">
          <Dropdown />
        </div>

        <div className="flex justify-between">
          <InputField 
            label="Name" 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <InputField 
            label="Company Name" 
            type="text" 
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <InputField 
            label="Effective date" 
            type="date" 
            onChange={(e) => setEffectiveDate(e.target.value)}
          />

          <InputField 
            label="Last date" 
            type="date" 
            onChange={(e) => setLastDate(e.target.value)}
          />
        </div>

        <hr className="h-[2px] bg-slate-300" />

        <Body />
        
        <hr className="h-[2px] bg-slate-300" />

      </div>
    </InputContextProvider>
  )
}

export default App