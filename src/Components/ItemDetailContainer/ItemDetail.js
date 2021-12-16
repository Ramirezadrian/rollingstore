import '../Item.css';
import React, {useState} from 'react';
import ItemCount from '../itemCount/ItemCount';
import { Link } from 'react-router-dom';


const ItemDetail = ({product}) => {

    const [count, setCount] = useState(0);

    const onAdd = (count) => {
        console.log(`Agregado al carrito ${count}`);
        setCount(count);
    }
    return(
        <div className="CardItemDet">
        <div className="ContainerItem">
            <h2 className="hDet">
                Detalle del producto
            </h2>
            <h2 className="ItemHeaderDet">
                {product.name}
            </h2>
        </div>
        <img src={product.img} alt={product.name} className="ItemImgDet"/>
      
        <p className="InfoDet">
         {product.detail}
           
        </p>
        <p className="precioDet">
        Precio: {product.price}
        </p>
        {count == 0 ? <ItemCount stock={product.stock} initial = "1" onConfirm={onAdd}/>: <></> }
        <div className = "btnTerminarCompra">
        <Link to="/cart">Terminar Compra</Link>
        </div>
        </div>
    )
}

export default ItemDetail;