import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter == 20){
      setCounter(counter = 20)
    }
    else {
      
      setCounter(counter + 1);
      
    }
     console.log(counter);
    
    
  }

  const removeValue = () => {
    if(counter == 0){
      setCounter(counter = 0);
    }
    else {
      counter = counter - 1;
      setCounter(counter);
    }
    console.log(counter);
    
  }

  return (
   <>
   <h2>Counter: {counter} </h2>
  <button onClick={addValue}>addValue {counter}</button><br />
   <button onClick={removeValue}>removeValue {counter} </button>
   </>
  )
}

export default App
