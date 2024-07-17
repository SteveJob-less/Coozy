import { createContext, useContext } from "react";

type ProductFilterContextType = {
    selected: string;
    search: string;
    setSearch: (search: string) => void;
    handleSearch: (search: string) => void;
    handleOptionClick: (option: string) => void;
};

export const ProductFilterContext = createContext<ProductFilterContextType | undefined>(undefined);

export const  useProductFilterContext = () => {
    const context = useContext(ProductFilterContext);

    if (context === undefined) throw new Error("useProductFilterContext must be used within a ProductFilterProvider");

    return context;
};