import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, getQuestions] = useState(0)
  
  useEffect(() => {
    const fetchData = async () => {
      const answers = await fetch()
      const answersJson = results.json()
    }
  }, [])

  return (
    <>
      <form style={{display:"flex", flexDirection:"column"}}>
      <label>Add your question here </label>
      <input id='question'></input>
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
      </form>
    </>
  )
}

export default App
