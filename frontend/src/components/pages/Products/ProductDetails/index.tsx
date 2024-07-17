
import { useParams } from "react-router-dom";
import useProductById from "@/hooks/products/useProductById";
import ProductDetailsSkeleton from "./ProductDetailsSkeleton";
import Content from "./Content";

const ProductDetails = () => {
    const { id } = useParams();
    const { data: product, isLoading } = id !== undefined ? useProductById(id) : { data: undefined, isLoading: false };
    
    return (
        <div className="p-5 w-fit mx-auto rounded-md shadow-xl shadow-black/30 my-5 max-w-[2100px] bg-slate-900/20 backdrop-blur-sm md:max-h-[1100px]"> 
        {isLoading? (
            <ProductDetailsSkeleton />
        ) : (
            <Content product={product} />
        )}
        </div>
    );
};

export default ProductDetails;