import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";
import UserDropDown from "./UserDropdown";
import MobileNavMenu from "./MobileNavMenu";

const HeadNav = () => {
    return (
        <nav className="flex items-center justify-between w-full max-w-[2100px] mx-auto">
            <Link to="/" className="text-5xl font-extrabold cursor-pointer hover:scale-105 text-slate-100">Coozy</Link>
            <MobileNavMenu />
            <NavMenu />
            <UserDropDown />
        </nav>
    );
};

export default HeadNav;