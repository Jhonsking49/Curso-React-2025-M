import { useState } from "react";
import { createContext } from "react";


export const ProductContext = createContext();

export const ProductProvider = ({children}) => {

    const [products, setProducts] = useState([]);

    return (
        <ProductContext.Provider value={{products, setProducts}}>
            {children}
        </ProductContext.Provider>
    )
}