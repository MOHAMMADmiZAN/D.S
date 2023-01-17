import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Button} from "@d.s/react/dist";




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Button onClick={()=>alert('this button for test ')} title={`click me btn`} >Click</Button>
    </div>
  )
}

export default App
