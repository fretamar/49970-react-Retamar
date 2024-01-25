import './App.css'
import Head from './Componentes/Head'
import ItemListContainer from './Componentes/ItemListContainer'
import ProductosPrueba from './Componentes/ProductosPrueba'
import Footer from './Componentes/footer'
import Fetch from './Componentes/Fetch'
import Item from './Componentes/Item'

function App() {

  return (
    <>
     <div>
        <Head />
        <div style={{paddingBottom:"20px"}}></div>
        <ItemListContainer greeting={"Bienvenidx!❣ 💥Hoy tenemos productos en oferta💥"} />
        <Fetch />
        <Footer />
      </div>
    </>
)}

export default App
