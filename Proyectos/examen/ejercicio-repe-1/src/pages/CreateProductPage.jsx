import { useState } from "react";
import { useAuth } from "../hooks/useAuth"; // Hook para obtener el token
import { useNavigate } from "react-router-dom";

const VITE_BASE_URL = import.meta.env.VITE_API_URL;

const CreateProductPage = () => {
    const { token } = useAuth(); // Obtener el token del contexto
    const navigate = useNavigate(); // Para redirigir después de crear el producto

    // Añadimos description y stock al estado
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        description: "", // Nuevo campo
        stock: "", // Nuevo campo
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        console.log(`token:${token}`);

        try {
        const response = await fetch(`${VITE_BASE_URL}/api/products`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Error al crear el producto");
        }

        setMessage("✅ Producto creado exitosamente.");
        setFormData({ name: "", price: "", description: "", stock: "" });

        // Redirigir a la lista de productos después de 1.5s
        setTimeout(() => navigate("/products"), 1500);
        } catch (error) {
        setMessage(`❌ Error: ${error.message}`);
        } finally {
        setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md border mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Crear Producto</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nombre */}
            <div>
            <label className="block text-gray-700 font-medium">Nombre</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Ej: Silla Gamer"
            />
            </div>

            {/* Precio */}
            <div>
            <label className="block text-gray-700 font-medium">Precio ($)</label>
            <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                min="1"
                step="0.01"
                className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Ej: 199.99"
            />
            </div>

            {/* Descripción */}
            <div>
            <label className="block text-gray-700 font-medium">Descripción</label>
            <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Descripción del producto"
            />
            </div>

            {/* Stock */}
            <div>
            <label className="block text-gray-700 font-medium">Stock</label>
            <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                required
                min="0"
                className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Ej: 100"
            />
            </div>

            {/* Botón */}
            <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400"
            disabled={loading}
            >
            {loading ? "Creando..." : "Crear Producto"}
            </button>

            {/* Mensaje de éxito o error */}
            {message && <p className="mt-2 text-center">{message}</p>}
        </form>
        </div>
    );
};

export default CreateProductPage;
