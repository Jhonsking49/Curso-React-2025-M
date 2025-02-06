import { useNavigate } from "react-router-dom"
import { isAuthenticaded } from "../helpers/isAuthenticated";

const Home = () => {

    const navigate = useNavigate();

    const handleLogin =() => {
        // crear una clave en el localstarge llamada token con el valor 123
        // y a navegate a /dashboard
        localStorage.setItem("token", "123");
        navigate("/dashboard");
    }

    return (
        <div className="text-center">
            {
                !isAuthenticaded ? (
                    <section>
                    <h1 className="text-3xl font-bold mb-8">Bienvenido al Ejericio 1 de React Router Dom v7</h1>
                    <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
                    </section>
                ) : (
                
                <h1 className="text-3xl font-bold ">Ya estas logueado</h1>
                )
            }
        </div>
    )
}

export default Home