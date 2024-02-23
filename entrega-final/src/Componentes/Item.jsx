import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import "../App.css"
import Catalogo from "../componentes/json/Catalogo.json"
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom"
import Cargando from "./Cargando"
import { CartContext } from "./context/CartContext"
import { getFirestore, collection, addDoc, query, where, getDocs } from "firebase/firestore";


const Item = ({ item }) => {
    const { addItem } = useContext(CartContext)
    const [productos, setProductos] = useState([])
    const { categoria } = useParams()
    const [Visible, setVisible] = useState(true)

 /*  useEffect(() => {
         const db = getFirestore()
         const catalogCollection = collection(db, "catalogo")
 
         Catalogo.forEach(producto => {
             addDoc(catalogCollection, producto)
         })
     })*/

     useEffect(() => {
        const db = getFirestore()
        const catalogCollection = collection(db, "catalogo")
        const Promesa = new Promise(resolve => {
            setTimeout(() => {
                setVisible(false)
                const q = categoria ? query(catalogCollection, where("categoria", "==", categoria)) : catalogCollection
                getDocs(q).then(resultado => {
                    resolve(resultado.docs.map(producto => ({ id: producto.id, ...producto.data() })))
                }).catch(error => {
                    console.error("Error fetching products: ", error)
                    resolve([])
                });
            }, 1000);
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
                                </div>
                            </div>
                        </div>
                    ))
                    }</div>}

        </div >
    )
}

export default Item