import React, {useState} from "react";

function ItemCount({stock, initial, onConfirm}){
    
    
    const [contador, setContador] = useState(Number(initial));

    const sumarClick = () =>{
        if(contador < stock){
        setContador(contador + 1);}
    }


    const restarClick = () =>{
        if(contador >0){
        setContador(contador -1);}
    }

    
    return(
        <div className="itemCount">
           
            <button onClick = {restarClick}>-</button>
            <span>{contador}</span>
            <button onClick ={sumarClick}>+</button>
            <div className= "btnAdd">
                <button onClick ={()=> onConfirm(contador)}>Agregar al Carrito</button>
            </div>
            <div>
                <span>Stock disponible: {stock}</span>
            </div>

        </div>

    ) 

}
export default ItemCount