import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import Names from './Names';


const Api =() => {
    
    const url = 'https://jsonplaceholder.typicode.com/users'
    const [user, setUser] = useState()
   
    
    const fetchApi = async () => {
        const response = await fetch(url)

        const responseJson = await response.json()

        setUser(responseJson)

        console.log(responseJson)
        console.log("hola mundo");
    }

    useEffect(() => {
        
       fetchApi()
    }, [])


   
    
  return(
      
    <ul>
        {
            !user ? 'Cargando...' : user.map((user, index) => 

                <Names 
                        name={user.name}
                        email={user.email}
                />
                
                        
            )
        }
    </ul>

  )

 


}

export default Api