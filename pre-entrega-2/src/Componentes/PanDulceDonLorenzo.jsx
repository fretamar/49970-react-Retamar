import ItemCount from "./ItemCount";

const PanDulceDonLorenzo = () => {
    let producto = {marca: "Don Lorenzo", tamanio: "1kg", tipo: "Pan dulce", formato:"individual", imagen: "./src/assets/pan-dulce-frutas-don-lorenzo.png.png", precio: "700"  };

    return (
        <div className="card" style={{ borderColor: "blue", backgroundColor: "#E7D4F5", width: "70%" }}>
            <div className="row text-center">
                <div className="col-md-4 text-end">
                    <img src={producto.imagen} alt="Pan Dulce con Frutas" />
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

export default PanDulceDonLorenzo;