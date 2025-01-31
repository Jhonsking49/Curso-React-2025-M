import { useState } from 'react'
import Hijo from './Hijo'

const Padre = () => {
    const [counter, setcounter] = useState(0)
    return (
        <> 
        <div> Hola soy tu padre</div>
        <Hijo counter={counter} setcounter={setcounter} />
        </>
    )
}

export default Padre