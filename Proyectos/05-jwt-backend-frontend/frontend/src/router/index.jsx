import { createBrowserRouter } from "react-router-dom";
import Rootlayout from "../layouts/Rootlayout";
import Errorpage from "../pages/Errorpage";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "../components/ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Rootlayout />,
        errorElement: <Errorpage />,
        children: [
            {
                index: true,
                element: <Homepage />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "dashboard",
                element: (
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                )
            }
        ]
    }
])