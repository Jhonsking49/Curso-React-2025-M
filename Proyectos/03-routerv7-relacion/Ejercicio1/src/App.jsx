import { RouterProvider } from "react-router-dom"
import { router } from "./router"
import RootLayout from "./layouts/RootLayout"

const App = () => {
    return (
      <RouterProvider router={router} />
    )
}

export default App