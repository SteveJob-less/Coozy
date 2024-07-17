import { useState } from "react";

type TooltipProps = {
    tip: string;
}

const Tooltip = ({ tip }: TooltipProps) => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div 
            className="relative flex m-auto text-xs tooltip-container w-fit"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
        {isVisible && 
            <div className="z-10 absolute min-w-[130px] px-3 py-2 text-white bg-gray-500 rounded top-[-15px] right-[-60px] tooltip translate-x-2/4">{tip}</div>
        }
        </div>
    );
};

export default Tooltip;