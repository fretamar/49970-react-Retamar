import "../App.css"
import Catalogo from "./Catalogo.json"

const MensajeInicio = ({greeting}) => {

return(
    <div className="contenedor-greeting">
<div className="alert alert-success" role="alert">{greeting}</div></div>
)}

export default MensajeInicio;