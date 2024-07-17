import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
    const { itemID } = useParams();
    const item =   { 
            itemID: 1,
            imgUrl: { 
                img_1: "https://ourhome.ph/cdn/shop/products/SpecialsSeivLshapeSofa_10425142_2_d301969b-7482-487e-b4ef-5c8386bacf07_1000x.jpg?v=1679983942",
                img_2: "https://ourhome.ph/cdn/shop/products/SpecialsSeivLshapeSofa_10425142_1_0d2ed547-5dbd-446b-a822-48f748cd0368_1000x.jpg?v=1679983942" 
            }, 
            name: "Seiv Sectional Sofa", 
            altText: "seiv-sectional-sofa",
            price: 10,
        };
    
    return (
        <main className="product-detail-container p-3 text-gray-500 bg-white md:h-[90dvh] max-w-[1400px] min-h-[860px] flex flex-col">
            <div className="w-full h-full overflow-y-hidden product-detail-card">
                <div className="flex flex-row items-center justify-between">
                    <h1 className="px-4 py-3 text-4xl italic cursor-pointer hover:text-gray-600 w-fit">{item.name}</h1>
                    <Link className="inline-block px-2 mx-4 text-xl hover:text-blue-600 hover:underline" to={"/product"}>&#8592; back</Link>
                </div>
                <div className="flex md:flex-row sm:flex-col">
                    <div className="flex items-center rounded md:w-[200%] justify-center p-3 overflow-y-hidden img-container ">
                        <img className="w-full rounded mt-[-40px]" src={item.imgUrl.img_1} alt={item.altText} />
                    </div>
                    <div className="product-description w-[50%] text-start p-5 rounded bg-[#00000016] h-fit sm:w-full mx-3"> 
                        <h2 className="text-2xl font-semibold">{item.name}</h2>
                        <h3 className="text-xl border-b border-gray-300">${item.price}</h3>
                        <p className="py-3 text-justify sm:border-none md:border-b lg:pb-3 sm:indent-3 lg:indent-8">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <div className="block">
                            <span className="text-gray-700">Warranty</span>: 15years
                        </div>
                        <div className="block">
                            <span className="text-gray-700">Size</span>: 
                        </div>
                        <div className="mt-3 text-center">
                            <button className="w-4/5 py-2 text-2xl font-bold text-white bg-green-600 rounded hover:bg-green-700">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProductDetails;