import React, {useState, useEffect} from "react";
import ItemList from "../itemList/ItemList";
import { useParams } from "react-router-dom";
import {collection, getDocs, query, where} from 'firebase/firestore';
import {db} from '../../services/firebase/firebase';

const ItemListContainer = ({greeting}) =>{

   const [products, setProducts] = useState([]);
   const [loading,setLoading] = useState(true);
   const {categoryId} = useParams();
   

    useEffect(() => {
        if(!categoryId){

            setLoading(true);
            getDocs(collection(db,'ItemCollection')).then((querySnapshot)=>{
                const products = querySnapshot.docs.map(doc => {
                    return { id:doc.id,...doc.data()}
                })
                setProducts(products);
            }).catch((error)=>{
                console.log('Error searching item', error);
            }).finally(()=>{
                setLoading(false);
            })
        }else{
            setLoading(true);
            getDocs(query(collection(db,'ItemCollection'),where('category','==',categoryId))).then((querySnapshot)=>{
                const products = querySnapshot.docs.map(doc => {
                    return { id:doc.id,...doc.data()}
                })
                setProducts(products);
            }).catch((error)=>{
                console.log('Error searching item', error);
            }).finally(()=>{
                setLoading(false);
            })
        }
       /*  ( async () => {

            if (categoryId !== undefined){

                const products = await getProductByCategory(categoryId);
                
                setProducts(products)

            } else {

                const products = await getProducts()
                
                setProducts(products)

            }
        })() */

    }, [categoryId])

    return(
        <div>
            <h1>{greeting="Bienvenidos a Rolling Store"}</h1>
            <ItemList products = {products}/>
        </div>    
    )
}

export default ItemListContainer