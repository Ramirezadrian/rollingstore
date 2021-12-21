import React, {useState} from "react";

const Context = React.createContext();

export const CardContextProvider = ({children})=>{

    const [carrito, setCarrito]= useState();


    const addItem = (item,quantity)=>{

       /*  if (isInCart(item.id)){
            setCarrito(item);
        }else{
            item.quantity += quantity;
        setCarrito(item);
     
    } */
    setCarrito(item);
    console.log(carrito);
    }

    const removeItem = (itemId) =>{

    }

    const clear = () =>{

    }

    const isInCart = (itemId) =>{
        const existe = carrito.some(producto => producto.id === itemId);
        return existe;
    }

    return(
        <Context.Provider value={{
            carrito, addItem, removeItem, clear
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context;