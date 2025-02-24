
const ProductCard = ({product}) => {
    return (
        <div>
            <div className=" card-container">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            </div>
        </div>
    )
}

export default ProductCard