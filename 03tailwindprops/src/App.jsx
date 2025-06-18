import Card from './components/Card'
import './App.css'

function App() {


  return (
    <>
      <h1 className='text-3xl bg-green-500 p-3 '>Vite with Tailwind</h1>
      <Card gamename='Elden Ring DLC'/>
      <Card />
      <Card />
    </>
  )
}

export default App
