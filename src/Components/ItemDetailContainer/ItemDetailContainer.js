
import React, {useState, useEffect} from "react";
import { getProductById } from "../../products/products";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";



const ItemDetailContainer = () =>{

   const [product, setProduct] = useState([]);
   const {paramId} = useParams();
console.log(paramId)
    useEffect(() => {
        getProductById(paramId).then(item =>{
            setProduct(item);
            console.log(paramId)
        }).catch(err => {
            console.log(err);
        })
        
        return (() => {
            setProduct();
        })
    }, [paramId])
    
    return(
        <div>
            
            <ItemDetail product = {product}/>
            
            
        </div>    
    )
}

export default ItemDetailContainer