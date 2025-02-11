import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch";
import { getImageUrl, getMovieDetail } from "../services/tmdb";
import { PacmanLoader } from "react-spinners";

const MovieDetail = () => {

    const {id} = useParams();
    const [movie, loading, error] = useFetch(()=> getMovieDetail(id), [id]);

    if(error){
        return (
            <div>
                <h1>Error</h1>
                <p>No se pudo obtener la película</p>
            </div>
        )
    }

    if(loading){
        return (
            <div>
                <PacmanLoader color="#ffec57" />
            </div>
        )
    }

    return (
        <article className="flex flex-col items-center justify-center max-w-4xl mx-auto">
            <header className="relative h-96 mb-8">

            </header>
                <h1>{movie.title}</h1>
                <img src={getImageUrl(movie?.backdrop_path, "original")} alt={movie?.title} className="w-full h-full rounded-lg object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">

                    <div className="absolute bottom-0 text-white text-2xl font-bold">
                        <h1 className="text-4xl font-bold">{movie?.tagline }</h1>
                        {movie?.tagline && <p className="text-2xl">{movie?.tagline}</p>}
                    </div>
                </div>
        </article>
    )
}

export default MovieDetail