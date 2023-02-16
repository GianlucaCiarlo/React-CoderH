
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import "./ItemListContainer.css"
import { productos } from "../../data/stock";
import ItemList from "../ItemList/ItemList";


export const ItemListContainer = () => {
  const {category}= useParams()
  console.log("asi llega:", category)

  const [items, setItems] = useState([])



  
  useEffect(() => {
    const filtroProductos = productos.filter( (product)=> product.categoria === category)


    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(category != undefined ? filtroProductos : productos)
      }, 500);
      //  reject (errorMenssage)
    });


    task
      .then((res) => {
        setItems(res)
          .catch((error) => {

            console.log("Rechazo:", error)

          })

      });

  }, [category]);

  console.log(items)

  return (

    <>

      <ItemList items={items}  />

    </>

  );
};
