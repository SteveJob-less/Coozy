import { useParams } from "react-router-dom";
import HeadNav from "./HeadNav";

const Header = () => {
    const {} = useParams();

    return (
        <header className="w-full font-[gilroy] md:px-20 px-8 py-5 sticky top-0 z-50 bg-slate-700/80 backdrop-blur-[2px] shadow-xl shadow-black/30">
            <HeadNav />
        </header>
    );
};

export default Header;