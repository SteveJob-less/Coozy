import { Link } from "react-router-dom";
import SearchBox from "../../molecules/Header/search-box/SearchBox";
import UserIcon from "../../molecules/Header/user-nav/UserIcon";

const Header = () => {
    return (
        <header className="w-full text-[#333333] bg-[#C2B280] sm:h-auto h-[10dvh] flex shadow-md">
            <div className="py-3 header-content lg:w-[1400px] md:w-full h-full flex flex-row flex-wrap items-center justify-between">
                <div className="mx-0 brand-logo">
                    {/* Clickable: redirect to "LoginSignup Page" or "ProductListing Page" */}
                    <Link to={"/"} className="px-5 py-3 text-6xl font-bold tracking-tighter text-white cursor-pointer">Fornature</Link>
                </div>
                <div className="hidden m-0 md:flex search-wrapper">
                    {/* Clickable: input search / search */}
                    <SearchBox />
                </div>
                <div className="flex-row hidden m-0 md:flex user-nav">
                    {/* Clickable: user dropdown feature (show / hide dropdown menu) */}
                    <UserIcon />
                </div>
            </div>
        </header>
    );
};

export default Header;