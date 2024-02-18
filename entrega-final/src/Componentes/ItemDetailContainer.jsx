import { useEffect, useState } from "react"
import Catalogo from "../componentes/json/Catalogo.json"
import "../App.css"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router"
import Cargando from "./Cargando"


const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const {id} = useParams()
    const [Visible, setVisible] =useState(true)


    useEffect(() => {
        const Promesa = new Promise(resolve => {
            setTimeout(() => {
                setVisible(false)    
                let producto = Catalogo.find(item => item.id === parseInt(id))
                resolve(producto)
            }, 3000)
        })
        Promesa.then(data => {
            setItem(data)
        })

    }, [id])

    return (
        <div>
            {Visible ? <Cargando /> : <ItemDetail key={item.id} item={item} />}
        </div>
    )
}

export default ItemDetailContainer