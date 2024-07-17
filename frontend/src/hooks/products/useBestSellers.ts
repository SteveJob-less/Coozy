//TODO
import fetchBestSellers from "@/api/products/fetchBestSellers";
import { useQuery } from "@tanstack/react-query";

const useBestSellers = () => {
    return useQuery({
        queryKey: ['best-sellers'],
        queryFn: async () => {
            // Simulate a loading delay of 2 seconds
            await new Promise((resolve) => setTimeout(resolve, 2000));
      
            return fetchBestSellers();
        },
    });
};

export default useBestSellers;
