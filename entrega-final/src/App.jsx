import './App.css'
import Head from './componentes/Head'
import MensajeInicio from './componentes/MensajeInicio'
import Footer from './componentes/footer'
import ItemListContainer from './componentes/ItemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contacto from './componentes/Contacto'
import Error from './componentes/Error'
import ItemDetailContainer from './componentes/ItemDetailContainer'
import Cart from './componentes/Cart'
import CartContextProvider from './componentes/context/CartContext'

function App() {

  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <Head />
          <div style={{ paddingBottom: "20px" }}></div>
          <MensajeInicio greeting={"Bienvenidx!❣ 💥Hoy tenemos productos en oferta💥 ¡MÁXIMO 20 UNIDADES POR PRODUCTO!"} />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/ItemListContainer"} element={<ItemListContainer />} />
            <Route path={"/categoria/:categoria"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/Contacto"} element={<Contacto />} />
            <Route path={"*"} element={<Error />} />
            <Route path={"/cart"} element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App
