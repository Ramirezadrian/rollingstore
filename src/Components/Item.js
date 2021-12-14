import '../Components/Item.css'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount/ItemCount';
const Item = ({product}) => {

    return(
      /*   <div className="card card-center" style="width: 18rem;">
        <img src={product.img} class="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.price}</p>
            <a href="#" class="btn btn-primary">Comprar</a>
        </div>
        </div> */

        <div className="CardItem">
        <div className="ContainerItem">
            <h2 className="ItemHeader">
                {product.name}
            </h2>
        </div>
        <img src={product.img} alt={product.name} className="ItemImg"/>
      
        <p className="Info">
            Precio: {product.price}
        </p>
        <Link to={`/detail/${product.id}`}>Ver Detalle</Link>
        <ItemCount stock="20" initial = "1" />
        </div>
    )
}

export default Item;