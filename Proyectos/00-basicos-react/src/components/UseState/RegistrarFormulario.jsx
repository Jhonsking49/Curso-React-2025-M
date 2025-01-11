import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

// npm install react-toastify


const stateInitial= {
    nombre:'',
    email:'',
    password:''
};
const RegistrarFormulario = () => {
    // hooks
    const [formdata, setformdata] = useState(stateInitial);
    // declaracion de variables

    // declaracion de funciones
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formdata.nombre.trim() || !formdata.email.trim() || !formdata.password.trim()) {
            toast.error("Datos Incompletos");
            return;
        }
        toast.success(`Usuario Registrado con éxito con el nombre: ${formdata.nombre}`);
        // reiniciamos formulario
        setformdata(stateInitial);
    }

    const handleInputChange = (e) =>{
        const {name, value} = e.target;
        setformdata({...formdata, [name]:value});
        console.log(value);

    }

    return (
        <> 
            <div className='max-w-md mx-auto p-6'>
            <ToastContainer />
                <form onSubmit={handleSubmit} className='p-6 bg-white shadow-lg rounded-lg'>
                    <h2 className='text-1xl font-bold text-center text-gray-700 mb-4'>
                        Registrar Usuario
                    </h2>
                    <div className='mb-4'>
                        <label className='block text-gray-700 font-medium mb-2'>
                            Nombre
                        </label>
                        <input 
                            type='text'
                            name='nombre'
                            value={formdata.nombre}
                            onChange={handleInputChange}
                            className='w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-blue-500'
                            placeholder='Ingrese un nombre'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 font-medium mb-2'>
                            Correo electrónico
                        </label>
                        <input 
                            type='email'
                            name='email'
                            value={formdata.email}
                            onChange={handleInputChange}
                            className='w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-blue-500'
                            placeholder='Ingrese su correo electrónico'
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 font-medium mb-2'>
                            Contraseña
                        </label>
                        <input 
                            type='password'
                            name='password'
                            value={formdata.password}
                            onChange={handleInputChange}
                            className='w-full px-3 py-3 border rounded-lg focus:outline-none focus:ring-blue-500'
                            placeholder='Ingrese una contraseña'
                        />
                    </div>
                    <button 
                        type='submit' 
                        className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold -py-2'>
                        Enviar
                    </button>
                </form>
            </div>
        </>
    )
}

export default RegistrarFormulario