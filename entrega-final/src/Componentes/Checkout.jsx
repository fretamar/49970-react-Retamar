import { useContext, useState } from "react"
import { CartContext} from "./context/CartContext"
import { getFirestore, collection, addDoc } from "firebase/firestore";

const Checkout = () => {
    const { cart, QtotalProductos, SumaTotalProductos, clear} = useContext(CartContext)
    const [nombre, setNombre] = useState()
    const [email, setEmail] = useState()
    const [telefono, setTelefono] = useState()
    const [orderId, setOrderId] = useState()

    const generarOrden = () => {
        if(nombre.length === 0){
           return false 
        }
        if(email.length === 0){
            return false 
         }
         if(telefono.length === 0){
            return false 
         }

       
        const pedidoComprador = { name:nombre, email:email, phone:telefono }
        const items = cart.map(item => ({ id: item.idx, title: item.marca, price: item.precio }))
        const fecha = new Date()
        const date = `${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`
        const total = SumaTotalProductos()
        const order = { buyer:pedidoComprador, items:items, date:date, total:total }

        const db = getFirestore()
        const orderCollection = collection(db, "orders")
        addDoc(orderCollection, order).then(resultado => {
            console.log(resultado)
            clear()
            setOrderId(resultado.id)
        })

    }

    return (
        <div className="container" style={{ display: "inline-flex", flexDirection: "row", height: "100%", justifyContent: "center", alignItems: "center", gap: "40px" }}>
            <div className="lista-producto" style={{ backgroundColor: "#E7D4F5", borderRadius: "10px", border: "2px solid blue", width: "60%", minHeight: "240px" }}>
                <h3 className="titulo-compra">Finalizar compra</h3>
                <div>
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre completo</label>
                            <input type="text" className="form-control" onKeyUp={(e) => { setNombre(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" onKeyUp={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" >Telefono</label>
                            <input type="text" className="form-control" onKeyUp={(e) => { setTelefono(e.target.value) }} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={generarOrden}>Generar pedido</button>
                    </form>
                </div>
            </div>
            <div className=" orden-compra" style={{ width: "30%" }} >
                <div className="lista-producto" style={{ backgroundColor: "#E7D4F5", borderRadius: "10px", border: "2px solid blue", maxHeight: "240px" }}>
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
                </div>
                {orderId ? <div className="orden-compra">
                    <div className="alert alert-success" role="alert">
                        <h3>Orden generada exitosamente 🍾</h3>
                        <h5 className="orden-compra">Tu código es: <b>{orderId}</b></h5>
                    </div>
                </div> : ""}
            </div>
        </div>

    )
}

export default Checkout