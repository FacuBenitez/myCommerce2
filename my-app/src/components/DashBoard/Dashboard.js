import React from 'react'
import {
    collection,
    getDocs,
    query,
} from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from '../context/CartContext'
import { db } from '../../service/firebase'
import Button from '@mui/material/Button';
import './DashBoard.scss'

const Dashboard = () => {
    const [order, setOrder] = useState([]);
    const { userEmail } = useContext(CartContext);
    const { email } = userEmail;

    useEffect(() => {

        const ref = query(collection(db, 'orders'));
        getDocs(ref).then((snapshot) => {
            const orden = snapshot.docs.map((doc) => {
                const data = doc.data();
            
                return {
                    id: doc.id,
                    ...data,
                    
                };
            });
            setOrder(orden.filter((ticket) => ticket.buyer.email === email));
        });
    }, [email]);



    console.log(order)


    return (
        <div>
            <h1>Gracias por su compra aqui esta su orden</h1>

            <section>{order.map(order => {
                return <>
                            
                            <h5>{order.buyer.email}</h5>
                            <p>{order.id}</p>
                        </>
                    
            })}</section>

            <Button >
                <Link to={'/'}> Volver al inicio</Link>     
            </Button>
        </div>
 
    )
}

export default Dashboard
