

const VITE_BASE_URL = import.meta.env.VITE_API_URL;

export const fetchProducts = async () => {
    try {
        const response = await fetch(
        `${VITE_BASE_URL}/api/products`
        );
        if (!response.ok) {
        throw new Error("Error en la petición");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        // throw new Error("Error en la petición");
        return error;
    }
};

export const fetchProductDetail = async (id) => {
    try {
        const response = await fetch(
        `${VITE_BASE_URL}/api/products/${id}`
        );
        if (!response.ok) {
        throw new Error("Error en la petición");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        // throw new Error("Error en la petición");
        return error;
    }
};

export const fetchProductUpdate = async (id, data) => {
    try {
        const response = await fetch(
        `${VITE_BASE_URL}/api/products/${id}`,{
            method: "PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
        }
        );
        if (!response.ok) {
        throw new Error("Error en la petición");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        // throw new Error("Error en la petición");
        return error;
    }
};

