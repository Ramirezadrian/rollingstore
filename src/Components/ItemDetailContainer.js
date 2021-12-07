
import React, {useState, useEffect} from "react";
import { getItem } from "../products/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () =>{

   const [detail, setDetail] = useState([]);

    useEffect(() => {
        const product = getItem();
        product.then(product => {
            setDetail(product);
        })

        return (() => {
            setDetail([]);
        })
    }, [])
    
    return(
        <div>
            
            <ItemDetail product = {detail}/>
            
        </div>    
    )
}

export default ItemDetailContainer