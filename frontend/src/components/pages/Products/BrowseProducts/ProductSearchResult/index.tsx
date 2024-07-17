import ProductResultDisplay from "./ProductResultDisplay";

const ProductSearchResult = () => {

    return (
        <section className="flex flex-col items-start justify-center w-full h-full px-5 md:flex-row md:justify-start md:items-center md:p-5 product-list md:pl-0 md:pb-0">
            <div className={`flex flex-wrap md:justify-center w-[calc(100%-20px)] mx-auto mb-5 md:mr-5 h-[2px] md:w-[2px] md:h-[calc(100%-20px)] bg-slate-300/40 rounded-md`}></div> {/* Separator */}
            <div className="w-full h-full">
                <ProductResultDisplay />
            </div>
        </section>
    );
};

export default ProductSearchResult;