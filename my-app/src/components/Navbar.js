import React from 'react'
import './NavbarStyles.scss';
import CarWidget from './CarWidget';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getCategories } from './products';


const Navbar = () => {
    
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then(categories =>{
            setCategories(categories)
        })

        
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
