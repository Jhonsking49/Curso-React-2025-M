import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

const LoginPage = () => {

    const {auth, setAuth, login} = useContext(AuthContext);
    const [text, setText] = useState("");
    const [password, setPassword] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
        setPassword(e.target.value);
    }



    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="">
                <h2 className="text-3xl font-bold">Iniciar Sesión</h2>
                <p className="text-sm">Ingresa tus credenciales para iniciar sesión</p>
            </div>
            <div className="flex flex-col items-center justify-center w-full mt-10">
                <input type="text" placeholder="Usuario" className="mb-4 rounded-md bg-gray-200 p-2" />
                <input type="password" placeholder="Contraseña" className="mb-4 rounded-md bg-gray-200 p-2" />
                <button onClick={()=>login(text, password)}>Iniciar Sesión</button>
            </div>
        </div>
    )
}

export default LoginPage