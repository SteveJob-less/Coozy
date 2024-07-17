import { Button } from "@/components/ui/button";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductImageDisplay from "./ImagePreview";
import ProductDescription from "./Description";
import { Product } from "../../LandingPage/BestSeller/BestSellerProducts";

type ContentProps = {
    product?: Product;
};

const Content = ({ product }: ContentProps) => {
    return (
        <>
        <div className="flex justify-end w-full h-fit">
            <Link className="flex items-center w-fit" to="/products">
                <Button variant="link" className="gap-3 text-lg text-slate-300 hover:bg-white/15">
                    <FaArrowLeft className="text-base" />
                    Back
                </Button>
            </Link>            
        </div>
        <div className="grid items-start max-w-6xl gap-6 px-4 pb-6 mx-auto md:grid-cols-2 lg:gap-12">
            <ProductImageDisplay product={product} />
            <ProductDescription product={product} />
        </div>  
        </>
    );
};

export default Content;