import { useEffect, useState } from "react"

const Timer = () => {
    const [counter, setcounter] = useState(0)
    useEffect(() => {
        // nunca utilizar funciones asincronas en useEffect
        console.log("Componente montado SOLO UNA VEZ")
        // SI NO SE LE PASA UN ARRAY DE DEPENDENCIAS SE EJECUTA CADA VEZ QUE SE RENDERIZA EL COMPONENTE

    }, [counter])
    
    return (
        <> 
        <div>Timer: {counter}</div>
        <button onClick={()=> setcounter(counter + 1)}>Aumentar</button>
        </>
    )
}

export default Timer