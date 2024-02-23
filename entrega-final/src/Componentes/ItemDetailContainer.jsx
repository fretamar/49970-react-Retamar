    import { useEffect, useState } from "react"
    import Catalogo from "../componentes/json/Catalogo.json"
    import "../App.css"
    import ItemDetail from "./ItemDetail"
    import { useParams } from "react-router"
    import Cargando from "./Cargando"
    import { getFirestore, doc, getDoc } from "firebase/firestore";



    const ItemDetailContainer = () => {
        const [item, setItem] = useState({})
        const { id } = useParams()
        const [visible, setVisible] = useState(true)
    
        useEffect(() => {
            const db = getFirestore()
            const producto = doc(db, "catalogo", id)
            getDoc(producto)
                .then(resultado => {
                    setItem({ id: resultado.id, ...resultado.data() })
                    setVisible(false)
                })
                .catch(error => {
                    setVisible(false)
                })
        }, [id])
    
        return (
            <div>
                {visible ? <Cargando /> : <ItemDetail key={item.id} item={item} />}
            </div>
        );
    }
    
    export default ItemDetailContainer
    