import AnimatedList from "@/components/reusable/AnimatedList";
import OfferPanel from "./OfferPanel";
import { offers } from "./offers";

const WhatWeOffer = () => {
    
    return (
        <section className="flex flex-col justify-between w-full bg-gradient-to-b md:px-20 md:py-16 from-slate-100 to-transparent md:gap-5 lg:p-24 bg-slate-100">
            <h2 className="text-5xl font-thin text-center md:text-6xl text-slate-800">We Offer</h2>
            <ul className="grid grid-cols-1 py-10 gap-8 md:py-5 md:flex md:flex-wrap md:justify-center lg:grid-cols-3 md:gap-16 lg:gap-20 lg:max-w-[1400px] mx-auto">
            {offers.map((offer) => 
                <AnimatedList key={offer.title}>
                    <OfferPanel offer={offer} />
                </AnimatedList>
            )}          
            </ul>
        </section>
    );
};

export default WhatWeOffer;