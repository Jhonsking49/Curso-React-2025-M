import { useState } from 'react'
import Hijo2 from './Hijo2'

const Padre2 = () => {
    const [counter, setcounter] = useState(0)
    return (
        <> 
        <div> Hola soy tu padre</div>
        <Hijo2 counter={counter} setcounter={setcounter} />
        </>
    )
}

export default Padre2