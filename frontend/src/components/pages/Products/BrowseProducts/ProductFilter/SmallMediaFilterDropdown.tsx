import { useProductFilterContext } from "../../../../../context/ProductFilterContext";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import { filterList } from "./filterList";

const SmallMediaFilterDropdown = () => {
    const { handleOptionClick, selected: selectedOption } = useProductFilterContext();
    const [open, setOpen] = useState(false);
    
    const handleSelectFilter = (option: string) => {
        handleOptionClick(option);
        setOpen(false);
    };

    return (
        <div className="flex items-center justify-center md:hidden small-media-fileter-dropdown">
            <motion.div animate={open ? "open" : "closed"} className="relative">
                <button
                    onClick={() => setOpen((pv) => !pv)}
                    className="flex items-center w-32 h-[36px] text-lg gap-2 px-3 py-1 tracking-wider text-white transition-colors bg-transparent border border-white rounded-md"
                    title={selectedOption}
                    >
                    <span className="w-32 overflow-hidden whitespace-nowrap text-ellipsis">{selectedOption === ""? "All": selectedOption}</span>
                    <motion.span variants={iconVariants}>
                        <FiChevronDown />
                    </motion.span>
                </button>
                <motion.ul
                    initial={wrapperVariants.closed}
                    variants={wrapperVariants}
                    style={{ originY: "top", translateX: "-50%" }}
                    className="flex flex-col gap-2 p-2 z-50 rounded-lg shadow-xl absolute top-[120%] left-[50%] w-36 overflow-hidden bg-white backdrop-blur-md"
                >
                {filterList.map((option) => 
                    <Option key={option.id} handleOptionClick={() => handleSelectFilter(option.name)} text={option.name} />
                )}
                </motion.ul>
            </motion.div>
        </div>
    );
};





type OptionProps = {
    text: string;
    handleOptionClick: (option: string) => void;
};

const Option = ({ text, handleOptionClick }: OptionProps) => {

    return (
        <motion.li
            variants={itemVariants}
            onClick={() => handleOptionClick(text)}
            className="w-full gap-1 p-1 text-lg font-semibold tracking-wider text-center transition-colors rounded-md cursor-pointer text-slate-600 whitespace-nowrap hover:bg-slate-800/30"
        >
            {text}
        </motion.li>
    );
};

export default SmallMediaFilterDropdown;

const wrapperVariants = {
    open: {
        scaleY: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
        },
    },
    closed: {
        scaleY: 0,
        transition: {
            when: "afterChildren",
            staggerChildren: 0.1,
        },
    },
};

const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
};

const itemVariants = {
    open: {
        opacity: 1,
        y: 0,
        transition: {
            when: "beforeChildren",
        },
    },
    closed: {
        opacity: 0,
        y: -15,
        transition: {
            when: "afterChildren",
        },
    },
};