import { useCallback, useEffect, useState ,useRef } from "react";


function App() {
  const [length, setLength] = useState(8);
  const [isNumAllowed, setIsNumAllowed] = useState(false);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  const [password, setPassword] = useState();

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz"
    if (isNumAllowed) string += "0123456789"
    if (isCharAllowed) string += "!@#$%^&*()_+-={}[]|:"
    for (let i=1 ; i<length ; i++){
      let char = Math.floor(Math.random() * string.length + 1)
      pass += string.charAt(char);
    }
    setPassword(pass);
  }, [length, isNumAllowed, isCharAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator()
  }
  ,[length,isNumAllowed,isCharAllowed,passwordGenerator])

  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,12);
    window.navigator.clipboard.writeText(password);
  }, [password])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
    <h1 className='text-white text-center my-3'>Password generator</h1>
  <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-white"
          placeholder="Password"
          readOnly
          ref={passwordRef}
          
      />
      <button
      onClick={copyPasswordToClipboard}
       className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0  hover:cursor-pointer hover:bg-blue-800'
      >copy</button>
      
  </div>
  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input 
      type="range"
      min={8}
      max={100}
      value={length}
       className='cursor-pointer'
       onChange={(e) => {setLength(e.target.value)}}
        />
        <label>Length: {length}</label>
    </div>
    <div className="flex items-center gap-x-1">
    <input
        type="checkbox"
        defaultChecked={isNumAllowed}
        id="numberInput"
        onChange={() => {
            setIsNumAllowed((prev) => !prev);
        }}
    />
    <label htmlFor="numberInput">Numbers</label>
    </div>
    <div className="flex items-center gap-x-1">
        <input
            type="checkbox"
            defaultChecked={isCharAllowed}
            id="characterInput"
            onChange={() => {
                setIsCharAllowed((prev) => !prev )
            }}
        />
        <label htmlFor="characterInput">Characters</label>
    </div>
  </div>
</div>
  )
}

export default App
