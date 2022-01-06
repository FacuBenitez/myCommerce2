import React from 'react'
// import { getProductById } from './products'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { db } from '../../service/firebase'
import {getDoc, doc} from 'firebase/firestore'

const ItemDetailContainer = () => {
    
    
    const [product, setProduct] = useState([])
    // const {loading, setLoading} = useState(true)
    const  {paramId}  = useParams()
    
    useEffect(() => {
        // setLoading(true)
        getDoc(doc(db, 'items', paramId)).then((querySnapshot)=>{
            const product = {id: querySnapshot.id, ...querySnapshot.data()}
            
            setProduct(product)
        }).catch((error) => {
            console.log(error);
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
