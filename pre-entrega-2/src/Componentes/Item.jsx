import { useEffect, useState } from "react"
import Catalogo from "./Catalogo.json"
import { useParams } from "react-router"
import "../App.css"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"

const Item = ({ item }) => {
    const [productos, setProductos] = useState([])
    const { categoria } = useParams()

    useEffect((item) => {
        const Promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(categoria ? Catalogo.filter(item => item.categoria === categoria) : Catalogo)
            }, 1000)
        })
        Promesa.then(data => {
            setProductos(data)
        })

    }, [categoria])

    return (
        <div className="lista-productos">
            {productos.map(produ => (
                <div key={produ.id} style={{ paddingBottom: "5px" }}>
                    <div className="tarjeta-producto" style={{ borderColor: "blue", backgroundColor: "#E7D4F5" }}>
                    <Link to={"/item/" + produ.id} >
                        <div className="row text-center">
                                <div>
                                    <img src={produ.foto} alt={produ.tipo} />
                                </div>
                                <div>
                                    <h3 className="titulo-producto" style={{color:"black"}}>{produ.tipo} {produ.marca} {produ.formato}</h3>
                                    <h5 style={{ color: "red", fontStyle: "bold" }}>$ {produ.precio} c/u</h5>
                                </div>
                            <ItemCount stock={19} />
                        </div>
                        </Link>
                    </div>
                </div>
            ))
            }

        </div >
    )
}

export default Item