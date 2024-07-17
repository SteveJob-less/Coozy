import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { OfferType } from "./offers";

type OfferPanelProps = {
    offer: OfferType;
};

const OfferPanel = ({ offer }: OfferPanelProps) => {
    const { title, imgUrl, description, path } = offer;

    return (
        <div 
            className="relative overflow-hidden flex justify-center items-start text-[20px] text-center md:max-w-[390px] font-semibold h-full w-4/5 md:w-fit mx-auto px-6 py-5 rounded-lg border hover:border-slate-400 border-slate-500/20 shadow-sm md:shadow-md"
            style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
            <div className="flex flex-col justify-between h-full gap-5 px-6 py-4 my-auto text-white rounded-lg md:gap-8 bg-black/30">
                <div className="flex flex-col items-center justify-start flex-grow w-full gap-4">
                    <h3 className="text-3xl md:text-4xl text-center text-slate-white z-100 font-[gilroy]">
                        {title}
                    </h3>
                    <p className="font-thin max-w-[300px] md:w-auto text-[15px] md:text-[17px] tracking-widest mx-auto ">{description}</p>
                </div>
                <div className="flex flex-col gap-2 md:gap-5">
                    <Separator className="w-4/5 mx-auto bg-white rounded-full border-1" />
                    <Button variant="link" className="hover:no-underline gap-2 w-fit h-fit mx-auto text-white font-semibold tracking-widest text-[13px] md:text-[17px] font-[gilroy]">
                        <Link className="px-4 py-2 mx-auto rounded-sm bg-black/40 hover:bg-black/50" to={path}>
                            Learn More
                            <FaArrowRight className="inline-block ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default OfferPanel;