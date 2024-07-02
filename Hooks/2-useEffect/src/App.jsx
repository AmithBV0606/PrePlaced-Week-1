import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // const [resourceType, setResourceType] = useState('post')
  // const [info, setInfo] = useState([])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //     .then(response => response.json())
  //     .then(json => setInfo(json))
  // }, [resourceType])

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      {/* <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('Users')}>Users</button>
        <button onClick={() => setResourceType('Comments')}>Comments</button>
      </div>

      <h1>{resourceType}</h1>

      {info && info.map((item) => {
        return(
          <p>
            {JSON.stringify(item)}
          </p>
        );
      })} */}

      <div>{windowWidth}</div>
    </>
  )
}

export default App