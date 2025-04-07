import { useState } from 'react'
function App() {
  const [color, setColor] = useState("red");

  return (
    <>
    <div className="w-full h-screen duration-150" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center botton-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white py-3 px-4 rounded-xl">
          <button className="outline-none px-3 py-2 rounded-full text-white shadow-lg hover:cursor-pointer" style={{backgroundColor:'red'}} onClick={() => setColor('red')}> Red </button>
          <button className="outline-none px-3 py-2 rounded-full text-white shadow-lg hover:cursor-pointer"  style={{backgroundColor:'green'}} onClick={() => setColor('green')}> Green </button>
          <button className="outline-none px-3 py-2 rounded-full text-white shadow-lg hover:cursor-pointer"  style={{backgroundColor:'blue'}} onClick={() => setColor('blue')}> Blue </button>
          <button className="outline-none px-3 py-2 rounded-full text-white shadow-lg hover:cursor-pointer"  style={{backgroundColor:'pink'}} onClick={() => setColor('pink')}> Pink </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
