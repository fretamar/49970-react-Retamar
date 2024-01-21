import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Titulo from '../../curso-react/src/Clase1/Titulo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
        <Titulo />
      </div>
    </>
)}

export default App
