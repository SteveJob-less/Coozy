import { allProducts as products } from "./fetchAllProducts";

const fetchProductById = async (id: string) => {
    // Simulate a loading delay of 2 seconds 
    await new Promise((resolve) => setTimeout(resolve, 5000));

    return products.find((product) => product.id === Number(id));
};

export default fetchProductById;