import '../Components/Item.css'
const ItemDetail = ({product}) => {

    return(
    

        <div className="CardItemDet">
        <div className="ContainerItem">
            <h2 className="ItemHeader">
                {product.name}
            </h2>
        </div>
        <img src={product.img} alt={product.name} className="ItemImgDet"/>
      
        <p className="InfoDet">
            Detalle: {product.detail}
           
        </p>
        <p className="Info">
        Precio: {product.price}
        </p>
        
        </div>
    )
}

export default ItemDetail;