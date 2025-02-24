import { useState } from "react";
import { createContext } from "react";



export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [token, setToken] = useState();
    const [user, setUser] = useState();

    return (
        <AuthContext.Provider value={{token, user}} >
            {children}
        </AuthContext.Provider>
    )
}