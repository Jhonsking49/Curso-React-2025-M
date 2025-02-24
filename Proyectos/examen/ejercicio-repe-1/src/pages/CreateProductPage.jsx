import { useState } from "react"

const CreateProductPage = () => {

    const [product, setProduct] = useState({
        name:"",
        description:"",
        price:"",
        stock:""
    })

    const ClickSaveProduct =  () => {

    }

    return (
        <div>
            <div>
                Creacion de un nuevo producto
            </div>
            <form>
                <div>
                    <label>
                        Nombre del producto: 
                    </label>
                    <input placeholder="nombre" type="text" value={product.name}/>
                </div>
                <div>
                    <label>
                        Descripcion del producto: 
                    </label>
                    <input placeholder="descripcion" type="text" value={product.description}/>
                </div>
                <div>
                    <label>
                        Precio del producto: 
                    </label>
                    <input placeholder="precio" type="number" value={product.price}/>
                </div>
                <div>
                    <label>
                        Stock del producto: 
                    </label>
                    <input placeholder="stock" type="number" value={product.stock}/>
                </div>
                <button onClick={ClickSaveProduct}>Guardar</button>
            </form>
        </div>
    )
}

export default CreateProductPage