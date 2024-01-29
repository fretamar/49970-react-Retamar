import ItemCount from "./ItemCount"
import "../App.css"


const ItemDetail = ({ item }) => {

    return (
        <div>
            <div className="tarjeta-producto" style={{ backgroundColor: "#E7D4F5", borderRadius: "10px", border: "2px solid blue" }}>
                <div style={{ border: "2px solid white", marginLeft: "10px", borderRadius: "10px", maxWidth: "30%" }}>
                    <img src={item.foto} alt={item.tipo} />
                </div>
                <div>
                    <div>
                        <h2>{item.tipo} {item.marca} {item.formato}</h2>
                    </div>
                    <div>
                        <h3 style={{ color: "red", fontWeight: "bold" }}>{item.precio} c/u</h3>
                    </div>
                    <div>
                        <h5 style={{ fontStyle: "italic", fontWeight: "lighter", fontSize: "18px", margin: "10px" }}>{item.descripcion}</h5>
                    </div>
                    <ItemCount stock={19} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail