import { useRef } from "react";
import { useState } from 'react';

const estiloInput = {
    width: "20%",
    border: "1px white"
}

const ItemCount = () => {
    const modificaRef = useRef(null);
    const [cantidad, setCantidad] = useState(1)

    const modificaMensaje = () => {
        modificaRef.current.innerHTML = "✅Producto agregado";
        modificaRef.current.className = "text-secondary italic";
    };

    const incremento = () => {
        setCantidad(cantidad + 1)
    }

    const decremento = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={modificaMensaje}>Agregar al carrito</button>
            <div className="input-group mb-3">
                <button className="input-group-text" onClick={decremento}>-</button>
                <input type="number" aria-label="Amount (to the nearest dollar)" value={cantidad}></input>
                <button className="input-group-text" onClick={incremento}>+</button>
            </div>
            <p ref={modificaRef} style={{ fontStyle: "italic" }} ></p>
        </div>
    );
};

export default ItemCount;
