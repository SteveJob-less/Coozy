import { useProductResultContext } from "../../../../../context/ProductSearchResultContext";
import { useState } from "react";
import ListPaginationButtons from "@/components/reusable/ListPaginationButtons";
import ProductListSkeleton from "./ProductListSkeleton";
import ProductList from "./ProductList";

const ProductResultDisplay = () => {
    const productsPerPage = 8;
    const { products, isLoading } = useProductResultContext();
    const [currentPage, setCurrentPage] = useState(1);
    const pageResult = products.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);
    
    if(isLoading) return <ProductListSkeleton />
    
    return (
        <>
            <ProductList products={pageResult} /> 
            <ListPaginationButtons 
                currentPage={currentPage} 
                setPage={setCurrentPage} 
                productsPerPage={productsPerPage} 
                productCount={products.length} 
            />
        </>    
    );
};

export default ProductResultDisplay;