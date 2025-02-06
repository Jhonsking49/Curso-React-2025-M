import { Link } from "react-router-dom"

const MovieCard = ({movie}) => {
    return (
        // crearemos un Link que lo envuelva todo para que 
        <Link to={`/movie/:${movie.id}`}>
            <div key={movie.MovieCard} className="">

            </div>
        </Link>
    )
}

export default MovieCard