import React from 'react'
import { getProductById } from './products'
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    
    
    const [product, setProduct] = useState([])
    // const {loading, setLoading} = useState(true)
    const  {paramId}  = useParams()
    
    useEffect(() => {
        // setLoading(true)
        
        getProductById(paramId).then(item => {
            setProduct(item)
        })
        // .finally(() =>{setLoading(false)})
        
        
  
        
    }, [paramId])

        
    return (
        <div>
             
             
            
                   <ItemDetail
                    product={product}
                    />
         
        </div>
    )
}

export default ItemDetailContainer
