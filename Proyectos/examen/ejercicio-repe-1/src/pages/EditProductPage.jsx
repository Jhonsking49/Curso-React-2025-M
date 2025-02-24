import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchProductUpdate } from "../services/db";

const ProductDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [updatedProduct, setUpdatedProduct] = useState({
        name: "",
        description: "",
        price: "",
        stock: "",
    });
    const VITE_API_URL = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem("token")

    // Obtener detalles del producto al cargar la página
    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/products/${id}`);
                if (!response.ok) throw new Error("Error al obtener el producto");
                const data = await response.json();
                setProduct(data);
                setUpdatedProduct({
                    name: data.name || "",
                    description: data.description || "",
                    price: data.price || "",
                    stock: data.stock || "",
                });
            } catch (error) {
                console.error(error);
            }
        };

        fetchProductDetail();
    }, [id]);

    const Update = async(id, updatedProduct) =>{
        try {
            const response = await fetch(
            `${VITE_API_URL}/api/products/${id}`,{
                method: "PUT",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:`Bearer ${token}`
                },
                body: JSON.stringify(updatedProduct)
            }
            );
            if (!response.ok) {
            throw new Error("Error en la petición");
            }
            return await response.json();
        } catch (error) {
            console.error(error);
            return error;
        }
    }
    if (!product) return <p>Cargando...</p>;

    // Manejar cambios en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedProduct((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Actualizar el producto en la API
    const clickUpdateProduct = async (e) => {
        e.preventDefault();
        try {
            await Update(id, updatedProduct);
            navigate(`/products/${id}`); // Redirige al producto actualizado
        } catch (error) {
            console.error("Error al actualizar el producto:", error);
        }
    };

    return (
        <div className="p-4 bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Editar Producto</h2>
            <form onSubmit={clickUpdateProduct} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block font-medium">Nombre del producto</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="off"
                        value={updatedProduct.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <label htmlFor="description" className="block font-medium">Descripción del producto</label>
                    <input
                        id="description"
                        name="description"
                        type="text"
                        autoComplete="off"
                        value={updatedProduct.description}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <label htmlFor="price" className="block font-medium">Precio del producto</label>
                    <input
                        id="price"
                        name="price"
                        type="number"
                        autoComplete="off"
                        value={updatedProduct.price}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <label htmlFor="stock" className="block font-medium">Cantidad del producto</label>
                    <input
                        id="stock"
                        name="stock"
                        type="number"
                        autoComplete="off"
                        value={updatedProduct.stock}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    Actualizar producto
                </button>
            </form>
            <Link to="/products" className="mt-4 block text-blue-500 hover:underline">
                Volver al inicio
            </Link>
        </div>
    );
};

export default ProductDetailPage;
