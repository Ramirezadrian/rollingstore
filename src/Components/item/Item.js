import '../Item.css';
import { Link } from 'react-router-dom';

const Item = ({product}) => {

    return(
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
        
        </div>
    )
}

export default Item;