import React, {useState} from "react";

const Context = React.createContext();

export const CartContextProvider = ({children})=>{

    const [cart, setCart]= useState([]);
 
    const addItem = (item,quantity)=>{

        const flag = isInCart(item);
       
        if (flag){
            let repetido  = cart.find(e=> e.item.id=== item.id );
            repetido.quantity += quantity;
            let cartSinRepetido = cart.filter(e=> e.item.id !== item.id);
            setCart([...cartSinRepetido, repetido]);
        }else{
            setCart([...cart,{item:item,quantity:quantity}]);
        }
            
    console.log(cart);
   
    }
    const getTotal = () => {
        let subTotal = 0;
        cart.forEach(e=>{
            subTotal += e.quantity;
        });
        return subTotal;
    }
    const finalPrice = () =>{
        let total = 0;
        cart.forEach((e) =>{
            total += (e.quantity*e.item.price); 
        })
        return total;
    }
   
    const removeItem = (item) =>{
        
        let cartSinItem = cart.filter(e=> e.item !== item);
        setCart(cartSinItem);
        
    }

    const clear = () =>{
        setCart([]);
    }

    const isInCart = (item) =>{
        
        return cart.some(product => product.item.id === item.id)
    }

    return(
        <Context.Provider value={{
            cart,getTotal, addItem, removeItem, clear, finalPrice
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context;