import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
    if (!token) {
        console.log("token", token);
        // return <navigate to="/" />;
        return <Navigate to="/login" />;
    } else {
        return <>  
            {children}
        </>;
    }
};

export default ProtectedRoute;