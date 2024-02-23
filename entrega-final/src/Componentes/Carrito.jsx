import "../App.css"

const Carrito = () => {
    return (
        <div className="container" style={{display:"inline-flex", flexDirection: "row", height: "100%", justifyContent: "center", alignItems: "center", gap:"40px"}}>
            <div className="lista-producto" style={{ backgroundColor: "#E7D4F5", borderRadius: "10px", border: "2px solid blue", width:"60%", minHeight:"240px" }}>
            <h3 className="titulo-compra">Productos</h3>
            <div>
                <p>
                </p>
            </div>
            </div>
            <div className="lista-producto" style={{ backgroundColor: "#E7D4F5", borderRadius: "10px", border: "2px solid blue", width:"30%", maxHeight:"240px" }}>
                <div><h3 className="resumen-compra">Resumen de compra</h3></div>
                <div className="productos-carrito"><p>Productos </p></div>
                <div className="productos-carrito"><p>Envío </p></div>
                <div className="productos-carrito"><p><b>Total</b> </p></div>
                <div style={{borderTop:"2px solid white",display:"flex", alignContent:"center", justifyContent:"center", height:"40px", paddingTop:"10px", marginBottom:"10px" }}><button type="button" className="btn btn-primary">Finalizar compra</button></div>
            </div>
        </div>
    )
}

export default Carrito

  