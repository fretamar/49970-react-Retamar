import {useRef} from "react";

const ItemCount = () => {
    const modificaRef = useRef(null);

    const modificaMensaje = () => {
        modificaRef.current.innerHTML = "✅Producto agregado";
        modificaRef.current.className = "text-secondary italic";
    };

    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={modificaMensaje}>Agregar al carrito</button>
            <p ref={modificaRef} style={{ fontStyle: "italic" }} ></p>
        </div>
    );
};

export default ItemCount;
