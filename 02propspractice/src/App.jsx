import './App.css'
import Form from './Components/Form'

function App() {
  let clickbtn = () => { 
    console.log('button clicked');
  }
  let myObj = {
    name:'habib',
    age:'22'
  }

  return (
   <>
   <Form handlebtn={clickbtn} obj={myObj} />
   </>
  )
}

export default App
