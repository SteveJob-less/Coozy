import { Link } from "react-router-dom";
import FooterLinks from "./FooterLinks";
import SocialsLinks from "./SocialsLinks";

const Footer = () => {
    return (
        <footer className="pt-3 pb-2 rounded-none shadow md:pt-8 md:px-20 md:pb-5 bg-slate-800">
            <div className="grid w-full grid-cols-1 md:grid-cols-2 max-w-[2100px] mx-auto">
                <div className="hidden md:flex">
                    <Link to="/" className="flex items-center mb-4 space-x-3 sm:mb-0 rtl:space-x-reverse">
                        <span className="self-center text-5xl font-bold text-white whitespace-nowrap">Coozy</span>
                    </Link>
                </div>
                <div className="flex flex-col items-center justify-between gap-2 p-5 md:p-0 md:gap-5 md:items-end">
                    <FooterLinks />
                    <SocialsLinks />
                </div>
            </div>
            <span className="block text-sm text-center text-gray-500 md:mt-5 dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">Coozy™</Link>. All Rights Reserved.</span>
        </footer>
    );
};

export default Footer;