import React, {useState} from "react";

const Context = React.createContext();

export const CartContextProvider = ({children})=>{

    const [cart, setCart]= useState();


    const addItem = (item,quantity)=>{

       /*  if (isInCart(item.id)){
            setCarrito(item);
        }else{
            item.quantity += quantity;
        setCarrito(item);
     
    } */
    setCart(item);
    console.log(cart);
    }

    const removeItem = (itemId) =>{

    }

    const clear = () =>{

    }

    const isInCart = (itemId) =>{
        
        return cart.some(product => product.id === itemId)
    }

    return(
        <Context.Provider value={{
            cart, addItem, removeItem, clear
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context;