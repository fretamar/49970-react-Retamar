import ItemCount from "./ItemCount";

const PanDulceValido = () => {
    let producto = {marca: "Valido", tamanio: "1kg", tipo: "Pan dulce", formato:"individual", imagen: "./src/assets/pan-dulce-frutas-valido.png.png", precio: "750"};

    return (
        <div className="card" style={{ borderColor: "blue", backgroundColor: "#E7D4F5", width: "45%" }}>
            <div className="row text-center">
                <div className="col-md-4 text-center">
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

export default PanDulceValido;