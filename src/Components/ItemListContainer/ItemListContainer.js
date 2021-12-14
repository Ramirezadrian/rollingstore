import ItemCount from "../ItemCount/ItemCount";
import React, {useState, useEffect} from "react";
import { getProducts , getProductByCategory} from "../../products/products";
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({greeting}) =>{

   const [products, setProducts] = useState([]);
   const {categoryId} = useParams();
   

    useEffect(() => {

        ( async () => {

            if (categoryId !== undefined){

                const products = await getProductByCategory(categoryId);
                
                setProducts(products)

            } else {

                const products = await getProducts()
                
                setProducts(products)

            }
        })()

    }, [categoryId])

    return(
        <div>
            <h1>{greeting="Bienvenidos a Rolling Store"}</h1>
          {/*   <ItemCount stock="20" initial="1" /> */}
            <ItemList products = {products}/>
        </div>    
    )
}

export default ItemListContainer