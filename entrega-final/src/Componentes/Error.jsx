import { Link } from "react-router-dom"

const Error = () => {
    return(
        <div>
            <h1>Esta página no existe</h1>
            <h3>Parece que no es lo que estabas buscando...😥😭</h3>
            <img style={{maxHeight:"400px"}} src="./src/assets/error-404.png" alt="Error" />
            <br />
            <button><Link style={{color: "#646cffaa"}}to="/ItemListContainer">Voler al inicio</Link></button>
        </div>
    )
}

export default Error