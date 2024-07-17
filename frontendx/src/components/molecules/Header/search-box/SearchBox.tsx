import { useState } from "react";

const SearchBox = () => {
    const [isHovered, setIsHovered] = useState(false);
    const handleHoverEvent = () => {
        setIsHovered((prevState) => !prevState);
    }

    return (
        <div className="flex items-center justify-center gap-4 search-box"> 
            <div className="flex items-center w-96 rounded-md overflow-hidden border-white border-opacity-50 border bg-[#ffd900] text-white">
                <input className="w-full px-3 py-2 bg-[#333333] placeholder:text-gray-400 placeholder:tracking-widest border-r-gray-900 white focus:outline-none" type="text" placeholder="Search" />
                <div className="w-16 cursor-pointer" onMouseOver={handleHoverEvent} onMouseOut={handleHoverEvent}>
                    <svg className={`text-white ${isHovered? "text-gray-600 size-9": "size-8"}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default SearchBox;