
import React from 'react'
import "./ProductCard.css"
import { Link } from 'react-router-dom'

const ProductCard = ({ elemento }) => {
    return (
        <Link to={`/ItemDetail/${elemento.id}`} >
            <div className="itemContainer">
                <h3>{elemento.nombre}</h3>
                <h4>Precio:$ {elemento.precio}</h4>
                <h4>unidades: {elemento.unidades}</h4>
                <img className="imgProducto" src={elemento.img}/>

            </div>
        </Link>
    )
}
export default ProductCard