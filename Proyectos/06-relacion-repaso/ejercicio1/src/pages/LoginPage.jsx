import { useState } from "react"
import { useAuth } from "../hooks/useAuth"
import { Navigate } from "react-router-dom";

const LoginPage = () => {
    
    const [formData, setFormData] = useState({
        email: "", password: ""
    })
    
    // hook para trabajar con el login
    const {loginUser} = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevValue=>({
            ...prevValue,
            [name]: value
        })
        )
        console.log(formData)
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            await loginUser(formData);
            Navigate()
        } catch(error) {
            console.log("Error en el login", error)
        }
        
    }

    return (
        <div className="min-j-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <h2 className="mt-2 text-center text-4xl font-bold text-gray-900">
                    Iniciar Sesion
                </h2>
                <form className="mt-8 space-y-8">
                    <div className="">
                        <div>
                        </div>
                    </div>
                    {/** elementos del formulario */}
                    <div>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <label htmlFor="">
                                Email:
                            </label>
                            <input 
                                className="relative block "
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                />
                        </div>
                    </div>
                    <div>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <label htmlFor="">
                                Contraseña:
                            </label>
                            <input 
                                className="relative block "
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={formData.password}
                                onChange={handleChange}
                                />
                        </div>
                    </div>
                    <div>
                        <button onSubmit={handleSubmit}>Iniciar Sesion</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage