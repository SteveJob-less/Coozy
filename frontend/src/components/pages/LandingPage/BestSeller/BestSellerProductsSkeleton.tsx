//Skeleton UI for loading products
const BestSellerProductsSkeleton = () => {
    const count = 5;

    return (
        <ul className="grid gap-5 py-10 md:py-5 md:grid-cols-2 lg:grid-cols-5 lg:max-w-[1400px] mx-auto font-[gilroy] w-full">
        {Array.from({ length: count }, (_, index) => (
            <li className="inline-block mx-auto h-[470px] bg-slate-800/10 w-[400px] md:h-[270px] md:min-w-[200px] md:w-full lg:min-h-[300px] rounded-lg" key={index}>
                <div className="h-full border shadow opacity-0 hover:shadow-xl border-slate-300 hover:border-slate-400 border-slate-500/20 animate-pulse">
                    <div className="rounded-t-lg h-4/5 bg-slate-800/20"></div>
                    <div className="flex flex-col items-start justify-around w-full px-4 py-2 h-1/5">
                        <div className="w-3/4 h-6 mt-0 rounded bg-slate-800/20"></div>
                        <div className="w-2/4 h-3 mt-2 rounded bg-slate-800/20"></div>
                    </div>
                </div>
            </li>
        ))} 
        </ul>
    );
};

export default BestSellerProductsSkeleton;