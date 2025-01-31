import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"


function App() {

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mt-1">
        Gestor de Tareas
        </h1>
      
      </div>
        <TaskForm />
        <TaskList />
    </>
  )
}

export default App
