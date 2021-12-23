import React from "react";
import { useContext } from "react";
import CartContext from '../cartContext/CartContext';
import './cart.css'; 

const Cart = () =>{

    const {cart} = useContext(CartContext);


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
                    <img src={producto.item.img} className="prdImg"/>
                    <th>{producto.item.name}</th>
                    <th>{producto.quantity}</th>
                </tr>
            })}
            </tbody>
        </table>
    )
}

export default Cart;