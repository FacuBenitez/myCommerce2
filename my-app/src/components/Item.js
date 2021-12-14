import React from 'react'
import './Item.scss'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
    
    
    return (
        <div>
            
               <figure>
                   <img src={item.img} alt="" />
                   
                   <figcaption>{item.name}</figcaption>
                   <Link className="btn" to={`/item/${item.id}`}>Ver detalle</Link>


               </figure>
           
            
        </div>
    )
}

export default Item
