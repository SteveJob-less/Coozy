import { useState } from "react";
import UserIconDropdown from "./UserIconDropdown";

type Item = {
    product_id: number
    name: string;
}

export type User = {
    user_id: number;
    name: string;
    email: string;
    cart: Item[];
}


const UserIcon = () => {
    const [isOpen, setIsOpen] = useState(false);
    const user = {
        user_id: 1,
        name: "Steve",
        email: "steve1@gmail.com",
        cart: [],
    }

    return (
        <div 
            onMouseLeave={() => setIsOpen(false)} 
            onClick={() => setIsOpen((prevState) => !prevState)} 
            className="relative flex flex-col items-center justify-center h-12 gap-3 px-5 overflow-y-visible text-sm text-white rounded-full cursor-pointer"
        >
        {/* Show/Hide user dropdown menu  */}
        {isOpen ? <UserIconDropdown user={ user } /> : null }
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 hover:text-[#ffd900cf] hover:bg-opacity-15">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            {user.cart.length > 0 && <div className="absolute flex justify-center w-5 h-5 text-xs bg-red-600 rounded-full bottom-1 right-5 notif-count place-items-center"><span>{user.cart.length}</span></div> }
        </div>
    );
};


export default UserIcon;