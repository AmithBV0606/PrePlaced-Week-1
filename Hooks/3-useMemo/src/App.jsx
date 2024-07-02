import { useState, useMemo, useEffect } from 'react'
import './App.css'

function slowFunction(num) {
  console.log('Calling Slow Function')
  for(let i = 0; i <= 1000000000; i++){}
  return num * 2
}

// Problem Statement : 

// function App() {
//   const [number, setNumber] = useState(0)
//   const [dark, setDark] = useState(false)

//   const themeStyle = {
//     backgroundColor: dark ? 'black' : 'white',
//     color: dark ? 'white' : 'black'
//   }

//   const doubleNumber = slowFunction(number)

//   return (
//     <>
//       <input 
//       type="number" 
//       value={number}
//       onChange={(e) => setNumber(parseInt(e.target.value))}
//       />

//       <button
//       onClick={() => setDark(prevState => !prevState)}
//       >
//         Change Theme
//       </button>

//       <div style={themeStyle}>{doubleNumber}</div>
//     </>
//   );
// }

// Solution : 
function App() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  // const themeStyle = {
  //   backgroundColor: dark ? 'black' : 'white',
  //   color: dark ? 'white' : 'black'
  // }

  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])

  // useEffect(() => {
  //   console.log("Theme changed!!")
  // }, [themeStyle])

  // After every render, the new themeStyle is not equal to the old themeStyle, that's why the useEffect is being triggered on every re-render even after changing the input number.

  // Solution : Memoize the themeStyle as well

  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark])

  useEffect(() => {
    console.log("Theme changed!!")
  }, [themeStyle])

  return (
    <>
      <input 
      type="number" 
      value={number}
      onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <button
      onClick={() => setDark(prevState => !prevState)}
      >
        Change Theme
      </button>

      <div style={themeStyle}>{doubleNumber}</div>
    </>
  );
}

export default App