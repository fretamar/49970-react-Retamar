import { useEffect, useState } from "react"
import Catalogo from "./Catalogo.json"
import ItemCount from "./ItemCount"

const Fetch = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        setProductos(Catalogo)
    })
    return (
        <div className="container">
            {productos.map(produ => (
                <div key={produ.id} style={{ paddingBottom: "5px" }}>
                    <div  className="card" style={{ borderColor: "blue", backgroundColor: "#E7D4F5", width: "70%" }}>
                        <div className="row text-center">
                            <div className="col-md-4 text-end">
                                <img src={produ.foto} alt={produ.tipo} />
                            </div>
                            <div className="col-md-10 py-2 text-start">
                                <h3>{produ.tipo} {produ.marca} {produ.formato}</h3>
                                <h5 style={{ color: "red", fontStyle: "bold" }}>$ {produ.precio} c/u</h5>
                                <ItemCount />
                            </div>
                        </div>
                    </div></div>))
            }

        </div >
    )
}
export default Fetch;