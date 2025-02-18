import { useEffect, useState } from "react";
import { createContext } from "react";


const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [users, setUsers] = useState(()=>{
        const savedTasks = localStorage.getItem('videouser');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(users))
    }, [users])

    const login = (username, password) => {
        setUsers((prevUsers)=>[...prevUsers, {username, password}])
    }

    const logout = () =>{
        setUsers([]);
    }


    return (
        <AuthContext.Provider value={{ users, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}