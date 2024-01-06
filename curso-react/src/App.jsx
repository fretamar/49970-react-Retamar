import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Subtitulo from './Clase1/Subtitulo'
import Titulo from './Clase1/Titulo'
import Subtitulo2 from './Clase1/Subtitulo2'
import BarritasMuecas from './Clase1/barritasMuecas'
import PanDulceDonLorenzo from './Clase1/panDulceDonLorenzo'
import PanDulceValido from './Clase1/panDulceValido'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div>
        <Titulo />
        <Subtitulo /> 
        <Subtitulo2 />
        <BarritasMuecas />
        <PanDulceDonLorenzo />
        <PanDulceValido />
      </div>
    </>
)}

export default App
