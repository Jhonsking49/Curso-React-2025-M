// protecion de rutas de un componente usando una funcion
// isAuthenticaded
import { Navigate, createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Dashboard from "../pages/Dashboard";
import RootLayout from "../layouts/RootLayout";
import { isAuthenticaded } from "../helpers/isAuthenticated";



const ProtectedRoute = ({children}) => {
    if(!isAuthenticaded) {
        return <Navigate to="/" replace={true} />
    }
    return children;
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <Error />,
        children: [{
            index: true, // es la ruta por defecto
            element: <Home />,
        },
        {
            path:"profile",
            element: (
            <ProtectedRoute>
                <Profile />
            </ProtectedRoute>
            ),
        },
        {
            path:"dashboard",
            element: (
            <ProtectedRoute>
                <Dashboard />
            </ProtectedRoute>
            ),
        }]
    }
])