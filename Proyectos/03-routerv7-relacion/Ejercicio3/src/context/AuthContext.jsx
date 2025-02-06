import { Children } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";


const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [IsAuthenticate, setIsAuthenticate] = useState(false);

    const login = () => {
        setIsAuthenticate(true);
        localStorage.setItem("isAuthenticate", true)
    }

    const logout = () =>{
        setIsAuthenticate(false);
        localStorage.removeItem("isAuthenticate")

    }


    return (
        <AuthContext.Provider value={{ IsAuthenticate, login, logout}}>
            {Children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error ("useAuth debe estar denro del proveedor AuthProvider")
    }
    return context;
}