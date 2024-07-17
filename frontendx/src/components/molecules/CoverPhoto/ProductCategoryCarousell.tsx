import { useState } from "react";
import { Link } from "react-router-dom";

const ProductCategoryCarousell = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

///!!!FIX
    const category = [
        { 
            name: "Popular", 
            imgUrl: {
                img_1: "https://ourhome.ph/cdn/shop/products/Ivy_8ab5b46e-364f-4335-a104-9c33806d65bd_1000x.jpg?v=1679983666", 
                img_2: "https://ourhome.ph/cdn/shop/products/ivy-dining-chairblue_39216522_1_e7d6bb0c-20a9-4c76-a214-df3095b31fbd_1000x.jpg?v=1679983666"
            }, 
            altText: "chair" 
            },
        { 
            name: "New", 
            imgUrl: {
                img_1: "https://ourhome.ph/cdn/shop/products/Galeus_2344719a-227f-4913-b6df-bdcbcdf2f841_1000x.jpg?v=1679985179", 
                img_2: "https://ourhome.ph/cdn/shop/products/gaelus-chest-of-5-drawers_10394620-_5_8684e9e3-4f11-4477-abb9-fdd62a7e4f3b_1000x.jpg?v=1679985179"
            }, 
            altText: "drawer" 
        },
        { 
            name: "Sale", 
            imgUrl: {
                img_1: "https://ourhome.ph/cdn/shop/products/Gadiel_27b65313-f5fc-4a44-a1f9-d000fe933ec3_1000x.jpg?v=1706163338", 
                img_2: "https://ourhome.ph/cdn/shop/products/GADIEL-II_10424098_80ad94f1-7871-4873-8b8a-5acbec800188_1000x.jpg?v=1679983977"
            }, 
            altText: "bed" 
        },
    ]
    
    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + category.length) % category.length);
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % category.length);
    };

    const handleHoverEvent = () => {
        setIsHovered((prevState) => !prevState);
    }

    const redirectPath = () => {
        return `/product`;
    }

    return (
        <div className="absolute flex-row hidden w-full gap-2 px-5 text-3xl text-center text-white lg:justify-end lg:flex bottom-5 carousel">
            <button className="w-10 h-10 my-auto font-extrabold rounded-full hover:bg-[#C2B280] hover:bg-opacity-50 hover:backdrop-blur-sm carousel-btn prev" onClick={handlePrevClick}>
                &#8592;
            </button>
            <div className="flex flex-row items-end mx-0 carousel-container">
            {category.map((item, index) => 
                <Link to={redirectPath()} key={item.name} className="relative overflow-hidden cursor-pointer carousel-card" onMouseOver={handleHoverEvent} onMouseOut={handleHoverEvent}>
                    <img
                        className={`carousel-item border-4 rounded h-[200px] ${currentIndex !== index ? "hidden" : ""} ${isHovered? "border-[#ffd900]": "border-[#C2B280]"}`}
                        src={item.imgUrl.img_1}
                        alt={item.altText}
                    />
                {isHovered === true && currentIndex === index ? <span className="px-2 py-1 rounded absolute z-10 text-lg font-bold bottom-3 right-3 hover:underline bg-[#ffd900] text-gray-700">Shop now!</span > : null }
                    <span className="py-2 text-white border-white border border-opacity-60 absolute backdrop-blur-sm bg-opacity-30 top-6 left-[-65px] w-[120%] text-3xl bg-gray-600 rotate-[-45deg] font-extrabold">{item.name}</span>
                </Link>
            )}s
            </div>
            <button className="w-10 h-10 my-auto font-extrabold rounded-full hover:bg-[#C2B280] hover:bg-opacity-50 hover:backdrop-blur-sm carousel-btn next" onClick={handleNextClick}>
                &#8594;
            </button>
        </div>
    );
};

export default ProductCategoryCarousell;
