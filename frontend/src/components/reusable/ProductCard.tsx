import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "../ui/card";
import { Product } from "../pages/LandingPage/BestSeller/BestSellerProducts";
import { Link } from "react-router-dom";
import { FaTags } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { formatToPhPeso } from "@/utils/formatToPhPeso";
import { MouseEvent } from "react";

type ProductCardProps = {
    product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
    const { id, name, category, price, sold, imgUrl } = product;

    const handleAddToCart = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const payLoad = {
            user_id: 1,
            product_id: id,
            qty: 1,
        };

    };

    return (
        <Link className="h-full" to={`/products/${id}`}>
            <Card className="border rounded-lg shadow hover:shadow-xl h-full border-slate-300 hover:border-slate-400 border-slate-500/20 max-w-[400px] md:w-auto">
                <CardContent className="relative pt-6 pb-2">
                    <img className="object-cover w-full border rounded hover:border-slate-300" src={`${imgUrl[0]}`} alt={name} />
                    <div className="absolute flex items-center gap-1 px-2 py-1 text-white rounded-lg cursor-pointer right-9 top-9 bg-slate-700/40 hover:bg-slate-900/70 hover:text-slate-100">
                        <span className="font-thin tracking-widest">{formatToPhPeso(price)}</span>
                        <FaTags />
                    </div>
                    <button onClick={handleAddToCart} className="absolute p-1 rounded cursor-pointer size-9 hover:p-[2px] text-slate-700 right-9 top-[70px] hover:text-slate-800">
                        <FiShoppingCart className="w-full h-full" />
                    </button>
                </CardContent>
                <CardFooter className="grid"> 
                    <CardDescription className="flex items-center justify-between w-full text-slate-500">
                        <span className="px-1 my-auto text-lg font-thin tracking-widest text-opacity-50 w-fit">{category}</span>
                        <span>Sold: {sold}</span>
                    </CardDescription>
                    <CardTitle className="grid gap-2 text-[22px] font-semibold tracking-widest" title={name}>
                        <span className="flex-grow w-auto px-1 truncate">{name}</span>
                    </CardTitle>
                </CardFooter>
            </Card>
        </Link>
    );
};

export default ProductCard;