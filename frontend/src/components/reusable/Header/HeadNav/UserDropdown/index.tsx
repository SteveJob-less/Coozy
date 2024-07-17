import { useState } from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { FaUser } from "react-icons/fa";
import Option from "./Option";
import { dropdownOptions } from "./dropdownOptions";

type Option = {
    text: string;
    icon: IconType;
};

const UserDropDown = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="items-center justify-center hidden md:flex">
            <motion.div animate={open ? "open" : "closed"} className="relative flex">
                <button
                    onClick={() => setOpen((pv) => !pv)}
                    className="bg-transparent border rounded-full bg-slate-100 bg-opacity-10 hover:bg-slate-500 hover:bg-opacity-30 border-slate-300 hover:border-slate-100"
                >
                    <FaUser className="m-2 text-white size-5" />
                </button>
                <motion.ul
                    initial={wrapperVariants.closed}
                    variants={wrapperVariants}
                    style={{ originY: "top", translateX: "-50%" }}
                    className="flex z-10 flex-col gap-2 p-2 rounded-lg shadow-xl absolute top-[120%] left-[50%] w-auto overflow-hidden bg-white text-slate-800"
                >
                {Object.entries(dropdownOptions).map(([key, value]) => 
                    <Option 
                        key={key} 
                        setOpen={setOpen} 
                        Icon={value.icon} 
                        text={key} 
                    />
                )}
                </motion.ul>
            </motion.div>
        </div>
    );
};

export default UserDropDown;

const wrapperVariants = {

    open: {
        scaleY: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.05,
        },
    },
    closed: {
        scaleY: 0,
        transition: {
            when: "afterChildren",
            staggerChildren: 0.05,
        },
    },
};