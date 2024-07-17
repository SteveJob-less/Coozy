import { Product } from "@/api/products/fetchAllProducts";
import { createContext, useContext } from "react";

type ProductSearchResultContext = {
    products: Product[];
    isLoading: boolean;
};

export const ProductSearchResultContext = createContext<ProductSearchResultContext | undefined>(undefined);

export const useProductResultContext = () => {
    const products = useContext(ProductSearchResultContext);

    if (products === undefined) {
        throw new Error("useProductResultContext must be used within a ProductResultContext.Provider");
    };

    return products;
};