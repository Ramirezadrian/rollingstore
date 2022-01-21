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
           
            <button type="btn" className= "btn btn-warning btn-sm"onClick = {restarClick}>-</button>
            <span>{contador}</span>
            <button type="btn" className= "btn btn-warning btn-sm" onClick ={sumarClick}>+</button>
            <div className= "btnAdd">
               {(stock === 0)? <button disabled>Agregar al Carrito</button>:<button type="btn" className= "btn btn-warning btn-sm" onClick ={()=> onConfirm(contador)}>Agregar al Carrito</button>}
            </div>
            <div>
                <span>Stock disponible: {stock}</span>
            </div>

        </div>

    ) 

}
export default ItemCount