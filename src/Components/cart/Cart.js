import React from "react";
import { useContext, useState } from "react";
import CartContext from '../cartContext/CartContext';
import { Link } from 'react-router-dom';
import './cart.css'; 
import  {addDoc, collection, Timestamp} from "firebase/firestore";
import {db} from '../../services/firebase/firebase';

const Cart = () =>{

    const {cart, removeItem, clear, getTotal} = useContext(CartContext);
 /*    const [userInfo,setUserInfo] = useState({
        name: '',
        email: '',
        tel: '',
    }); */

    const confirmOrder = () =>{

      const user = {
          name:document.querySelector('#name').value,
          email:document.querySelector('#email').value,
          tel:document.querySelector('#tel').value
      }

    
        const newOrder = {
            buyer:user,
         /*    buyer : {email : userInfo.email, name:userInfo.name, tel:userInfo.tel}, */
            items: cart,
            date:  Timestamp.fromDate(new Date()), 
            total: getTotal(),
        };

        addDoc(collection(db,'orders'),newOrder).then(({id})=>{
            console.log(id);
        })

        clear();
    }

    const renderizar = ()=>{
        return(
            <div>
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
                </tfoot>
            </table>
            <form>
                <label>Nombre:</label>
                <input type="text" id="name" name="name"></input>
                <label>Email:</label>
                <input type="email" id="email" name="email"></input>
                <label>Telefono:</label>
                <input type="text" id="tel" name="tel"></input>
            </form>
            </div>
        )
    }
    return <>
    {cart.length === 0 ? <Link to="/">Volver a Productos</Link>:renderizar()}
    </>
   
}

export default Cart;