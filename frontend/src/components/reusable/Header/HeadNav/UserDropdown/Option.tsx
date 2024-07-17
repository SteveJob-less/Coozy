import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

type OptionProps = { 
    text: string; 
    Icon: IconType; 
    setOpen: Dispatch<SetStateAction<boolean>> 
};


const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
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

const Option = ({ text, Icon, setOpen }: OptionProps) => {

    return (
        <motion.li
            variants={itemVariants}
            onClick={() => setOpen(false)}
            className="flex items-center w-full gap-2 p-2 text-xs font-medium transition-colors bg-transparent rounded-md cursor-pointer whitespace-nowrap hover:bg-slate-200 text-slate-600 hover:text-semibold"
        >
            <Link className="flex items-center justify-start w-full gap-1" to={`/${text.toLowerCase().split(" ").join("-")}`}>
                <motion.span variants={actionIconVariants}>
                    <Icon />
                </motion.span>
                <span>{text}</span>
            </Link>
        </motion.li>
    );
};

export default Option;