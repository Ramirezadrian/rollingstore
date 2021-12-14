import Item from "./Item";
import '../index.css'

const ItemList = ({products = []}) => {
    console.log("Productos de ItemList: ", products);
    return (
        <ul className="ListGroup">
            {products.map(product => <Item key={product.id} product = {product}/>)}
        </ul>
    )
}

export default ItemList;