import { useState } from "react";
import { createContext } from "react";


const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = async (username, password) => {
        try{
            const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    password
                }),
                credentials: "include",
            });
            if(!response.ok){
                return {sucess: false, message: "Usuario o contraseña incorrecta"}
            }
            setIsAuthenticated(true);
            return {sucess: true, message: "Usuario logueado correctamente"}

        } catch(error){
            console.error(error);
        }
    }

    //checkauth comprueba si el usuario esta logeado

    // lobin

    // logout

    // register

    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext