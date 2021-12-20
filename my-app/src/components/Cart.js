import React from 'react'
import {useContext} from 'react'
import {CartContext} from './context/CartContext'
import Button from '@mui/material/Button';

const Cart = () => {
    
    
    const {cart} = useContext(CartContext);
    const{removeItem} = useContext(CartContext)
    const{cleanCart} = useContext(CartContext)


    return (
        <table class="table table-striped">
        <thead>
            <tr>
            <th scope="col">Foto</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Cantidad</th>
            <Button onClick={()=>cleanCart()} variant="outlined" color="error" size="small">Limpiar Carrito</Button>
            </tr>
        </thead>
        <tbody>
        {cart.map(producto => {
                    return <tr>
                        <td ><img src={producto.img} alt="" /> </td>
                        <td > {producto.description} </td>
                        <td > {producto.cantidad} 
                        
                        <Button onClick={()=>removeItem(producto.id)} color="error" variant="contained" size="small">Eliminar</Button>
                        </td>
                        
                    </tr>
        })}
        </tbody>
    </table>
    )
}

export default Cart
