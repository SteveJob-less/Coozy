import { useEffect, useState } from "react";
import ProductCategoryCarousell from "../../molecules/CoverPhoto/ProductCategoryCarousell";

type CoverPhoto = { discription: string, imgUrl: string, alt: string };

const generateRandomNumber = (max:number) => {
    return Math.floor(Math.random() * max);
}

const   CoverPhoto = () => {
    const coverPhotos = [
        { 
            description: "Shop our curated collection of furniture to find the perfect pieces for your space", 
            imgUrl: "https://images2.alphacoders.com/134/1347182.png", 
            alt:"cover1" 
        },
        { 
            description: "Discover furniture that reflects your style and makes your home feel special", 
            imgUrl: "https://png.pngtree.com/background/20230621/original/pngtree-aesthetic-interior-design-with-3d-rendering-illustration-and-wall-mounted-storage-picture-image_3910965.jpg", 
            alt:"cover" 
        },
        { 
            description: "Create a home you love with our curated selection of furniture", 
            imgUrl: "https://www.home-designing.com/wp-content/uploads/2021/10/living-room-sofa.jpg", 
            alt:"cover3" 
        },
    ];
    const [photoIndex, setPhotoIndex] = useState(generateRandomNumber(coverPhotos.length));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setPhotoIndex((prevIndex) => {
                // Handle potential index out-of-bounds
                return (prevIndex + 1) % coverPhotos.length;
            });
            }, 5000); 
        
            return () => clearInterval(intervalId);
    }, []);

    return (   
        <section className="flex cover-photo lg:h-[60dvh] relative w-[100dvw] max-w-[1400px] mx-0 overflow-y-hidden min-h-[440px]">
            <img className="w-[100dvw] object-cover m-0" src={coverPhotos[photoIndex].imgUrl} alt={coverPhotos[photoIndex].alt} />
            <div className={`text-${photoIndex === 1? "end right-5 ": "start left-5"} top-10 shadow-2xl absolute cover-description rounded w-[55%] text-white text-2xl md:text-3xl lg:text-5xl bg-gray-800 bg-opacity-20 backdrop-blur-sm`}>
                <p className={`p-8 ${photoIndex === 1? "text-end": ""}`}>
                    {coverPhotos[photoIndex].description}
                </p>
            </div>
            <ProductCategoryCarousell /> 
        </section>
    );
};

export default CoverPhoto;