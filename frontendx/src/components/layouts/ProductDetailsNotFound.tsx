import { Link } from "react-router-dom";

type ProductDetailsNotFoundProps = {
    itemID?: string;
}

const ProductDetailsNotFound = ({ itemID }: ProductDetailsNotFoundProps) => {
    return (
        <main className="product-detail-404 text-4xl text-gray-600 justify-center items-center bg-white md:h-[90dvh] max-w-[1400px] min-h-[860px] flex flex-col">
            <h2 className="tracking-wide">Sorry,</h2>
            <h1 className="my-2 tracking-wide">Product with ID of "<span className="text-gray-700">{itemID}</span>" not found.</h1>
            <Link to={"/product"}>
                <span className="text-2xl italic tracking-normal text-blue-700 hover:underline hover:text-blue-500">back</span>
            </Link>
        </main>
    );
};

export default ProductDetailsNotFound;