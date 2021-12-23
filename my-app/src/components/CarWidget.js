import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {useContext} from 'react'
import { CartContext } from './context/CartContext';


const CarWidget = (props) => {
    
    
    const {getCantidad} = useContext(CartContext)
    

    return (
      
        
            <div style={{display: 'flex',}}>

               
               
                <AddShoppingCartIcon style={{color: '#F58840'}} />
               
                
               {getCantidad()>0 &&  <p>
                 {getCantidad()}
                 </p> 
              
               }
            </div>
           
       
    ) 
}

export default CarWidget
