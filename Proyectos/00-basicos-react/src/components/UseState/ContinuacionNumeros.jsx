import { useState } from 'react'

const ContinuacionNumeros = () => {
    // crea una funcion que añada el numero siguiente a mi array de numeros al ultimo lugar
    const [numbers, setnumbers] = useState([5,4,3,1,4]);

    const addNextNumber = () => {
        const maxNumber = Math.max(...numbers);
        setnumbers((prevNumbers) => [...prevNumbers, maxNumber + 1])
    }
    return (
        <>
        <div>
            <button className="bg-slate-400 rounded mb-2 mx-2" onClick={addNextNumber}>Añade el siguiente numero</button>
        </div>
        </>
    )
}

export default ContinuacionNumeros