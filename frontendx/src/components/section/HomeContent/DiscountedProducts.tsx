import DiscountedProductList from "../../molecules/DiscountedProduct/DiscountedProductList";

const DiscountedProducts = () => {
    
    return (
        <section className="w-[100dvw] max-w-[1400px] md:h-[31dvh] mx-0 gap-0 text-center flex flex-col bg-[#C2B280]">
            <h1 className="w-full mt-2 font-bold text-center sm:text-6xl md:text-4xl sm:py-10 md:py-1">40% Off</h1>
            <DiscountedProductList />
        </section>
    );
};

export default DiscountedProducts;