import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <form style={{display:"flex", flexDirection:"column"}}></form>
      <label>Add your question here </label>
      <input></input>
      <label>Add your answers here </label>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
      <input></input>
      <button>Submit</button>
    </>
  )
}

export default App
