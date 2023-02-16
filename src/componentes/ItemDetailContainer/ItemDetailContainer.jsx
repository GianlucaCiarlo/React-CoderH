
import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"

import { productos } from "../../data/stock"

const ItemDetailContainer = () => {
const {id}= useParams()
  
 const[product, setProduct]= useState([])

 

 
 useEffect( ()=>{
    let productoSeleccionado = productos.find( prod => prod.id === Number(id))
    setProduct (productoSeleccionado)
},[])

    return(
        <div style={{paddingBottom: "100px"}} >
            <h2>{product.nombre}</h2>
            <h2>Precio: ${product.precio}</h2>
            <h2>Unidades:{product.unidades}</h2>
        </div>
    )
}

export default ItemDetailContainer