import React from "react";
import { useContext, useState } from "react";
import CartContext from '../cartContext/CartContext';
import { Link } from 'react-router-dom';
import './cart.css'; 
import  {addDoc, collection, Timestamp} from "firebase/firestore";
import {db} from '../../services/firebase/firebase';

const Cart = () =>{

    const {cart, removeItem, clear, getTotal} = useContext(CartContext);
    const [userInfo,setUserInfo] = useState('');

    const confirmOrder = () =>{

        const newOrder = {
            buyer:{name: "Juan", email: "juan@gmail.com", tel: "45553322"},
            /* buyer : {email : userInfo.email, name:userInfo.name, tel:userInfo.tel}, */
            items: cart,
            date:  Timestamp.fromDate(new Date()), 
            total: getTotal(),
        };

        addDoc(collection(db,'orders'),newOrder).then(({id})=>{
            console.log(id);
        })
    }

    const renderizar = ()=>{
        return(
            <table>
                <thead>
                <tr>
                    <th>Imagen</th>
                    <th>Descripcion</th>
                    <th>Cantidad</th>
                </tr>
                </thead>
                <tbody>
                {cart.map(producto =>{
                return <tr>
                        <th><Link key = {producto.item.id} to={`/detail/${producto.item.id}`}><img src={producto.item.img} className="prdImg" alt="Imagen"/></Link></th>
                        <th>{producto.item.name}</th>
                        <th>{producto.quantity}</th>
                        <th><button className="btnTbl" onClick={()=> removeItem(producto.item)}>X</button></th>
    
                    </tr>
                })}
                </tbody>
                <tfoot>
                    <tr>
                        <th COLSPAN="2">
                            <button className="btnVaciar" onClick={(clear)}>Vaciar Carro</button>                        
                        </th>
                        <th COLSPAN="2">
                            <button className="btnBuy" onClick={(confirmOrder)}>Terminar Compra</button>          
                        </th>
                    </tr>
                  {/*   <form>
                        <label>Nombre:</label>
                        <input type="text"></input>
                    </form> */}
                </tfoot>
            </table>
        )
    }
    return <>
    {cart.length === 0 ? <Link to="/">Volver a Productos</Link>:renderizar()}
    </>
   
}

export default Cart;