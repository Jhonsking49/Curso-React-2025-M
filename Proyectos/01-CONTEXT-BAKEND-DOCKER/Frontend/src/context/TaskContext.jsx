// importar
import { createContext, useEffect, useState } from "react";


// crear el contexto
export const TaskContext = createContext();

//crear el provider
export const TaskProvider = ({ children }) => {
    
    /**
     *  task = {
     * id: 1,
     * title: 'Tarea 1',
     * completed: false
     * }
     */
    //HOOKS
    // aqui crearemos las funciones que le pasaremos a los children
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    // Acciones que puedo reailizar con las tareas
    // crear tareas
    const addTask = (task) => {
        setTasks((prevTasks)=>[...prevTasks, task])
    }
    // editar tareas
    const editTask = (taskId, newtask) =>{
        setTasks((prevTasks)=>prevTasks.map(task => task.id === taskId ? {...task, title: newtask } : task))
    }
    
    // completar tareas
    const toggleTaskCompletion = (taskId) => {
        setTasks((prevTasks)=>prevTasks.map(task => task.id === taskId ? {...task, completed: !task.completed } : task))
    }
    // eliminar tareas
    const deleteTask = (taskId) => {
        setTasks((prevTasks)=>prevTasks.filter((task)=> task.id != taskId))
    }

    


    return (
        //value es la props del provider, en la que se pasa en este caso un objeto 
        <TaskContext.Provider value={{tasks, addTask, deleteTask, toggleTaskCompletion, editTask}}>
            {children}
        </TaskContext.Provider>

    );
}