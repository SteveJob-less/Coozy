///CHECK


const ProductDetailsSkeleton = () => {
    return (
        <>
            <div className="h-9"></div>
            <div className="grid items-start max-w-6xl gap-6 px-4 pb-6 mx-auto md:grid-cols-2 lg:gap-12 animate-pulse">
                <ImagePreviewSkeleton />
                <DescriptionSkeleton />
            </div>  
        </>
    );
};

const ImagePreviewSkeleton = () => {
    return (
        <div className="grid items-start gap-4 md:gap-8 animate-pulse">
            <div className="relative grid gap-4">
                <div className="flex items-center justify-center object-cover overflow-hidden bg-slate-300/50 rounded-lg w-[538px] aspect-square"></div>
                <div className="items-start hidden gap-4 md:flex">
                {Array.from({ length: 2 }).map((_, index) => 
                    <button key={index} className="overflow-hidden transition-colors rounded-lg bg-slate-300/50">
                        <div className="flex size-[100px] items-center justify-center object-cover aspect-square"></div>
                    </button>
                )}
                </div>
            </div>
        </div>   
    );
};

const DescriptionSkeleton = () => {
    return (
        <div className="grid items-start h-full gap-6 md:gap-10 text-slate-300">
            <div className="grid gap-4">
                <div className="w-[350px] bg-slate-400/50 h-10"></div>
                <div className="h-7 bg-slate-300/20 w-[380px]"></div>
                <div className="h-7 bg-slate-300/20 w-[350px]"></div>
                <div className="h-7 bg-slate-300/20 w-[420px]"></div>
                <div className="mt-auto size-10 bg-slate-400/50"></div>
            </div>
            <div className="grid gap-4 md:gap-6">
                <div className="w-full h-10 bg-slate-300/50"></div>
            </div>
        </div>
    );
};

export default ProductDetailsSkeleton;