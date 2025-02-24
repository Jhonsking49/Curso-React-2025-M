import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductContext"

const HomePage = () => {

    const { products } = useProducts();    
    return (
        
        <div>
            <h1>Home Page</h1>
            <ul>
                {products.map((product) => (
                    <div key={product.name}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default HomePage