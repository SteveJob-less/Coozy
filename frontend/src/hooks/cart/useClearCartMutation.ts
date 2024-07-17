import { useMutation, useQueryClient } from "@tanstack/react-query"

const useClearCart = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async () => {
            console.log("clear cart");
            return
        }, 
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cart'] })
        },
    });
};

const useAddToCart = (itemId: string, qty: number) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async () => {
            console.log(`add to cart: ${itemId} quantity: ${qty}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cart'] })
        }
    });
};

const useCartMutation = () => {
    return { useClearCart, useAddToCart };
};

export default useCartMutation;