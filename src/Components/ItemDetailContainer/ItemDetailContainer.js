
import React, {useState, useEffect} from "react";
import { getProductById } from "../../products/products";
import ItemDetail from "../itemDetail/ItemDetail";
import {db} from '../../services/firebase/firebase';
import { useParams } from "react-router-dom";
import {getDoc,doc, QuerySnapshot} from 'firebase/firestore';



const ItemDetailContainer = () =>{

   const [product, setProduct] = useState([]);
   const [loading,setLoading] =useState(true);
   const {paramId} = useParams();

console.log(paramId)
    useEffect(() => {
        setLoading(true);
        getDoc(doc(db,'ItemCollection', paramId)).then((querySnapshot)=>{
            const product = {id:querySnapshot.id,...querySnapshot.data()}
            setProduct(product);
        
        /* getProductById(paramId).then(item =>{
            setProduct(item);
            console.log(paramId) */
        }).catch((err) => {
            console.log(err);
        }).finally(()=>{
            setLoading(false);
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