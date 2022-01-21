import '../Item.css';
import React, {useState,useContext} from 'react';
import ItemCount from '../itemCount/ItemCount';
import { Link } from 'react-router-dom';
import CartContext from '../cartContext/CartContext';


const ItemDetail = ({product}) => {

   const {addItem, getTotal} = useContext(CartContext);
 
    const [count, setCount] = useState(0);
    let emptyCart = getTotal();
   

    const onAdd = (count) => {
        console.log(`Agregado al carrito ${count}`);
        setCount(count);
        addItem(product,count);
    }

    return(
        <div className="cardItemDet">
        <div className="containerItem">
            <h2 className="hDet">
                Detalle del producto
            </h2>
            <h2 className="itemHeaderDet">
                {product.name}
            </h2>
        </div>
        <img src={product.img} alt={product.name} className="itemImgDet"/>
      
        <p className="infoDet">
         {product.detail}
           
        </p>
        <p className="precioDet">
        Precio: {product.price}
        </p>
        {count === 0 ? <ItemCount stock={product.stock} initial = "1" onConfirm={onAdd}/>: <></> }
        <div>
        {emptyCart !== 0 ? <Link to="/cart" type="button" className="btn btn-dark">Terminar Compra</Link>:<></>}
        </div>
        </div>
    )
}

export default ItemDetail;