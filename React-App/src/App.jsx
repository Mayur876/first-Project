import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id='nav'>
      <div id='navbar'>
          <h1><b>🎓Student Directory🎓</b>
          </h1>
          <hr />
      </div>


      <div id='student'>
        <h1><b>Name:</b></h1>
      </div>
    </div>
    </>
  )
}

export default App
