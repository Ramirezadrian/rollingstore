import React from "react";
import { useContext } from "react";
import CartContext from '../cartContext/CartContext';
import { Link } from 'react-router-dom';
import './cart.css'; 

const Cart = () =>{

    const {cart, removeItem} = useContext(CartContext);

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
                        <th><Link key = {producto.item.id} to={`/detail/${producto.item.id}`}><img src={producto.item.img} className="prdImg"/></Link></th>
                        <th>{producto.item.name}</th>
                        <th>{producto.quantity}</th>
                        <th><button className="btnTbl" onClick={()=> removeItem(producto.item)}>X</button></th>
    
                    </tr>
                })}
                </tbody>
            </table>
        )
    }
    return <>
    {cart.length == 0 ? <Link to="/">Volver a Productos</Link>:renderizar()}
    </>
   
}

export default Cart;