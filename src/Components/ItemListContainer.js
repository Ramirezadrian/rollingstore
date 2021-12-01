import ItemCount from "./ItemCount";
import React, {useState} from "react";
import { getProducts } from "../products/products";

const ItemListContainer = ({greeting}) =>{

  /*  const [products, setProducts] = useState([]);

    useEffect(() => {
        const list = getProducts();
        list.then(list => {
            setProducts(list);
        })

        return (() => {
            setProducts([]);
        })
    }, [])*/
    
    return(
        <div>
            <h1>{greeting="Bienvenidos a Rolling Store"}</h1>
            <ItemCount stock="20" initial="1" />
        </div>    
    )
}

export default ItemListContainer