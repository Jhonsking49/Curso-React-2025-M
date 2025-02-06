import { createBrowserRouter } from "react-router-dom"
import RootLayout from "../layouts/RootLayout"
import Error from "../pages/Error"
import Login from "../pages/Login"
import AdminLayout from "../layouts/AdminLayout"
import ProtectedRoute from "../components/ProtectedRoute"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorelement: <Error />,
        children: [
            {
                index:true,
                element:<Login />
            },
            {
                path:"/admin",
                element: (
                    <ProtectedRoute>
                        <AdminLayout />
                    </ProtectedRoute>
                ),
                children :[
                    {

                    },
                    {

                    }
                ]
            }
        ]
    }
])