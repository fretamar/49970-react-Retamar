import { useContext } from "react"
import { CartContext } from "./context/CartContext"
import { Link } from "react-router-dom"
import trash from "../assets/trash.svg"

const Cart = () => {
    const { cart, removeItem, clear, QtotalProductos, SumaTotalProductos } = useContext(CartContext)

    if (QtotalProductos() == 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <p className="display-1"><img src="../src/assets/cart-empty.png" alt="Carrito vacio" className="imagen-carrito" /></p>
                        <div className="alert alert-danger" role="alert">No tenes ningún producto en el carrito!</div>
                        <Link to={"/ItemListContainer"} className="btn btn-primary">Volver al Catálogo</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container" style={{ display: "inline-flex", flexDirection: "row", height: "100%", justifyContent: "center", alignItems: "center", gap: "40px" }}>
            <div className="lista-producto" style={{ backgroundColor: "#E7D4F5", borderRadius: "10px", border: "2px solid blue", width: "60%", minHeight: "240px" }}>
                <h3 className="titulo-compra">Productos
                    <tr>
                        <td>
                            <a href="#" onClick={clear} className="btn btn-danger"> Vaciar Carrito
                                <img src={trash} alt="Vaciar Carrito" title="Vaciar Carrito" />
                            </a>
                        </td>
                    </tr>
                </h3>

                <div>
                    <table className="table">
                        <tbody>
                            {
                                cart.map(product =>
                                    <tr key={product.id}>
                                        <td><img src={product.foto} alt={product.marca} width={30} /></td>
                                        <td>{product.tipo} {product.marca}</td>
                                        <td>${parseInt(product.precio)}</td>
                                        <td>{product.quantity}</td>
                                        <td>${parseInt(product.quantity * product.precio)}</td>
                                        <td>
                                            <a href="#" onClick={() => { removeItem(product.id) }}>
                                                <img src={trash} alt="Eliminar producto" title="Eliminar producto" />
                                            </a>
                                        </td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="lista-producto" style={{ backgroundColor: "#E7D4F5", borderRadius: "10px", border: "2px solid blue", width: "30%", maxHeight: "240px" }}>
                <h3 className="resumen-compra">Resumen de compra</h3>
                <div className="productos-tarjeta" style={{ display: "flex", justifyContent: "space-between" }}>
                    <p>Productos</p>
                    <p>${SumaTotalProductos()}</p>
                </div>
                <div className="productos-tarjeta" style={{ display: "flex", justifyContent: "space-between" }}>
                    <p>Envío</p>
                    <b>Gratis</b>
                </div>
                <div className="productos-tarjeta" style={{ display: "flex", justifyContent: "space-between" }}>
                    <p><b>Total</b></p>
                    <p>${SumaTotalProductos()}</p>
                </div>
                <div style={{ borderTop: "2px solid white", display: "flex", justifyContent: "center", height: "40px", paddingTop: "10px", marginBottom: "10px" }}>
                   <Link to={"/checkout"}  className="btn btn-primary">Finalizar compra</Link>
                </div>
            </div>
        </div>

    )
}

export default Cart