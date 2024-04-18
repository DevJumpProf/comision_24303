
/* EXPORTACIONES */
/* export const Counter = () =>{

    return (
<h1> este es un componente contador</h1>
    )
}


export const Counter2 = () =>{

    return (
<h1> este es un componente contador2</h1>
    )
}

 */

import { useState, useEffect } from "react"

export const Counter = () =>{

    const [count,setCount] = useState(0)

    useEffect (()=>{
     alert ("Cambio el contador")
    },[count])

    return (
        <>
      <button onClick={()=>setCount(count+1)}>+</button>
        <p>Numero:{count}</p>
        <button onClick={()=>setCount(count-1)} >-</button>
        </>

    )

}
