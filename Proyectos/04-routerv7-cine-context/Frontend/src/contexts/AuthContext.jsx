import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        username: "",
        password: ""
    });

    const login = (username, password) => {
        setAuth({
            username: username,
            password: password
        });
    }

    return (
        <AuthContext.Provider value={{ auth, setAuth, login }}>
            {children}
        </AuthContext.Provider>
    );
}