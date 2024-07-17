import { Input } from "@/components/ui/input";
import { FiSearch } from "react-icons/fi";
import { useProductFilterContext } from "../../../../../context/ProductFilterContext";

const ProductSearchBox = () => {
    const { search, setSearch } = useProductFilterContext();

    return (
        <div className="relative font-sans product-search-box">
            <Input
                type="text"
                value={search}
                onChange={(e) =>setSearch(e.target.value)}
                className="w-fit md:w-[245px] md:h-12 text-lg md:text-xl text-white lg:w-72 placeholder:text-slate-300 focus-visible:ring-0"
                placeholder="Search for products"
            />
            <FiSearch size="26" className="absolute -translate-y-1/2 cursor-pointer text-slate-300 top-1/2 right-3 hover:text-white hover:scale-110" />
        </div>
    );
};

export default ProductSearchBox;