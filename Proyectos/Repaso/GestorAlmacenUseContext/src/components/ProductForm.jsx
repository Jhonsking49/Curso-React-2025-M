import { useContext, useState } from "react"
import { GestorProvider } from "../context/GestorContext"
import {v4 as uuidv4} from "uuid"

const ProductForm = () => {
    const {tipoObjeto, addObject} = useContext(GestorProvider);
    const [inputNombre, setInputNombre] = useState('');
    const [inputCantidad, setInputCantidad] = useState('');
    const [inputPrecio, setInputPrecio] = useState('');
    const [inputTipo, setInputTipo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputNombre.trim() != '' && inputCantidad.trim() != '' && inputPrecio.trim() != '' && inputTipo.trim() != ''){
            addObject({
                id: uuidv4(),
                nombre: inputNombre,
                tipo: inputTipo,
                cantidad: inputCantidad,
                precio: inputPrecio,
            })
        }
    }

    return (
        <>
            <div>
                <h1 className="text-center bg-amber-300 px-2 py-2 font-bold" onSubmit={handleSubmit}>Formulario del objeto</h1>
                <form className="flex flex-col justify-center items-center">
                    <h3 className="text-2xl">Nombre del producto</h3>
                    <input 
                        type="text"
                        value={inputNombre}
                        onChange={(e)=>setInputNombre(e.target.value)}
                        placeholder="Nombre del objeto"
                        className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full"
                    />
                    <h3>Tipo de producto: </h3>
                    <select className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full">
                        { Object.keys(tipoObjeto).map((tipo, index)=>{
                            <option className="bg-gray-400" key={index} value={inputTipo} onChange={(e)=>setInputTipo(e.target.value)}>{tipo}</option>
                        })}
                    </select>
                    <h3 className="text-2xl">Cantidad del producto a introducir</h3>
                    <input type="number" placeholder="Cantidad" value={inputCantidad} onChange={(e)=>setInputCantidad(e.target.value)}  className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full"/>
                    <h3>Precio del producto</h3>
                    <input type="number" placeholder="Precio" value={inputPrecio} onChange={(e)=>setInputPrecio(e.target.value)} className="border-2 border-gray-300 rounded-lg px-4 py-2 w-full"/>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Guardar</button>
                </form>
            </div>
        </>
    )
}

export default ProductForm