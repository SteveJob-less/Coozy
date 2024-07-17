import { Card, CardContent, CardFooter  } from "../ui/card";

const ProductCardSkeleton = () => {
    
    return (
        <div className="h-full">
            <Card className="border rounded-lg shadow h-full border-slate-300 border-slate-500/20 max-w-[400px] md:w-auto animate-pulse">
                <CardContent className="relative pt-6 pb-2">
                    <div className="object-cover w-full border rounded aspect-square bg-black/5"></div>
                    <div className="absolute p-1 rounded cursor-pointer size-9 text-slate-700 right-9 top-20"></div>
                </CardContent>
                <CardFooter className="grid gap-3"> 
                    <div className="flex justify-between">
                        <div className="w-20 h-5 bg-slate-400/20"></div>
                        <div className="w-12 h-5 bg-slate-400/20"></div>
                    </div>
                    <div className="rounded w-44 h-7 bg-slate-300/40"></div>
                </CardFooter>
            </Card>
        </div>
    );
};

export default ProductCardSkeleton;