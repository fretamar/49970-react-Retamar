import './App.css'
import Head from './Clase1/Head'
import ItemListContainer from './Clase1/ItemListContainer'
import Footer from './Clase1/footer'
import Productos from './Clase1/productos'

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
