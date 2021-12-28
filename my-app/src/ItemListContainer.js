import React from 'react'
import ItemList from './components/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {db} from './service/firebase'
import{collection, getDocs, query, where} from 'firebase/firestore'

const ItemListContainer = () => {
    
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
    

    useEffect(() => {
        if(!categoryId) {

            getDocs(collection(db,'items')).then((querySnapshot) => {
            const products = querySnapshot.docs.map(doc => {

                    return {id: doc.id, ...doc.data()}
                })
                
                setProducts(products)
            })
        }
        else{
            getDocs(query(collection(db,'items'),where('category', '==',categoryId))).then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => {
    
                        return {id: doc.id, ...doc.data()}
                    })
                    
                    setProducts(products)
                })
        
        }
        
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
