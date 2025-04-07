import { useState } from 'react'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <>
    <button onClick={() => setIsVisible(!isVisible)}> {isVisible ? "Hide" : "Show" } Text</button>
    {isVisible && <p>Hello, This lines show text Visibility.</p>}
    </>
  )
}

export default App
