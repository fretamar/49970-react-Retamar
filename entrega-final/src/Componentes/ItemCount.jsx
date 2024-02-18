import { useRef } from "react";
import { useState } from 'react';
import "../App.css"
import { Link } from "react-router-dom";
import trash from "../assets/trash.svg"


const ItemCount = ({ stock, onAdd }) => {
    const modificaRef = useRef(null)
    const [cantidad, setCantidad] = useState(1)
    const [ProducStock, setProducStock] = useState(stock)
    const [BorrarProductos, setBorrarProductos] = useState(false)
    const [itemAdded, setItemAdded] = useState(false)

    const modificaMensaje = () => {
        modificaRef.current.innerHTML = "✅Producto agregado al carrito";
        modificaRef.current.className = "text-secondary italic";
    };

    const incremento = () => {
        if (cantidad <= ProducStock) {
            setCantidad(cantidad + 1)

        }
    }

    const decremento = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    const addToCart = () => {
        if (cantidad <= ProducStock) {
            setProducStock(ProducStock - cantidad)
            onAdd(cantidad)
            setCantidad(1)
            setItemAdded(true)
        }
    }

    const borrar = () => {
        setBorrarProductos(true)
    }

    return (
            <div>
                <div className="selec-stock">
                    <button className="input-group-text" onClick={decremento}>-</button>
                    <input type="number" className="text-stock" aria-label="Cantidad" value={cantidad}></input>
                    <button className="input-group-text" onClick={incremento}>+</button>
                </div>
                <div>
                    {itemAdded ? <Link to={"/cart"} className="btn btn-primary">Terminar compra</Link> : <button type="button" className="btn btn-primary" onClick={() => { addToCart(); modificaMensaje(); borrar() }} style={{ marginTop: "5px" }}>Agregar al carrito</button>}
                    {BorrarProductos && (
                        <button type="button" className="btn btn-danger" style={{ maxHeight: "40px", marginTop: "5px", marginLeft: "3px" }}><img src={trash} alt="Eliminar producto"></img></button>)}
                </div>
                <p ref={modificaRef} style={{ fontStyle: "italic" }}></p>
            </div >
        )}
        
export default ItemCount
