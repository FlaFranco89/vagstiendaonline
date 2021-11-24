import react from "react";
import CartWidget from "../CartWidget/CartWidget";
import "../NavBar/NavBar.css";

function NavBar () {
    return (
        <div>
            <nav className="flex justify-between items-center relative">
                <h1 className="brand">Vags.</h1>
                <ul className="menu flex space-x-4"> 
                    <li><a>Inicio</a></li>
                    <li><a>Nosotros</a></li>
                    <li><a>Tienda</a></li>
                    <li><a>Contacto</a></li>
                </ul>
                <CartWidget />
            </nav>
        </div>
    ); 
}

export default NavBar;