import { Link } from "react-router-dom";
import { Item } from "../ProductContent/ProductListContainer/ProductList";

type ProductCardProps = {
    item: Item;
}

const ProductCard = ({ item }: ProductCardProps) => {
    return (
        <Link
            to={`/product/${item.itemID}`} 
            className="product-card cursor-pointer relative flex w-full h-full border bg-[#F1EFF0] shadow-lg rounded hover:border-[#C2B280] hover:shadow-[#C2B280]"
        >
            <div className="h-[200px] overflow-y-hidden flex my-auto">
                <img className="object-cover hover:w-[400px]" src={item.imgUrl.img_1} alt={item.altText} />
            </div>
            <div className="hover:bg-[#c2b28079] hover:text-gray-600 hover:items-center py-1 text-gray-500 absolute bottom-0 flex items-end justify-center w-full px-5 text-2xl h-14">
                <p className="truncate">{item.name}</p>
            </div>
        </Link>
    );
};

export default ProductCard;