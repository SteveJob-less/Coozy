import { Product } from "@/components/pages/LandingPage/BestSeller/BestSellerProducts";
import ProductCard from "@/components/reusable/ProductCard";

type ProductListProps = { 
    products: Product[], 
};

const ProductList = ({ products }: ProductListProps) => {

    return (
        <ul className="flex relative flex-wrap w-full h-[500px] md:h-[calc(100%-54px)] min-w-fit min-h-[400px] overflow-auto gap-4 md:gap-2">
        {products.map((product, index) => 
            <li 
                key={index}
                className="w-3/5 md:mx-auto aspect-[1/1.3] md:w-[calc(25%-6px)] mx-auto lg:mx-0 md:h-[calc(50%-6px)] min-w-[260px]"
            >
                <ProductCard product={product} />
            </li>
        )}
        </ul>
    );
};

export default ProductList;