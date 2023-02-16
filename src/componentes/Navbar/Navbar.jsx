import "./NavbarStyles.css"
import { Link } from "react-router-dom"



const Navbar = () => {
    return (
        <nav>
            <div>
                <Link to="/" ><img src="https://res.cloudinary.com/drfhxh99i/image/upload/v1676432360/logoheader_bgmj2s.png" alt="" /></Link>

                <ul id="navbar">
                    <Link to=""><li><h2>Inicio</h2></li></Link>
                    <Link to="/category/cervezas"><li><h2>Cervezas</h2></li></Link>
                <Link to="/category/gaseosas"><li><h2>Gaseosas</h2></li></Link>
                {/* <Link to=""><li><h2>Como comprar</h2></li></Link>
                <Link to=""><li> <h2>Quienes somos?</h2></li></Link>
                <Link to=""><li><h2> Contacto</h2></li></Link> */}

            </ul>

        </div>

        </nav >
    )
}

export default Navbar