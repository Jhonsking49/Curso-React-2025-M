import { useProducts } from "../context/ProductContext";

const ProductList = () => {
    const { products, error, loading } = useProducts();
    return (
        <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Products List</h1>
            {loading ? (
                <div className="flex justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map((product) => (
                        <div 
                            key={product._id}
                            className="bg-gray-50 rounded-lg p-4 shadow hover:shadow-lg transition duration-300"
                        >
                            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                            <p className="text-blue-600 font-bold mt-2">${product.price}</p>
                        </div>
                    ))}
                </div>
            )}
            {error && (
                <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
                    {error}
                </div>
            )}
        </div>
    );
};

export default ProductList;