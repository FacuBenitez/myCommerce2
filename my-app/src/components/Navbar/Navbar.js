import React from 'react'
import './NavbarStyles.scss';
import CarWidget from '../CartWidget/CarWidget';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';

import{db } from '../../service/firebase'

import{getDocs, collection} from 'firebase/firestore'


const Navbar = () => {
    
    const [categories, setCategories] = useState([])

    useEffect(() => {
       getDocs(collection(db,'categories')).then(querySnapshot=>{
           const categories = querySnapshot.docs.map(doc =>{
               return {id: doc.id, ...doc.data()}
           })

           setCategories(categories)
       })
        // getCategories().then(categories =>{
        //     setCategories(categories)
        // })
        
        
    }, [])
    
    
    return (
        <>
            <nav>
              <Link className="Brand" to={'/'}>Mycommerce</Link>
                {categories.map(category => <Link className='Link' key={category.id} to={`/category/${category.id}`}>  {category.description}</Link>)}



                <CarWidget/>
            </nav>



        </>
    )
}

export default Navbar
