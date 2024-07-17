import { motion } from "framer-motion";

type AnimatedListProps = {
    children: React.ReactNode;
};

const AnimatedList = ({ children }: AnimatedListProps) => {
    return (
        <motion.li
            whileHover={{ scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }} whileFocus={{ scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
            tabIndex={0} 
            className="rounded-xl"
        >
            {children}
        </motion.li>
    );
};

export default AnimatedList;