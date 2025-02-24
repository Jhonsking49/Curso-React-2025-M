import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    //console.log(product);
    return (
        <article className="card transform transition-transform duration-300 hover:scale-105">

            <div className="p-4">
            <h3 className="font-bold text-lg line-clamp-2 text-white">{product.name}</h3>
            <p className="text-sm text-gray-500 line-clamp-2" >
                {product.description}
            </p>
            <p className="text-sm text-gray-500 line-clamp-2" >
                {product.stock}
            </p>
            <p className="text-sm text-gray-500 line-clamp-2" >
                {product.price}
            </p>
            </div>
            <div>
                <Link to={`/products/${product._id}`} className="bg-gray-300 px-2 py-2">
                    Ver detalles
                </Link>
                
            </div>
            <div>
                <Link to={`/products/${product._id}/edit`} className="bg-gray-300 px-2 py-2">
                    Actualizar
                </Link>
            </div>
            <div>
                <Link to={`/products/${product._id}/delete`} className="bg-gray-300 px-2 py-2">
                    Eliminar
                </Link>
            </div>
        </article>
    );
};

export default ProductCard;
