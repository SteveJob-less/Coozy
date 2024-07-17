import PageNav from "../../molecules/ProductContent/ProductListContainer/PageNav";
import ProductList from "../../molecules/ProductContent/ProductListContainer/ProductList";
import { useState } from "react";

const ProductListContainer = () => {
    const [currentPage, setCurrentPage] = useState(0);
    
    return (
        <section className="relative flex flex-col flex-1 h-full mx-auto">
            {/* <span className="absolute flex items-center justify-center w-full h-full text-center text-gray-600">
                <p>No available product.</p>
            </span> */}
            <ProductList />
            <PageNav pageNumber={currentPage} />
        </section>    
    );
};

export default ProductListContainer;