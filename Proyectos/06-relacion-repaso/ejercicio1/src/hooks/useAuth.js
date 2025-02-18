import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
    const context = useContext(AuthContext);

    if(!context) {
        throw new Error("useAuth must be used within a AuthProvider");
    }

    const { user, token, isAuthenticated, authError, setAuthError, login, logout } = context;

    const registerUser = async (userData) => {
        try{
            const response = await fetch("http://192.168.50.134:3000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });
            if(!response.ok){
                throw new Error("error al registrarse");
            }
            const data = await response.json();
            login(data.user, data.token);
            
            return data;
        } catch (error){
            setAuthError(error.message)
            throw new Error("error al registrar")
        }
    }

    const loginUser = async (userData) => {
        try{
            const response = await fetch("http://192.168.50.134:3000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });
            if(!response.ok){
                throw new Error("error al loguearse")
            }
            const data = await data.json();
        }catch(error){
            setAuthError(error)
            throw new Error("error al loguearse")
        }
    }

    return { user, token, isAuthenticated, authError, setAuthError, logout, registerUser, loginUser };
}