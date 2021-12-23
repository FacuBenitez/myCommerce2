import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);
        // const[cantidad, setCantidad] = useState(0)
   
    

    
    const getCantidad = () => {
        let subTotal =0;
        cart.forEach(elemento=> {
            // console.log(elemento);
            subTotal += elemento.cantidad
        })
        return subTotal;
       
    }
    


    const addItem = (producto, quantity) => {
        // console.log(producto)
        const flag = isInCart(producto.id);
        console.log(flag);
        if (flag) {
            let productoRepetido = cart.find (elemento => elemento.id === producto.id);
            productoRepetido.cantidad += quantity;   
            let cartSinRepetido = cart.filter (elemento => elemento.id !== producto.id);
            setCart([...cartSinRepetido, productoRepetido]);
            
        } else {
            setCart([...cart, {...producto, cantidad: quantity}]);
        }
        // getCantidad()
        
    }
   


    const isInCart = (item) => {
        
        return cart.some(producto => producto.id === item);
    }

    const removeItem = (itemId) => {
       return setCart(cart.filter(element => element.id !== itemId));

        
    }

    const cleanCart = () => {
        return setCart([]);
    }


    return(
        <CartContext.Provider value = {{
            cart,
            addItem, removeItem, cleanCart, getCantidad, isInCart,
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;