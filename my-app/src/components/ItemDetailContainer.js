import React from 'react'
import { getProductById } from './products'
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState([])
    const {loading, setLoading} = useState(true)
    const  {id}  = useParams()
    
    useEffect(() => {
        setLoading(true)
        
        getProductById(id).then(item => {
            setProduct(item)
        })
        .finally(() =>{setLoading(false)})
        
        
  
        
    }, [id, setLoading])

        
    return (
        <div>
   
         {       
             loading ? <h2>Cargando...</h2>  
                :   <ItemDetail
                    product={product}
                    />
         }
        </div>
    )
}

export default ItemDetailContainer
