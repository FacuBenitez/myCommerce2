import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Item.scss'


const ItemCount = ({stock, initial,onAdd }) => {
    
    const [count, setCount] = useState(0)


    const IncrementCount = () => {
        if(stock> count){

            setCount(count+1)
        }

    }
    
    const DecrementCount = () => {
        if(count> initial){
            setCount(count-1)
        }
    } 
        
  
        
    return (
        <div>
            
            <h5>{count}</h5>
            <button onClick={IncrementCount}>+ </button>
            <button onClick={DecrementCount}>-</button>
            {count > 0 &&(
                <Link to={'/cart'}>
                    <button className="btn-add" onClick={()=> onAdd(count)}>Agregar al carrito</button>
                </Link>
            )}

            <Link className="Link" to={'/'}>Regresar</Link>
        </div>
    )

    }
   
    



export default ItemCount
