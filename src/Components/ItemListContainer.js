import ItemCount from "./ItemCount";
import React, {useState} from "react";

const ItemListContainer = ({greeting}) =>{

    
    return(
        <div>
            <h1>{greeting="Bienvenidos a Rolling Store"}</h1>
            <ItemCount stock="20" initial="1" />
        </div>    
    )
}

export default ItemListContainer