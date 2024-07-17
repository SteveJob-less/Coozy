import SmallMediaFilterDropdown from "./SmallMediaFilterDropdown";
import ProductSearchBox from "./ProductSearchBox";
import FilterList from "./FilterList";

const ProductFilter = () => {

    return (
        <section className="flex flex-wrap items-start justify-around w-full gap-3 p-5 mx-auto md:justify-start md:w-fit product-filter md:flex-col">
            <ProductSearchBox />
            <FilterList />
            <SmallMediaFilterDropdown />
        </section>
    );
};

export default ProductFilter;