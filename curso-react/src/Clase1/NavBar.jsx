import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="navbar-brand" href="">Inicio</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Productos</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Nosotros</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Contacto</a>
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