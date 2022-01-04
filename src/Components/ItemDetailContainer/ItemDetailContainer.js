
import React, {useState, useEffect} from "react";
import ItemDetail from "../itemDetail/ItemDetail";
import {db} from '../../services/firebase/firebase';
import { useParams } from "react-router-dom";
import {getDoc,doc} from 'firebase/firestore';



const ItemDetailContainer = () =>{

   const [product, setProduct] = useState([]);
   /* const [loading,setLoading] =useState(true); */
   const {paramId} = useParams();

console.log(paramId)
    useEffect(() => {
        /* setLoading(true); */
        getDoc(doc(db,'ItemCollection', paramId)).then((querySnapshot)=>{
            const product = {id:querySnapshot.id,...querySnapshot.data()}
            setProduct(product);
        
        }).catch((err) => {
            console.log(err);
        }).finally(()=>{
          /*   setLoading(false); */
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