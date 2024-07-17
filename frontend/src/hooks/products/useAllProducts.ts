import fetchAllProducts, { Product } from "@/api/products/fetchAllProducts";
import { useQuery } from "@tanstack/react-query";

const useAllProducts = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: async (): Promise<Product[]> => {            
            return await fetchAllProducts();
        }
    });
};

export default useAllProducts;