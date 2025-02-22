import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {

    const [formdata, setFormdata] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        setFormdata({...formdata, [e.target.name]: e.target.value });
    };

    const {login, error} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        login(formdata);
        if(login.ok){
            console.log("User logged in");
        } else {
            console.error("Error logging in");
        }
    };

    return (
        <div>
            <h1>Login Page</h1>
            <form onChange={handleChange}>
                <input type="text" placeholder="email" />
                <input type="password" placeholder="Password" />
                <button type="submit" onSubmit={handleSubmit}>Login</button>
            </form>
            <a href="/register">Register</a>
        </div>
    )
}

export default LoginPage