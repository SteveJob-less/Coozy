import FilterListContainer from "../section/ProductContent/FilterListContainer";
import ProductListContainer from "../section/ProductContent/ProductListContainer";

const ProductContent = () => {

    return (
        <main className="bg-white relative product-content md:h-[90dvh] max-w-[1400px] flex flex-row items-center min-h-[860px] justify-between">
            <FilterListContainer />
            <ProductListContainer />
        </main>
    );  
};

export default ProductContent;