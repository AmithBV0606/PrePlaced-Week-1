import React, { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')

  // To track the number of times a component has been rendered
  // const [render, setRender] = useState(0);

  // useEffect(() => {
  //   setRender(prevState => prevState + 1)
  // })

  // We cannot use this method to keep the track of render count, because when the state is updated the component is re-rendered

  // Using the above approach we'll be struck in an infinite loop, that's why useref hook is used

  const renderCount = useRef(1)

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    // renderCount.current won't cause the component to re-render!!
  })

  const inputRef = useRef()

  const focus = () => {
    inputRef.current.focus()
    inputRef.current.value = "Some value" // don't use this!! It should be done using the state
  }

  // To have the access to the previous value
  const prevName = useRef('')

  useEffect(() => {
    prevName.current = name
  }, [name])

  return (
    <>
      <input 
        type="text" 
        value={name}
        onChange={e => setName(e.target.value)}
        ref={inputRef}
      />
      <h1>My name is {name} and it used to be {prevName.current}</h1>
      <div>I rendered {renderCount.current} times!</div>
      <button onClick={focus}>Focus</button>
    </>
  );
}

export default App