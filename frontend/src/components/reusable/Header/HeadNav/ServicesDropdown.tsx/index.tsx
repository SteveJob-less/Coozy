import { useState } from "react";
import { motion } from "framer-motion";
import ServiceOption from "./ServiceOption";
import { offers } from "@/components/pages/LandingPage/WhatWeOffer/offers";

const ServicesDropdown = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="items-center justify-center hidden md:flex">
            <motion.div animate={open ? "open" : "closed"} className="relative">
                <button
                    onClick={() => setOpen((pv) => !pv)}
                    className="text-xl lg:text-2xl"
                >
                    Services
                </button>
                <motion.ul
                    initial={wrapperVariants.closed}
                    variants={wrapperVariants}
                    style={{ originY: "top", translateX: "-50%" }}
                    className="flex z-10 flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[140%] left-[50%] w-auto overflow-hidden"
                >
                {offers.map((service) => 
                    <motion.li
                        key={service.title}
                        initial={itemVariants.closed}
                        variants={itemVariants}
                        onClick={() => setOpen(false)}
                        className="flex items-center justify-center w-full gap-2 p-2 text-[16px] transition-colors rounded-md cursor-pointer font-large whitespace-nowrap hover:bg-slate-200 text-slate-600 hover:text-semibold"
                    >
                        <ServiceOption
                            text={service.title} 
                            path={service.path} 
                        />
                    </motion.li>
                )}
                </motion.ul>
            </motion.div>
        </div>
    );
};

export default ServicesDropdown;

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