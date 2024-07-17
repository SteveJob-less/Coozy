import { Link } from "react-router-dom";
import { User } from "./UserIcon";

type UserIconDropdownProps = {
    user: User | undefined;
}

const UserIconDropdown = ({ user }: UserIconDropdownProps) => {
///!!!FIX
    const menus = [
        { name: "cart", path: "/cart" },
        { name: "profile", path: "/profile" },
        { name: "logout", path: "/logout" },
    ];

    return (
        <ul className={`${user? "mt-[145px]": "mt-[90px]"} z-10 text-lg tracking-wide w-full absolute p-2 text-center rounded text-gray-700 bg-white text`}>
        {user ? (
            <>
            {menus.map((menu) => 
                <li 
                    key={menu.name} 
                    className="hover:bg-[#0000000f] rounded">
                        <Link to={menu.path}>{menu.name}</Link>
                </li>    
            )}
            </>
        ) : (
            <li className="hover:bg-[#0000000f] rounded"><Link to="/user-auth">login</Link></li>
        )}
        </ul>
    );
};

export default UserIconDropdown;