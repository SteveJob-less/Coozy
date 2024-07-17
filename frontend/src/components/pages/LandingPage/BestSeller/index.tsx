import useBestSellers from "@/hooks/products/useBestSellers";
import BestSellerProductsSkeleton from "./BestSellerProductsSkeleton";
import BestSellerProducts from "./BestSellerProducts";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";

const BestSeller = () => {
    const { data: bestSellers, isLoading } = useBestSellers();

    return (
        <section className="grid w-full p-16 md:pt-4 bg-slate-500 bg-gradient-to-t from-slate-500 to-slate-100 md:px-20 md:gap-5">
            <h2 className="text-4xl font-thin text-center md:text-6xl text-slate-800">Best Selling Products</h2>
            {isLoading? (
                <BestSellerProductsSkeleton />
            ) : (
                <BestSellerProducts products={bestSellers} />
            )}
            <Link className="mx-auto w-fit" to="/products">
                <Button  className="flex items-center justify-center px-4 py-2 mx-auto text-lg tracking-widest w-fit text-slate-800" variant="link">
                    View all 
                    <FaArrowRight className="inline-block mx-2" />
                </Button>
            </Link>
        </section>
    );
};

export default BestSeller;