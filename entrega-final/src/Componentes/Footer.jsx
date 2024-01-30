import Subtitulo from "./Subtitulo"
import Subtitulo2 from "./Subtitulo2"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <Link to={"/ItemListContainer"}>
                        <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                            <img src="./src/assets/car-icono.png" alt="icono" className="bi" style={{ width: "100px", height: "100px" }} />
                        </a>
                    </Link>
                    <span className="mb-3 mb-md-0 text-body-secondary"> 2024® Página sin fines de lucro. </span>
                </div>
                <div className="justify-content-end">
                    <Subtitulo />
                    <Subtitulo2 />
                </div>
            </footer>
        </div>
    )
}
export default Footer;