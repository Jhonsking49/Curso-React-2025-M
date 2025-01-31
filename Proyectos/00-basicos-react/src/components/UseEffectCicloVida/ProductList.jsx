import { useEffect, useState } from "react"

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [cart, setcart] = useState([]);
    const fetchProducts = async (setter) => {
        try {
            const response = await fetch(`https://localhost:5173/src/data/db.json`);
            setter(await response.json());
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        fetchProducts(setProducts)
    }, [])
    
    return (
        <div>ProductList</div>
    )
}

export default ProductList