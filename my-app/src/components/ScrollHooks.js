import React, {useState, useEffect } from 'react'


export default function ScrollHooks(){
    const[scrollY,setScrollY] =useState(0)
    
    
    useEffect(() => {
        console.log('Fase de actualizacion');

        const detectarScroll =() => setScrollY(window.pageYOffset);

        window.addEventListener('scroll', detectarScroll);
    
        
    });
    
    
    return(
        

        <>
            <h2>Hooks- useEffect y el ciclo de vida</h2>
            <p>Scroll y del navegador {scrollY}px</p>
        
        
        
        </>




        )
}