import { Link } from "react-router-dom";
import { footerMenuList } from "./footerMenuList";

const FooterLinks = () => {
    
    return (
        <ul className="flex gap-4 text-sm text-gray-500 md:text-md w-fit md:gap-6">
        {footerMenuList.map((item) => 
            <li key={item.name}>
                <Link to={item.path} className="hover:underline">{item.name}</Link>
            </li>
        )}
        </ul>
    );
};

export default FooterLinks;