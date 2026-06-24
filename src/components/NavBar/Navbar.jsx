import CartWidget from "../CartWidget/CartWidget.jsx";
import logo from "../../assets/tienda.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
        <header className="shadow-md">
            <nav className="flex justify-between items-center h-20">
                <div className="ml-4">
                    <Link to={"./"} className="flex">
                        <img className="w-14" src={logo} alt="Carrito de compras" />
                        <p className="text-logo self-center">SportShop</p>
                    </Link>
                </div>
                <CartWidget />
            </nav>
        </header>
        </>
    )
}

export default Navbar