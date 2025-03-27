import './App.css'
import { useState } from 'react'

function App() {
  const [name, setName] = useState("");

  return (
    <>
    <div>
      <input type="text" name={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' />
      <p>Your Name is : {name}</p>
    </div>
    </>
  )
}

export default App
