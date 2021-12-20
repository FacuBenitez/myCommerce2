import React from 'react'
import ItemList from './components/ItemList'
import { getProducts } from './components/products'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
    
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
    

    useEffect(() => {
        getProducts(categoryId).then(list => {
            setProducts(list);
        })  
        
       
    },[categoryId])

    return (
        <div>
           

                <ItemList
                items={products}
                />
          
          

            
        </div>
    )
}

export default ItemListContainer
