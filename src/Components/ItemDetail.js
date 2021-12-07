import '../Components/Item.css'
const ItemDetail = ({product}) => {

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
        
        </div>
    )
}

export default ItemDetail;