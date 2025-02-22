import { createContext, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState(localStorage.getItem("token") || null);

    const login = async (formdata) => {
        const {email, password} = formdata;
        try{
            const response = await fetch(`${API_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                // si lo que envia no es un objeto no hace falta el stringify
                body: JSON.stringify({email, password})
                }
            );
            if(!response.ok){
                throw new Error(error?.message);
            }
            const data = await response.json();
            setUser(data.user);
            setToken(data.token);
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.token));

        } catch(error){
            setError(error);
            setLoading(false);
        }
    }

    const register = async (formdata) => {
        const {name, email, password} = formdata;
        try{
            const response = await fetch(`${API_URL}/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({name, email, password})
                }
            )
            if(!response.ok){
                throw new Error(error?.message);
            }
            const data = await response.json();
            setUser(data.user);
            setToken(data.token);
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.token));
        } catch(error){
            setError(error);
            setLoading(false);
        }
    }

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }

    const value = {
        login,
        logout,
        error,
        user,
        register,
        loading,
        token
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};