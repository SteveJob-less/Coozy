import { useMemo, useState } from "react";
import ProductFilter from "./ProductFilter";
import ProductSearchResult from "./ProductSearchResult";
import useAllProducts from "@/hooks/products/useAllProducts";
import { ProductSearchResultContext } from "../../../../context/ProductSearchResultContext";
import { ProductFilterContext } from "../../../../context/ProductFilterContext";


const BrowseProducts = () => {
    const [selected, setSelected] = useState("");
    const [search, setSearch] = useState("");
    const { data: products, isLoading } = useAllProducts();

    // UseMemo for category filtering
    const categoryFiltered = useMemo(() => {

        if (!products) return [];
        if (selected === "" || selected === "All") return products;

        return products.filter(product => product.category === selected);
    }, [products, selected, search]);

    // UseMemo for search filtering
    const filteredProducts = useMemo(() => {

        if (search !== "") {
            return categoryFiltered?.filter(product => 
                product.name.toLowerCase().includes(search.toLowerCase())
            );
        } else {
            return categoryFiltered;
        }
        
    }, [categoryFiltered, search, selected]);
    
    const handleOptionClick = (option: string) => {
        setSelected(option === selected ? "" : option);
    };

    const handleSearch = (text: string) => {
        setSearch(text);
    };
    
    return (
        <div className="flex flex-col w-4/5 mx-auto rounded-md shadow-xl shadow-black/30 max-w-[2100px] md:flex-row bg-slate-900/20 backdrop-blur-sm h-[85dvh] md:min-h-[780px] md:max-h-[1100px]"> 
            <ProductFilterContext.Provider value={{ selected, setSearch, search, handleOptionClick, handleSearch }}>
                <ProductFilter />
            </ProductFilterContext.Provider>
            <ProductSearchResultContext.Provider value={{products: filteredProducts, isLoading}}>
                <ProductSearchResult />
            </ProductSearchResultContext.Provider>
        </div>
    );
};

export default BrowseProducts;