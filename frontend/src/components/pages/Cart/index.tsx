import bg from "../../../assets/images/bg-header.jpg";
import PageLayout from "@/components/layout/PageLayout";
import CheckoutBox from "./CheckoutBox";
import { useState } from "react";
import CartListContainer from "./CartListContainer";
import useGetCart from "@/hooks/cart/useGetCart";


const index = () => {
    const [checkedItems, setCheckedItems] = useState<string[]>([]);
    const { data: cart } = useGetCart();

    // const toggleCheckedItem = (id: string) => {
    //     const newCheckedItems = [...checkedItems];

    //     if (newCheckedItems.includes(id)) {
    //         newCheckedItems.splice(newCheckedItems.indexOf(id), 1);
    //     } else {
    //         newCheckedItems.push(id);
    //     }

    //     setCheckedItems(newCheckedItems);
    // };

    // const toggleCheckAll = () => {
    //     if (cart && checkedItems.length === cart?.items.length) {
    //         setCheckedItems([]);
    //     } else {
    //         const checkAll = (cart?.items) ? cart?.items.map((item) => item.id) : []; // Return empty array if cart.items is undefined
    //         setCheckedItems(checkAll); // Set checkedItems to all IDs
    //     }
    // };

    return (
        <PageLayout>
             <main className="cart-page text-slate-900 overflow-y-auto font-[gilroy] min-h-[100dvh] bg-cover pt-24 md:pt-10 bg-center w-full" style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat' }}>
                <div className="mx-auto min-w-[400px] h-[85dvh] md:min-h-[780px] md:max-h-[1100px] w-4/5 flex flex-col rounded-md shadow-xl shadow-black/30 bg-slate-900/20 backdrop-blur-sm p-5 md:p-0">
                    <div className="flex items-center px-8 pt-3">
                        <h1 className="text-4xl w-fit">Cart</h1>
                        <span className="px-2 text-2xl opacity-70"> ( 0 items ) </span>
                    </div>
                    <div className="flex flex-wrap items-start w-full gap-5 p-5 pt-0">
                        <CartListContainer checkedItems={checkedItems} />
                        <CheckoutBox checkedItems={checkedItems} />
                    </div>
                </div>
            </main>
        </PageLayout>
    );
};

export default index;