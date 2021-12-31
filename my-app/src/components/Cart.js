import React from 'react'
import {useContext, useState} from 'react'
import {CartContext} from './context/CartContext'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import {db} from '../service/firebase'

import {
    addDoc,
    collection,
    doc,
    getDoc,
    writeBatch,
} from 'firebase/firestore';



const Cart = () => {
    
    
    const [form, getForm] = useState({ nombre: '', email: '' });
 
    
    const {cart,removeItem, cleanCart, getCantidad,getUser} = useContext(CartContext);



    const llenarFormulario = (e) => {
        const { name, value } = e.target;
        getForm({
            ...form,
            [name]: value,
        });
    };
    
        const finalizar = () => {
    
    
            getUser(form)
        

        const objOrder = {
            buyer: { email: form.email, nombre: form.nombre },
            items: cart,
            total: getCantidad(),

        };
        
        const batch = writeBatch(db)
        const outOfStock = []

        objOrder.items.forEach((prod) => {
            getDoc(doc(db, 'items', prod.id)).then((docSnap) => {
                if (docSnap.data().stock >= prod.cantidad) {
                    batch.update(doc(db, 'items', docSnap.id), {
                        stock: docSnap.data().stock - prod.cantidad,
                    });
                } else {
                    outOfStock.push({ id: docSnap.id, ...docSnap.data() });
                }
            });
        });
        if (outOfStock.length === 0) {
            addDoc(collection(db, 'orders'), objOrder)
                .then((doc) => {
                    batch.commit().then(() => {
                        console.log(`el num de orden es ${doc.id}`);
                    });
                })
                .catch((error) => {
                    console.error(error);
                })
               .finally(() => {
                  
               })
                
        }
    };

    if(cart.length === 0){
        return(
            <>
                <h1>Tu carrito esta vacio</h1>
                <Link to={'/'}>
                  <Button>Volver al inicio</Button>
                </Link>
            </>
  
           
        )
    }  
    else{
      return (
       <>
         <table class="table table-striped">
              <thead>
                  <tr>
                  <th scope="col">Foto</th>
                  <th scope="col">Descripcion</th>
                  <th>Precio</th>
                  <th scope="col">Cantidad</th>
                  <Button onClick={()=>cleanCart()} variant="outlined" color="error" size="small">Limpiar Carrito</Button>
                  </tr>
              </thead>
              <tbody>
              {cart.map(producto => {
                          return <tr>
                              <td ><img src={producto.img} alt="" /> </td>
                              <td > {producto.description} </td>
                              <td>{producto.cantidad * producto.price}</td>
                              <td > {producto.cantidad} 
                              
                              <Button onClick={()=>removeItem(producto.id)} color="error" variant="contained" size="small">Eliminar</Button>
                              </td>
                              
                          </tr>
              })}
              </tbody>
          </table>
              
              <form action="POST"
              onSubmit={finalizar}
              >
                  <input type="text" 
                      onChange={llenarFormulario}
                      name="nombre"
                      placeholder="Nombre"
                     
  
                  />
                  <input type="email" 
                      onChange={llenarFormulario}
                      name="email"
                      placeholder="Email"
                  />
                  <button
                       disabled={
                                      cart?.length === 0||
                                      form.nombre === '' ||
                                    form.email === ''
                                     
                                  }
                  >
                      Finalizar compra
                  </button>
              </form>
             
      </>     
  
      )   
      
      }


     }

      
     


     
    


export default Cart
