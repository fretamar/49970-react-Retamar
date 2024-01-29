import { useRef } from "react";
import { useState } from 'react';
import "../App.css"


const ItemCount = ({stock}) => {
    const modificaRef = useRef(null);
    const [cantidad, setCantidad] = useState(1)
    const [ProducStock, setProducStock] = useState(stock)

    const modificaMensaje = () => {
        modificaRef.current.innerHTML = "✅Producto agregado al agregado";
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

    const onAdd = () => {
        if (cantidad <= ProducStock) {
            setProducStock(ProducStock - cantidad)
            setCantidad(1)
        }
    }

    return (
        <div>
            <div className="selec-stock">
                <button className="input-group-text" onClick={decremento}>-</button>
                <input type="number" className="text-stock" aria-label="Amount (to the nearest dollar)" value={cantidad}></input>
                <button className="input-group-text" onClick={incremento}>+</button>
            </div>
            <button type="button" className="btn btn-primary" onClick={() => {onAdd(); modificaMensaje(); }} style={{marginTop:"5px"}}>Agregar al carrito</button>
            <p ref={modificaRef} style={{ fontStyle: "italic" }} ></p>
        </div>
    );
};

export default ItemCount;
