import { Link } from "react-router-dom";
import ServicesDropdown from "./ServicesDropdown.tsx/index.tsx";
import { navLinks } from "./UserDropdown/navLinks.ts";

const NavMenu = () => {
    return (
        <ul className="items-center hidden gap-5 ml-auto text-xl lg:text-2xl lg:gap-10 md:flex lg:px-20">
        {navLinks.map((nav) => 
            <NavMenuLink key={nav.name} name={nav.name} link={nav.path} />
        )}
            <li className="px-4 py-1 font-semibold text-white border-b-2 border-transparent hover:border-white">
                <ServicesDropdown />
            </li>
        </ul>
    );
};

const NavMenuLink = ({ name, link }: { name: string ,link: string }) => {
    return (
        <li className="px-4 py-1 font-semibold text-center text-white border-b-2 border-transparent hover:border-white border-slate-300">
            <Link to={link}>{name}</Link>
        </li>
    );
};


export default NavMenu;