import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import DOMAIN from './assets/endpoint'


function App() {

  const [responseMessage, setResponseMessage] = useState("NOTHING")
  async function handleSumbit(e) {
    e.preventDefault()
    const res = await axios.post(`${DOMAIN}/api/todos`)
    console.log(res)
    setResponseMessage(res)

  }

  return (
    <div className='flex flex-col min-h-screen'>
      <h1>Chess Club</h1>
      <div>
        <form onSubmit={handleSumbit}>
          <input type="text" />
          <button>Submit</button>
        </form>
      </div>
      {responseMessage.data}
    </div>
  )
}

export default App
