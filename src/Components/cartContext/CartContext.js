import React, {useState} from "react";

const Context = React.createContext();

export const CartContextProvider = ({children})=>{

    const [cart, setCart]= useState([]);
    const [cantidadTotal,setCantidadTotal] = useState(0);


    const addItem = (item,quantity)=>{

        const flag = isInCart(item);
        if (flag){
            let repetido  = cart.find(e=> e.item === item );
            repetido.quantity += quantity;
            let cartSinRepetido = cart.find(e=> e.item !== item);
            setCart([...cartSinRepetido, repetido]);
        }else{
            setCart([...cart,{item:item,quantity:quantity}]);
        }
        sumarCantidades();
    console.log(cart);
    }

    const sumarCantidades = () =>{
        let subTotal = 0;
        cart.forEach(e=>{
            subTotal += e.quantity;
        })
        setCantidadTotal(subTotal);
    }

    const removeItem = (item) =>{
        let cartSinItem = cart.find(e=> e.item !== item);
        setCart(cartSinItem);
    }

    const clear = () =>{
        setCart([]);
    }

    const isInCart = (item) =>{
        
        return cart.some(product => product === item)
    }

    return(
        <Context.Provider value={{
            cart,cantidadTotal, addItem, removeItem, clear
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context;