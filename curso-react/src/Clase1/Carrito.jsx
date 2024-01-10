import { useState } from "react"

const SkeletonCarrito = "./src/assets/supermarket-cart.gif"
const Estilo = {
    height: "70px",
    width: "auto",
    display: "flex",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    marginBottom: "20px",
    paddingBottom: "10px"
}
const Estilo2 = {
    height: "85px",
    width: "85px",
    display: "flex",
    justifyContent: "flex-end",
    alignContent: "center",
    backgroundColor: "#E7D4F5",
}



const Carrito = () => {
    const [productosCarrito, setproductosCarrito] = useState(0)
    const modificarBoton = () => {
        setproductosCarrito(prevproductosCarrito => prevproductosCarrito + 1)
    }

    return (
        <div className="container" style={Estilo}>
            <button type="button" onClick={modificarBoton} className="btn position-relative" style={Estilo2}>
                <img src={SkeletonCarrito} alt="carrito" style={Estilo} />
                <span className="position-absolute top-40 start-100 translate-middle badge rounded-pill bg-danger">
                  {productosCarrito}
                </span>
            </button>
        </div>
    )
}

export default Carrito;