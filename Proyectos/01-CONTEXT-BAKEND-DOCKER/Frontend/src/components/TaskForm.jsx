import { useContext, useState } from "react"
import { TaskContext } from "../context/TaskContext"
import { v4 as uuidv4 } from 'uuid';


const TaskForm = () => {
    const [taskNameInput, settaskNameInput] = useState("")
    const {addTask} = useContext(TaskContext);
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(taskNameInput.trim() !=  ""){
            addTask({
                id: uuidv4(),
                title: taskNameInput,
                completed: false,
            });
            settaskNameInput("");
        }
    }
    return (
        <>
            <form className="p-4 bg-gray-300 rounded-lg shadow-md" onSubmit={handleSubmit}>
                <h2 className="text-xl font-bold mb-4">
                    Agregar Tarea
                </h2>
                <input 
                    type="text" 
                    value={taskNameInput} 
                    onChange={e=>settaskNameInput(e.target.value)} 
                    placeholder="Nombre de la tarea"
                    className="w-full p-2 mb-4 border border-gray-400 rounded-md" />
                <button className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-700 text-white">Agregar</button>
            </form>
        </>
    )
}

export default TaskForm