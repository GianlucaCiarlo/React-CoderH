import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import "./ItemList.css"


const ItemList = ({items}) => {
    return (
        <div className='ProductContainer'>
            {
                items.map((elemento) => {
                    return <ProductCard elemento={elemento
                    }/>
                    
                })




            }</div>
    )
}

export default ItemList