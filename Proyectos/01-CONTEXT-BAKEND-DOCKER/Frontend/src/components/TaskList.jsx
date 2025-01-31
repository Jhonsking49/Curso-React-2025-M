import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

const TaskList = () => {
    const {tasks, deleteTask, toggleTaskCompletion} = useContext(TaskContext);

    const handleDelete = (taskId) => {
        deleteTask(taskId)
    }

    const handleChangeState = (taskId) => {
        toggleTaskCompletion(taskId);
    }
    const handleEdit = (taskId) => {
        
    }
    return (
        <div className="p-4 bg-gray-300 rounded-lg mt-10 mb-5 shadow-md">
        <h2 className="text-xl font-bold mb-4  text-center">
            Lista de tareas
        </h2>
        {tasks.length === 0 && (<span className="text-xl text-gray-700 text-center">No hay tareas</span>)}
        <ul>
            {
                tasks.map(task => (
                    <li key={task.id} className="flex justify-between items-center p-2 mb-2 bg-white rounded-md shadow-md">
                        <span className={`flex-1 ${task.completed != true ? "line-through text-gray-600" : ""}`}>{task.title}</span>
                        <button className="px-3 py-1 bg-red-500 text-white rounded mr-2" onClick={()=> handleDelete(task.id)} value={task.id}>Eliminar</button>
                        <button className="px-3 py-1 bg-blue-500 text-white rounded mr-2" onClick={()=>handleChangeState(task.id)} value={task.id}>Completar</button>
                        <button className="px-3 py-1 bg-blue-500 text-white rounded mr-2" onClick={()=>handleEdit(task.id)} value={task}>Editar</button>

                    </li>
                )
                )
            }
        </ul>
        </div>
    )
}

export default TaskList