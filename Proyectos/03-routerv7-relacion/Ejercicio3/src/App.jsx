import { AuthProvider } from "./context/AuthContext"
import { router } from "./routes"
import { RouterProvider } from "react-router-dom"


const App = () => {
    return (
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    )
}

export default App