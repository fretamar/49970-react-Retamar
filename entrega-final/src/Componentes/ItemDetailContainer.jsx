import { useEffect, useState } from "react"
import Catalogo from "./Catalogo.json"
import "../App.css"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router"


const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const {id} = useParams()


    useEffect(() => {
        const Promesa = new Promise(resolve => {
            setTimeout(() => {
                let producto = Catalogo.find(item => item.id === parseInt(id))
                resolve(producto)
            }, 1000)
        })
        Promesa.then(data => {
            setItem(data)
        })

    }, [id])

    return (
        <div>
            <ItemDetail key={item.id} item={item} />
        </div>
    )
}

export default ItemDetailContainer