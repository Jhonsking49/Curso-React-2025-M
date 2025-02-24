import {createBrowserRouter} from "react-router-dom"
import RootLayout from "../layout/RootLayout"
import ErrorPage from "../pages/ErrorPage"
import LoginPage from "../pages/LoginPage"
import ProtectedRoute from "../components/ProtectedRoute"
import CreateProductPage from "../pages/CreateProductPage"
import HomePage from "../pages/HomePage"
import EditProductPage from "../pages/EditProductPage"
import ProductDetailPage from "../pages/ProductDetailPage"
import DeleteProductPage from "../pages/DeleteProductPage"


export const router = createBrowserRouter([
    
    {
        path: "/login",
        element: <LoginPage />
    },
    {    
        path: "/",
        element: (
            <ProtectedRoute>
                <RootLayout />    
            </ProtectedRoute>
        ),
        errorElement: <ErrorPage />,
        children: [
                    {
                        index: true,
                        element: <HomePage />,
                    },
                    {
                        path: "products/create",
                        element: <CreateProductPage />,
                    },
                    {
                        path: "products/edit/:id",
                        element: <EditProductPage />,
                    },
                    {
                        path: "products/:id",
                        element: <ProductDetailPage />
                    },
                    {
                        path:"products/delete/:id",
                        element: <DeleteProductPage />,
                    }
        ]
    }
])