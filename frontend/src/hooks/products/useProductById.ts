import fetchProductById from "@/api/products/fetchProductById";
import { useQuery } from "@tanstack/react-query"

const useProductById = (id: string) => {
    return useQuery({
        queryKey: ["products", "id", id],
        queryFn: async () => {
           return await fetchProductById(id);
        }
    });
};

export default useProductById;