import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { fetchProducts } from "../services/db";
import ProductCard from "../components/ProductCard";

const Home = () => {
    const { data, loading, error } = useFetch(
        () => fetchProducts()
    );
    //console.log(data)

    if (error) {
        return (
        <div className="text-center p-10">
            <h2 className="text-red-600 text-2xl font-bold">
            Error al obtener los productos
            </h2>
            <p className="text-xl font-medium">{error.message}</p>
            <Link to="/" className="text-blue-600">
            Volver al inicio
            </Link>
        </div>
        );
    }
    return (
        <div className="space-y-8">
        <section>
            <h2 className="text-2xl font-bold text-sky-950 mb-10">
            Productos
            </h2>
            {loading ? (
            <div>
                cargando
            </div>
            ) : (
            <>
                {/* grid de las películas */}
                <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                xl:grid-cols-5 gap-6"
                >
                {data.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
                </div>
            </>
            )}
        </section>
        </div>
    );
};

export default Home;
