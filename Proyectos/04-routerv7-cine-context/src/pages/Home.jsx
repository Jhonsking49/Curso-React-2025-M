import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"



const Home = () => {
    const [movies, setMovies] = useState([]);

    const fetchingDataMovies = async () => {
        const api_token = import.meta.env.VITE_API_TOKEN
        const response = await fetch (`https://api.themoviedb.org/3/movie/popular?api key=${api_token}`)
        if(!response) {
            throw new Error (" Error al fetchear la data")
        }
        const data = await response.json();
        setMovies(data.results);
    }

    useEffect(() => {
        fetchingDataMovies();
    }, [])
    
    return (
        <div className="space-y-8">
            <header className="text-center">
                <h1 className="text-4xl font-bold text-sky-900">
                    Bienvenido a Movie App
                </h1>
                <p className="text-gray-600 mt-2">
                    La mejor aplicacion para buscar películas y leer reseñas de cine
                </p>
            </header>
            {/* Seccion peliculas populares */}
            <section>
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">
                        Peliculas populares
                    </h2>
                    <Link to="/movies" className="text-sky-900 hover:underline" > Ver todas</Link>
                </div>
            </section>
            {/* Grid de las películas */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {
                    // el ? en movies?.map es una medida de seguridad en caso de que movies no devuelva un array
                    movies?.map((movie) => {
                        <div key={movie.id}>

                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Home