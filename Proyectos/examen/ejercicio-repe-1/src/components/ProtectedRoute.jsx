import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
        const data = localStorage.getItem("token");

        if (!data) {
        return <Navigate to="/login" replace={true} />;
        }
        return children;
    };

export default ProtectedRoute;
