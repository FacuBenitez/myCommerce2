import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {useContext} from 'react'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';


const CarWidget = (props) => {
    
    
    const {getCantidad} = useContext(CartContext)
    

    return (
      
        
            <div style={{display: 'flex',}}>

               
               
               <Link to={'/cart'}>
               <AddShoppingCartIcon style={{color: '#F58840'}} />
               </Link> 
               
                
               {getCantidad()>0 &&  <p>
                 {getCantidad()}
                 </p> 
              
               }
            </div>
           
       
    ) 
}

export default CarWidget
