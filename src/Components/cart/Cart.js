import React from "react";
import { useContext, useState } from "react";
import CartContext from '../cartContext/CartContext';
import { Link } from 'react-router-dom';
import './cart.css'; 
import  {addDoc, collection, Timestamp, doc, writeBatch, getDoc} from "firebase/firestore";
import {db} from '../../services/firebase/firebase';
import NotificationContext from "../notification/NotificationContext";

const Cart = () =>{

    const {cart, removeItem, clear, getTotal,finalPrice} = useContext(CartContext);
    const {setNotification} = useContext(NotificationContext);
    const [userInfo,setUserInfo] = useState({
        name: '',
        email: '',
        tel: '',
    });
    const [processingOrder, setProcessingOrder] = useState(false);
    
    const handleInputChange = (event) => {
       
        setUserInfo({
            ...userInfo,
            [event.target.name] : event.target.value
        })
    }

    const confirmOrder = () =>{

        setProcessingOrder(true);

        const newOrder = {
            buyer:userInfo,
            items: cart,
            date:  Timestamp.fromDate(new Date()), 
            total: getTotal(),
        };

        const batch = writeBatch(db);
        const outOfStock = [];

        newOrder.items.forEach((prod)=>{
            getDoc(doc(db, 'ItemCollection',prod.item.id)).then((documentSnapshot)=>{
                if(documentSnapshot.data().stock >= prod.quantity){
                    batch.update(doc(db,'ItemCollection',documentSnapshot.id),{
                        stock:documentSnapshot.data().stock - prod.quantity
                    })
                }else{
                    outOfStock.push({id:documentSnapshot.id,...documentSnapshot.data()});
                }
            })
        })

        if(outOfStock.length === 0){
            addDoc(collection(db,'orders'),newOrder).then(({id})=>{
                batch.commit().then(()=>{
                    setNotification('success', `Orden de compra: ${id}` );
                               
            })
        }).catch((error)=>{
            console.log(error)
             setNotification('error',`Error ejecutando la orden: ${error}`)
        }).finally(()=>{
            setProcessingOrder(false);
            clear();
            
            
            
        })
         }
     }

        if(processingOrder){
            return <h1>Su orden esta siendo procesada...</h1>
        }
    

    const renderizar = ()=>{
        const total = finalPrice();
        return(
            <div >
            <table className="table">
                <thead >
                <tr className="table-dark">
                    <th >Imagen</th>
                    <th >Descripcion</th>
                    <th >Cantidad</th>
                    <th >Precio unitario</th>
                    <th >Subtotal</th>
                    <th ></th>
                </tr>
                </thead>
                <tbody>
                {cart.map(producto =>{
                return <tr>
                        <td><Link key = {producto.item.id} to={`/detail/${producto.item.id}`}><img src={producto.item.img} className="prdImg" alt="Imagen"/></Link></td>
                        <td>{producto.item.name}</td>
                        <td>{producto.quantity}</td>
                        <td>${producto.item.price}</td>
                        <td>${producto.quantity * producto.item.price}</td>
                        
                        <td><button type="button" className="btn btn-danger"  onClick={()=> removeItem(producto.item)}>Eliminar</button></td>
    
                    </tr>
                })}
                </tbody>
                <tfoot>
                    
                    <tr className="table-dark ">
                        <th COLSPAN="6">
                            <button type = "button" className="btn btn-outline-danger tblBtn" onClick={(clear)}>Vaciar Carro</button>       
                            <button type="button" className="btn btn-outline-success tblBtn" onClick={(confirmOrder)}>Terminar Compra</button>                 
                        </th>
                    </tr>
                </tfoot>
            </table>
            <h3>TOTAL ${total}</h3>
            
         
            <form className="formInput">
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="name" name="name" placeholder="Nombre" onChange={handleInputChange}></input>
                <label for="name">Nombre</label>
            </div>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="email" name="email" placeholder="name@example.com" onChange={handleInputChange}></input>
                <label for="email">Email address</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="tel" name="tel" placeholder="Password" onChange={handleInputChange}></input>
                <label for="tel">Telefono</label>
            </div>
   
            </form>    
            </div>
        )
    }
    return <>
    {cart.length === 0 ? <Link to="/">Volver a Productos</Link>:renderizar()}
    </>
   
}

export default Cart;