import { Navigate } from "react-router-dom";
import { Link, Outlet } from "react-router-dom"

const RootLayout = () => {
    
    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        <Navigate to="/login" />
        window.location.reload();
    }

    return (
        <>
            <div >
                <div>
                    <button onClick={handleLogout} className="bg-gray-400 rounded-md">
                        logout
                    </button>
                </div>
                <Outlet />
            </div>
        </>
        
    )
}

export default RootLayout