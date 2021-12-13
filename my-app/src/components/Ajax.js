import React, { useState, useEffect } from 'react';




function Pokemon({avatar, name}){

    return(

        <figure>
            <img src={avatar} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>


    )

}

const Ajax = (params) => {
    const [pokemons, setpokemons] = useState([])

    useEffect(() => {
       
        const getPokemon = async (url) =>{
            let res = await fetch(url),
                json = await res.json();

        
            json.results.forEach(async (el) =>{
                let res = await fetch(el.url),
                json = await res.json();



                let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default,
    
    
                }; 
    
                setpokemons((pokemons) =>[...pokemons, pokemon]);
            })



            let pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default,


            }; 

        }
        getPokemon("https://pokeapi.co/api/v2/pokemon/")
     
        },[]);


    }

    return(
        <>
        <h2>Peticiones asincronas con hooks</h2>
        {pokemons.lenght === 0 ?(

            <h3>cargando</h3>
        ):(
            pokemons.map((el)=>{
                
            })
        )}



        </>


    )



export default Ajax
