import ItemCount from "./ItemCount";
import React, {useState, useEffect} from "react";
import { getProducts } from "../products/products";
import ItemList from "./ItemList";

const ItemListContainer = ({greeting}) =>{

   const [products, setProducts] = useState([]);

    useEffect(() => {
        const list = getProducts();
        list.then(list => {
            setProducts(list);
        })

        return (() => {
            setProducts([]);
        })
    }, [])
    
    return(
        <div>
            <h1>{greeting="Bienvenidos a Rolling Store"}</h1>
            <ItemCount stock="20" initial="1" />
            <ItemList products = {products}/>
        </div>    
    )
}

export default ItemListContainer