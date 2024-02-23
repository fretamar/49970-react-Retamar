import { useContext, useState } from "react"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom"


const SkeletonCarrito = "../src/assets/supermarket-cart.gif"

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

const CartWidget = () => {
    const{QtotalProductos} = useContext(CartContext)
    const[productosCarrito, setProductosCarrito] = useState(0)
    const modificarBoton = () => {
        setProductosCarrito(prevproductosCarrito => prevproductosCarrito + 1)
    }

    return (
        QtotalProductos() > 0 ? 
          <div className="container" style={Estilo}>
           <Link to={"/cart"} onClick={modificarBoton} className="btn position-relative" style={Estilo2}>
                <img src={SkeletonCarrito} alt="carrito" style={Estilo} />
                <span className="position-absolute top-40 start-100 translate-middle badge rounded-pill bg-danger">
                  {QtotalProductos()}
                </span>
            </Link>
        </div>   : ""
    )
}

export default CartWidget;