import { useContext, useEffect, useState } from "react"
import Catalogo from "../componentes/json/Catalogo.json"
import { useParams } from "react-router"
import "../App.css"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"
import Cargando from "./Cargando"
import { CartContext } from "./context/CartContext"


const Item = ({item}) => {
    const {addItem} = useContext(CartContext) 
    const [productos, setProductos] = useState([])
    const { categoria } = useParams()
    const [Visible, setVisible] = useState(true)
   
    useEffect((item) => {
        const Promesa = new Promise(resolve => {
            setTimeout(() => {
                setVisible(false)
                resolve(categoria ? Catalogo.filter(item => item.categoria === categoria) : Catalogo)
            }, 3000)
        })
        Promesa.then(data => {
            setProductos(data)
        })
    }, [categoria])

    const onAdd = (quantity) => {
        addItem(item, quantity)
    }

    return (
        <div>
            {Visible ? <Cargando /> : 
            <div className="lista-productos">
            {productos.map(item => (
                <div key={item.id} style={{ paddingBottom: "5px" }}>
                    <div className="tarjeta-producto">
                        <div className="row text-center">
                            <Link to={"/item/" + item.id} >
                                <div>
                                    <img src={item.foto} alt={item.tipo} />
                                </div>
                                <div>
                                    <h3 className="titulo-producto" style={{ color: "black" }}>{item.tipo} {item.marca} - {item.formato}</h3>
                                    <h5 style={{ color: "red", fontStyle: "bold" }}>$ {item.precio} c/u</h5>
                                </div>
                            </Link>
                            <ItemCount stock={item.stock} onAdd={onAdd}/>
                        </div>
                    </div>
                </div>
            ))
            }</div>}

        </div >
    )
}

export default Item