import fetchCart, { Cart } from "@/api/products/fetchCart";
import { useQuery } from "@tanstack/react-query";

const useGetCart = () => {
    return useQuery({
        queryKey: ['cart'],
        queryFn: async (): Promise<Cart | undefined> => {     
            return await fetchCart();         
        }
    });
};

export default useGetCart;