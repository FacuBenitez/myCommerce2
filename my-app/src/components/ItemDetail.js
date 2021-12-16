import React from 'react'
import './Item.scss'
import ItemCount from './ItemCount'



const ItemDetail = ({product}) => {
    
    
    const addToCart = (count) => {
        console.log(`agregado al carrito ${count}`);

    }

    return (
        <div>
           <figure>
                   <img src={product?.img} alt="" />
                   
                   <figcaption>{product?.title}</figcaption>
                   <p className="detail">{product?.description}</p>
                   <p className="price"> {product?.price}</p>
                   

                
                     
                        <ItemCount
                            stock={product?.stock}
                            initial={1}
                            onAdd={addToCart}
                         />
               
                 
               </figure>
               
                   
               
        </div>
    )
}

export default ItemDetail
