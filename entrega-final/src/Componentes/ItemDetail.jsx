import ItemCount from "./ItemCount"
import "../App.css"
import { useContext, useEffect } from "react"
import { CartContext } from "./context/CartContext"


const ItemDetail = ({ item }) => {
    const {addItem} = useContext(CartContext) 

    const onAdd = (quantity) => {
        addItem(item, quantity)
    }
    
    return (
        <div>
            <div className="tarjeta-producto" style={{borderRadius: "10px"}}>
                <div style={{ border: "2px solid white", marginLeft: "10px", borderRadius: "10px", maxWidth: "30%" }}>
                    <img src={item.foto} alt={item.tipo} />
                </div>
                <div>
                    <div>
                        <h2>{item.tipo} {item.marca} - {item.formato}</h2>
                    </div>
                    <div>
                        <h3 style={{ color: "red", fontWeight: "bold" }}>{item.precio} c/u</h3>
                    </div>
                    <div>
                        <h5 style={{ fontStyle: "italic", fontWeight: "lighter", fontSize: "18px", margin: "10px" }}>{item.descripcion}</h5>
                    </div>
                    <ItemCount stock={item.stock} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail