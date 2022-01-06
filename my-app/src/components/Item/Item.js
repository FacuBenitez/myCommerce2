import React from 'react'
import './Item.scss'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
    
    
    return (
        <div className="item-container">
           

            
               <article>
                   <picture>
                        <img src={item.img} alt="" />
                   </picture> 
                    
                   
                   <figcaption>{item.name}</figcaption>
                   <Link className="btn" to={`/item/${item.id}`}>Ver detalle</Link>


               </article>
           
            
        </div>
    )
}

export default Item
