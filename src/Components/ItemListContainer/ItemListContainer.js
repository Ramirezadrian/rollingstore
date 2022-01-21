import React, {useState, useEffect} from "react";
import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom";
import {getProducts} from '../../services/firebase/firebase'

const ItemListContainer = ({greeting}) =>{

   const [products, setProducts] = useState([]);
   const [loading,setLoading] = useState(true); 
   const {categoryId} = useParams();
   

    useEffect(() => {
        setLoading(true);
        getProducts('category', '==',categoryId).then(products =>{
            setProducts(products)
        }).catch(error =>{
            console.log(error)
        }).finally(()=>{
            setLoading(false)
        })
        
      
    }, [categoryId])

    if(loading){
        return (<h1>Cargando...</h1>)
    }

    return(
        <div>
            <h1>{greeting="Bienvenidos a Rolling Store"}</h1>
            <ItemList products = {products}/>
        </div>    
    )
    
}

export default ItemListContainer