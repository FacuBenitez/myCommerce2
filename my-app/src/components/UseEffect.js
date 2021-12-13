import React, { useEffect, useState } from 'react'



const Learning = () => {
    const[ counter1, setCounter1] = useState(0);
    const[ counter2, setCounter2] = useState(0);
    
    useEffect(() => {
        
        console.log("use effect se esta ejecutando")


    }, [counter1])

    return(

        <>
            <h3>Contador de clicks {counter1} </h3>
            <h3>contador de cliks {counter2}</h3>

            <button onClick={()=>{setCounter1(counter1 +1)}} >counter 1</button>
            <button onClick={()=>{setCounter2(counter2 +1)}} > counter 2</button>

        </>

    )



}


export default Learning