import { useState } from 'react'
import RegistartionForm from "./RegistrationForm/RegistrationForm.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='Title'>Home Work 04</h1>
    <RegistartionForm/>
    </>
  )
}

export default App
