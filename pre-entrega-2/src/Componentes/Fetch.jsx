import { useEffect, useState } from "react"
import Catalogo from "./Catalogo.json"
import ItemCount from "./ItemCount"
import "../App.css"

const Fetch = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        const Promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(Catalogo)
            }, 1000)
        })
        Promesa.then(data => {
            setProductos(data)
        })

    }, [])

    return (
        <div className="lista-productos">
            {productos.map(produ => (
                <div key={produ.id} style={{ paddingBottom: "5px" }}>
                    <div className="tarjeta-producto" style={{ borderColor: "blue", backgroundColor: "#E7D4F5" }}>
                        <div className="row text-center">
                            <div>
                                <img src={produ.foto} alt={produ.tipo} />
                            </div>
                            <div>
                                <h3 className="titulo-producto">{produ.tipo} {produ.marca} {produ.formato}</h3>
                                <h5 style={{ color: "red", fontStyle: "bold" }}>$ {produ.precio} c/u</h5>
                                <ItemCount stock={19} />
                            </div>
                        </div>
                    </div></div>))
            }

        </div >
    )
}
export default Fetch;