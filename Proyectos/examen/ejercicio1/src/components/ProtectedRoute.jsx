import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {

    const {user, token } = useContext(AuthContext);
    if(!user ||!token) {
        return <Navigate to="/" replace />
    }

    return (
        <div>ProtectedRoute</div>
    )
}

export default ProtectedRoute