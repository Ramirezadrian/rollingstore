import React, {useState} from "react";

function ItemCount({stock, initial}){

    const [contador, setContador] = useState(Number(initial));

    const [st,setStock] = useState(stock);

    const sumarClick = () =>{
        if(contador < st){
        setContador(contador + 1);}
    }


    const restarClick = () =>{
        if(contador >0){
        setContador(contador -1);}
    }

    const onAdd = () =>{
        console.log("Producto agregado");
      /*   if(st>= contador){ */
        setStock(st - contador);
       /*  setContador(st -contador); */
       /*  } */
    }

    return(
        <div className="itemCount">
           
            <button onClick = {restarClick}>-</button>
            <span>{contador}</span>
            <button onClick ={sumarClick}>+</button>
            <div className= "btnAdd">
                <button onClick ={onAdd}>Agregar al Carrito</button>
            </div>
            <div>
                <span>Stock disponible: {st}</span>
            </div>

        </div>

    ) 

}
export default ItemCount