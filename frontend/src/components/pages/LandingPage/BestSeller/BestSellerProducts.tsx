
import { Product } from "@/api/products/fetchAllProducts";
import AnimatedList from "@/components/reusable/AnimatedList";
import ProductCard from "@/components/reusable/ProductCard";

type BestSellerProductsProps = {
    products?: Product[];
};

const BestSellerProducts = ({ products }: BestSellerProductsProps) => {

    return (
        <ul className="grid gap-5 py-10 md:py-5 md:grid-cols-2 lg:grid-cols-5 lg:max-w-[1400px] mx-auto font-[gilroy]">
        {products?.map((product) => 
            <AnimatedList key={product.id}>
                <ProductCard product={product} />
            </AnimatedList> 
        )} 
        </ul>
    );
};

export default BestSellerProducts;