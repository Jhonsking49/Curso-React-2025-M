import guitarsolid from "../assets/guitar-solid.svg"


const GuitarComponent = (guitar) => {
    return (
        <div 
        key={guitar.name} 
        className='bg-gray-100 border p-4 mt-4 rounded-ld shadow-md flex items-center'
        >
        <img src={guitarsolid} width={80} alt={guitar.name} className='w-20 h-20 object-cover'/>
        <div>
            <h2 className='text-lg font-bold '>{guitar.nombre}</h2>
            <p className='text-sm'>{guitar.tipo}</p>
            <p className=''>{guitar.precio}</p>
        </div>
        </div>  
    )
}

export default GuitarComponent