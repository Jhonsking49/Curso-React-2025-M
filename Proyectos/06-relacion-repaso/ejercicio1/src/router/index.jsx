import { createBrowserRouter } from "react-router-dom";
import Rootlayout from "../layout/Rootlayout";
import Errorpage from "../pages/Errorpage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Rootlayout />,
        errorElement: <Errorpage />,
        children: [
            {
                index: true,
                element: <LoginPage />
            },
            {
                path: "register",
                element: <RegisterPage />
            },
        ]
    }
])