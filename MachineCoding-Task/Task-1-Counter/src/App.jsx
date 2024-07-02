import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState(1)

  const decrement = () => {
    setCount(prevState => prevState - input)
  }

  const increment = () => {
    setCount(prevState => prevState + input)
  }

  const handleChange = (e) => {
    setInput(parseInt(e.target.value))
  }

  return (
    <>
      <div className='h-screen w-full flex items-center justify-center'>

        <div className='bg-blue-100 p-10 rounded-xl flex flex-col items-center justify-center gap-4'>
            <span className='font-bold text-2xl'>{count}</span>

            <div className='space-x-2'>
              <button 
                className='bg-blue-400 py-1 px-3 rounded-lg'
                onClick={decrement}
              >
                -
              </button>
              <button 
                className='bg-blue-400 py-1 px-3 rounded-lg'
                onClick={increment}
              >
                +
              </button>
            </div>

            <div>
              <label htmlFor="">Increment/Decrement by:</label>
              <input 
                type="number" 
                defaultValue={1}
                onChange={handleChange}
              />
            </div>

            <button 
              className='bg-blue-400 py-1 px-3 rounded-lg' 
              onClick={() => setCount(0)}
            >
              Reset
            </button>
        </div>

      </div>
    </>
  )
}

export default App