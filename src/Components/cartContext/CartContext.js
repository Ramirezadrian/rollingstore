import React, {useState, useContext} from "react";

const Context = React.createContext();

export const CardContext = ({children})=>{

    const [quantity, setQuantity] = useState(0);

    const [productosAgregados, setProductosAgregados]= useState([]);

    const addItem = (item,quantity)=>{

        if (isInCart(item.id)){
            setProductosAgregados(item);
        }else{
            item.quantity += quantity;
        setProductosAgregados(item);
     
    }
    console.log(item + item.quantity);
}

    const removeItem = (itemId) =>{

    }

    const clear = () =>{

    }

    const isInCart = (itemId) =>{
        const existe = productosAgregados.some(producto => producto.id === itemId);
        return existe;
    }

    return(
        <Context.Provider value={{
            carrito: {
                productosAgregados
            },
            addItem
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context;