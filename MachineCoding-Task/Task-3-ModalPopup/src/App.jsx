import { useState } from "react"
import PopUp from "./components/PopUp"

function App() {
  const [modal, setModal] = useState(false)

  return (
    <div className="relative">
      <button 
        className="bg-green-700 m-5 p-2 border-2 border-black rounded-lg text-white absolute z-0"
        onClick={() => setModal(prevState => !prevState)}
      >
        Open Modal
      </button>

      {modal && (
        <>
          <PopUp 
            onClick={() => setModal(false)}
          />
        </>
      )}
    </div>
  )
}

export default App