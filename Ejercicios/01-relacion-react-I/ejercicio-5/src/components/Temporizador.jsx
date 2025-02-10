import { useEffect } from 'react';
import { useState } from 'react'

const Temporizador = () => {
    const [Tiempo, setTiempo] = useState(60);
    

    useEffect(() => {
        if(Tiempo <= 0) return;

        const timer = setInterval(() => {
            setTiempo((prev) => prev - 1)
        }, 1000)

        return () => clearInterval(timer);
    
    }, [Tiempo])
    

    return (
        <div className='bg-sky-300 align-center font-bold text-center '>
            <h1>Cuenta atras</h1>
            <div className='flex flex-col items-center justify-center min-h-screen'>
                <h2 className='text-3xl'>{Tiempo}</h2>
            </div>
        </div>
    )
}

export default Temporizador
