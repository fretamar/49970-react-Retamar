import './App.css'
import Head from './Componentes/Head'
import ItemListContainer from './Componentes/ItemListContainer'
import Footer from './Componentes/footer'
import Productos from './Componentes/productos'

function App() {

  return (
    <>
     <div>
        <Head />
        <div style={{paddingBottom:"20px"}}></div>
        <ItemListContainer greeting={"Bienvenidx!❣ 💥Hoy tenemos productos en oferta💥"} />
        <Productos />
        <Footer />
      </div>
    </>
)}

export default App
