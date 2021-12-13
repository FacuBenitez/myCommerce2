import React from 'react'
import './Item.scss'

const ItemDetail = ({product}) => {
    return (
        <div>
           <figure>
                   <img src={product?.img} alt="" />
                   
                   <figcaption>{product?.title}</figcaption>
                   <p>{product?.description}</p>
                   <p>{product?.price}</p>
                   


               </figure>
        </div>
    )
}

export default ItemDetail
