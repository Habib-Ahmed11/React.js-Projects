import './App.css'
import Card from './Components/Card'
function App() {

  return (
    <>
    <h1 className='bg-green-500 p-4 text-2xl mb-5'>Tailwind CSS Test</h1>
    <Card name="Ape Card" price="200" />
    <Card name="Cat Card" price="150" />
    
    </>
  )
}

export default App
