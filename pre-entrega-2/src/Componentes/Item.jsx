import ItemCount from "./ItemCount";

const Item = ({ producto }) => {

    return (
        <div key={produ.id} className="card" style={{ borderColor: "blue", backgroundColor: "#E7D4F5", width: "70%" }}>
            <div className="row text-center">
                <div className="col-md-4 text-end">
                    <img src={producto.foto} alt={producto.tipo} />
                </div>
                <div className="col-md-10 py-2 text-start">
                    <h3>{producto.tipo} {producto.marca} {producto.formato}</h3>
                    <h5 style={{ color: "red", fontStyle: "bold" }}>$ {producto.precio} c/u</h5>
                    <ItemCount />
                </div>
            </div>
        </div>
    )
}

export default Item;  