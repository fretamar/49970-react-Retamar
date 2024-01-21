import { useRef } from "react"

const BarritasMuecas = () => {
    let producto = { imagen: "./src/assets/barritas-muecas-todos-sabores.png.png", titulo: "Barritas de cereal Müecas - OFERTA", precio: "450", descripcion: "Creemos que hacer alimentos y alimentarse puede ser algo lindo, rico y divertido. Eso es lo que intentamos transmitir. Más de 5 variedades." };

    const modificaRef = useRef(null)
    const mensajeBoton = () => {
        modificaRef.current.innerHTML = "✅Producto agregado"
        modificaRef.current.className = "text-secondary italic"
    }

    return (
        <div className="card" style={{ borderColor: "blue", backgroundColor: "#E7D4F5", width: "70%" }}>
            <div className="row text-center">
                <div className="col-md-4 text-end">
                    <img src={producto.imagen} alt="Barritas de Cereal" />
                </div>
                <div className="col-md-8 py-2 text-start">
                    <h3>{producto.titulo}</h3>
                    <h5 style={{ color: "red", fontStyle: "bold"  }}>$ {producto.precio} c/u</h5>
                    <p className="text-secondary" style={{ fontStyle: "italic" }}>{producto.descripcion}</p>
                    <button type="button" className="btn btn-primary" onClick={mensajeBoton}>Agregar al carrito</button>
                    <p ref={modificaRef} style={{ fontStyle: "italic" }} ></p>
                </div>
            </div>
        </div>
    )
}

export default BarritasMuecas;