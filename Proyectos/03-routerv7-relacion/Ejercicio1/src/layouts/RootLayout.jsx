import { Link, Outlet, useNavigate } from "react-router-dom"
import { isAuthenticaded } from "../helpers/isAuthenticated"

const RootLayout = () => {
    // hacemos un hook para moverme entre rutas useNavigate
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    }

    return (
        <> 
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white shadow-lg">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <Link className="font-bold text-xl hover:text-blue-700" to="/">
                            Home
                        </Link>
                        <Link className="font-bold text-xl hover:text-blue-700" to="/profile">
                            Profile
                        </Link>
                        <Link className="font-bold text-xl hover:text-blue-700" to="/dashboard">
                            Dashboard
                        </Link>
                        {
                            isAuthenticaded() && (
                                <button onClick={handleLogout} className="font-bold text-white bg-red-500 hover:bg-red-800 rounded py-2 px-4"> Cerrar sesion</button>
                            )
                        }
                    </div>
                </div>
            </nav>
            <main className="max-w-6xl mx-auto mt-8 px-4">
                <Outlet />
            </main>
        </div>
        </>
    )
}

export default RootLayout