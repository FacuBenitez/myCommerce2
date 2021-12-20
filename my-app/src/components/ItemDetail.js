import React from 'react'
import './Item.scss'
import ItemCount from './ItemCount'
import { useContext } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import {CartContext} from './context/CartContext'
import './Item.scss'



const ItemDetail = ({product}) => {
    
    
    const [added, setAdded] = useState(false)
    const [qty, setQty] = useState(0);

    
    const {addItem} = useContext(CartContext)
    
    
    
    

   
    const addToCart = (qty) => {
        // console.log(`agregado al carrito ${qty},${product}`);
        setAdded(true)
        
        setQty(qty)
    }
    
    const handlePurchase =() => {
        addItem(product,qty )
    }
    

    
    
    
    return (
        <div>
           <figure>
                   <img src={product?.img} alt="" />
                   
                   <figcaption>{product?.title}</figcaption>
                   <p className="detail">{product?.description}</p>
                   <p className="price"> {product?.price}</p>
                   
                    {added ?
                    <Link className="Link" to={'/cart'} onClick={handlePurchase}>
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
