import React from 'react'
import { themeContext } from './context/CartContext'
import './Item.scss'
import ItemCount from './ItemCount'
import { useContext } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import './Item.scss'


const ItemDetail = ({product}) => {
    
    
    const [added, setAdded] = useState(false)
   

    const addToCart = (count) => {
        console.log(`agregado al carrito ${count},${product.name}`);
        setAdded(true)

    }

    return (
        <div>
           <figure>
                   <img src={product?.img} alt="" />
                   
                   <figcaption>{product?.title}</figcaption>
                   <p className="detail">{product?.description}</p>
                   <p className="price"> {product?.price}</p>
                   
                    {added ?
                    <Link className="Link" to={'/cart'}>
                        Finalizar compra
                    </Link>
                        :
                        <ItemCount
                            stock={product?.stock}
                            initial={1}
                            onAdd={addToCart}
                         />
               
                    }
                
                     
                 
               </figure>
               
                   
               
        </div>
    )
}

export default ItemDetail
