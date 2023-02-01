import "./NavbarStyles.css"
import CardWidget from "../CardWidget/CardWidget"


const Navbar = () => {
    return (
        <nav>
            <div>
                <ul id="navbar">
                    <li><a className="active" href="../../../public/index.html">Inicio</a></li>
                    <li><a href="../../../public/index.html">Promociones</a></li>
                    <li><a href="../../../public/index.html">Productos</a></li>
                    <li><a href="../../../public/index.html">Como comprar</a></li>
                    <li><a href="../../../public/index.html">Quienes somos?</a></li>
                    <li><a href="../../../public/index.html">Contacto</a></li>
                    <CardWidget />
                </ul>
                
            </div>

        </nav>
    )
}

export default Navbar