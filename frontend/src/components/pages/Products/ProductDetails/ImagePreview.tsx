import { useState } from "react";
import { Product } from "../../LandingPage/BestSeller/BestSellerProducts";

type ImagePreviewProps = {
    product?: Product;
};

const ImagePreview = ({ product }: ImagePreviewProps) => {
    const [selectedImg, setSelectedImg] = useState<string | undefined>(undefined);
    
    return (
        <div className="grid items-start gap-4 md:gap-8">
            <div className="relative grid gap-4">
                <img
                    src={selectedImg?? product?.imgUrl[0]}
                    alt={product?.name}
                    width={600}
                    height={600}
                    className="flex items-center justify-center object-cover w-full overflow-hidden border rounded-lg"
                />
                <div className="items-start hidden gap-4 md:flex">
                {product?.imgUrl.map((img, index) => 
                    <button key={index} onClick={() => setSelectedImg(img)} className={`overflow-hidden transition-colors border rounded-lg hover:border-slate-800 ${img === selectedImg ? 'border-slate-800' : ''}`}>
                        <img
                            src={img}
                            alt={product?.name}
                            width={100}
                            height={100}
                            className={`flex items-center justify-center object-cover aspect-square`}
                        />
                        <span className="sr-only">Image {index}</span>
                    </button>
                )}
                </div>
            </div>
        </div>    
    );
};

export default ImagePreview;