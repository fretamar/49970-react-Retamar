import {useRef} from "react"
const PanDulceDonLorenzo = () => {
    let producto = {imagen:"./src/assets/pan-dulce-frutas-don-lorenzo.png.png" , titulo:"Pan dulce con frutas Don Lorenzo - OFERTA" , precio:"700" , descripcion:"Ingredientes: Harina de trigo (enriquecida según Ley 25630*), frutas escurridas, oleomargarina, azúcar, huevos frescos, miel, levadura, emulsionante (mono y diflicéridos de ácidos grasos), sal, aromatizantes, saborizantes artificiales, lece en polvo, conservador (propionato de calico). Con conservador autorizado. Elaborado con oleomargarina, con esencias artificiales permitidas. Tenor graso: 9.9%."};

    const cuenta = ""
    const productoRef = useRef(null)

    const modificarProducto = () => {
        productoRef.current.innerHTML = "✅Agregado"
    }

    return (
        <div className="card" style={{borderColor:"blue", backgroundColor:"#E7D4F5", width:"70%"}}>
            <div className="row text-center">
                <div className="col-md-4 text-end">
                    <img src={producto.imagen} alt="Pan Dulce con Frutas" />
                </div>
                <div className="col-md-8 py-2 text-start">
                    <h3>{producto.titulo}</h3>
                    <h5 className="font-italic" style={{color: "red", fontStyle: "bold"}}>${producto.precio} c/u</h5>
                    <p className="text-secondary" style={{fontStyle:"italic"}}>{producto.descripcion}</p>
                    <button type="button" className="btn btn-primary " onClick={modificarProducto}>Agregar al carrito</button>
                    <div ref={productoRef} style={{ fontStyle: "italic" }}>{cuenta}</div>
                </div>
            </div>
        </div>
    )
}

export default PanDulceDonLorenzo;