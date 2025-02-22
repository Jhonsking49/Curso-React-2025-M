import {createBrowserRouter, Navigate} from "react-router-dom"
import RootLayout from "../layout/RootLayout"
import ErrorPage from "../pages/ErrorPage"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"
import ProtectedRoute from "../components/ProtectedRoute"
import ProductPage from "../pages/ProductPage"


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Navigate to="login" replace />,
            },
            {
                path: "login",
                element: <LoginPage />
            },
            {
                path: "register",
                element: <RegisterPage />
            },
            {
                path: "products",
                element: (
                    <ProtectedRoute>
                        <ProductPage />
                    </ProtectedRoute>
                ),
            }
        ]
    }
])