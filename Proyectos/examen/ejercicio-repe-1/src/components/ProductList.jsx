const VITE_API = import.meta.env.VITE_API_URL;

const ProductList = () => {
    const getData = async() =>{
        try{
            const response = await fetch(`${VITE_API}/api/products`);
            if(!response.ok){
                throw new Error("Error en la obtencion de datos")
            }
            const data = await response.json();
            console.log(data)
            return data;
        } catch(error){
            console.error(error);
        }
    }

    const products = getData;

    return (
        <div>
            {products?.results?.map((product)=>{
                <div key={product._id}>
                    <div>
                        <h3>Nombre del producto: </h3>
                        <p>{product.name}</p>
                    </div>
                    <div>
                        <h3>Descripcion del producto: </h3>
                        <p>{product.description}</p>
                    </div>
                    <div>
                        <h3>Precio del producto: </h3>
                        <p>{product.price}</p>
                    </div>
                    <div>
                        <h3>Stock del producto: </h3>
                        <p>{product.stock}</p>
                    </div>
                </div>
            })}
        </div>
    )
}

export default ProductList