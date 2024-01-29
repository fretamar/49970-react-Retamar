import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" activeClassname="active" to={"/ItemListContainer"}>Productos</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" activeClassname="active" to={"/categoria/Alimento"}>Alimentos</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" activeClassname="active" to={"/categoria/BebidasSinAlcohol"}>Bebidas Sin Alcohol</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" activeClassname="active" to={"/categoria/BebidasConAlcohol"}>Bebidas Con Alcohol</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" activeClassname="active" to={"/Contacto"}>Contacto</Link>
                    </li>
                </ul>
                <div className="ml-auto">
                <CartWidget />
                </div>
            </div>
        </nav>

    )
}

export default NavBar;