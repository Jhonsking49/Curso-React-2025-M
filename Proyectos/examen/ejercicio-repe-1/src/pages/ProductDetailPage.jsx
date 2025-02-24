import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProductDetail = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/products/${id}`);
                if (!response.ok) throw new Error("Error al obtener el producto");
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProductDetail();
    }, [id]);

    if (!product) return <p>Cargando...</p>;

    return (
        <div className="p-4 bg-gray-100">
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p>Stock: {product.stock}</p>
            <p>Precio: ${product.price}</p>
            <Link to="/products" >Volver al inicio</Link>
        </div>
    );
};

export default ProductDetailPage;
