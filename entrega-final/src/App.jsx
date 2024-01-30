import './App.css'
import Head from './Componentes/Head'
import MensajeInicio from './Componentes/MensajeInicio'
import Footer from './Componentes/footer'
import ItemListContainer from './Componentes/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contacto from './Componentes/Contacto'
import Error from './Componentes/Error'
import ItemDetailContainer from './Componentes/ItemDetailContainer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Head />
        <div style={{ paddingBottom: "20px" }}></div>
        <MensajeInicio greeting={"Bienvenidx!❣ 💥Hoy tenemos productos en oferta💥 ¡MÁXIMO 20 UNIDADES POR PRODUCTO!"} />
        <Routes>
        <Route path={"/"} element={<ItemListContainer />} />  
          <Route path={"/ItemListContainer"} element={<ItemListContainer />} />  
          <Route path={"/categoria/:categoria"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/Contacto"} element={<Contacto/>}/>
          <Route path={"*"} element={<Error />}/>
         
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
