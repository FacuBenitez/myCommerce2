import React from 'react'
import './Item.scss'

const ItemDetail = ({product}) => {
    console.log(product)
    return (
        <div>
           <figure>
                   <img src={product?.img} alt="" />
                   
                   <figcaption>{product?.title}</figcaption>
                   <p className="detail">{product?.description}</p>
                   <p className="price"> {product?.price}</p>
                   


               </figure>
        </div>
    )
}

export default ItemDetail
