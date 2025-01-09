import React from 'react'
import { useState } from 'react'

const Contador = () => {
    // espacio para los hooks



    // espacio para la declarar funciones
    const [total, setTotal] = useState(0);
    function handleIncrementOnClick(numero) {
        setTotal(total +numero);
        console.log(total)
    }

    return (
        <>
        <div >Contador en React</div>
        <h2> Valor del contador: {total}</h2>
        <button onClick={()=>handleIncrementOnClick(1)}>Incrementar</button>
        <button onClick={()=>handleIncrementOnClick(-1)} >Decrementar</button>
        </>
    )
}

export default Contador