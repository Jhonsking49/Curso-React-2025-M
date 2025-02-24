import { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RootLayout = () => {

    const { logout } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogout = () =>{
        logout();
        navigate("/login");

    }

    return (
        <>
        <div className="flex">
            <div className="bg-gray-400 px-2 py-4">
            <div>
                <Link to="/products/new" > Crear nuevo producto</Link>
            </div>
            <div>
                <Link to="/products" > Productos</Link>
            </div>
            </div>
            <button onClick={handleLogout} className="bg-amber-200 hover:bg-amber-600">Cerrar sesion</button>
        </div>
        <Outlet />
        <p>footer</p>
        </>
    );
};

export default RootLayout;
