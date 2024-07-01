import { useState } from "react"
import "./App.css"

function App() {
  const [count, setCout] = useState(0); 

  // Used when there is a complex calculation in the default state

  // const [count, setCout] = useState(() => {
    // console.log("Runs only once")
    // return 4
    // });  

    // useState with objects
    const [state, setState] = useState({ count1: 9, theme:"blue"})
    const count2 = state.count1;
    const theme = state.theme;

  function increment() {
    setCout(prevCount => prevCount + 1)
    setCout(prevCount => prevCount + 1)

    setState((prevState) => {
      // return {count1: prevState.count1 + 1}  ==> This will override the whole object and the theme key-value pair is lost, So we have to use the spread operator to retain the other key-value paairs
      return {...prevState, count1: prevState.count1 + 1}
    })
  }

  function decrement() {
    setCout(prevCount => prevCount -1)

    setState(prevState => {
      return {...prevState, theme:'red'}
    });
  }

  return (
    <>
      <button className="btn" onClick={decrement}>-</button>
      <span>{count}</span>
      <span>{count2}</span>
      <span>{theme}</span>
      <button className="btn" onClick={increment}>+</button>
    </>
  )
}

export default App