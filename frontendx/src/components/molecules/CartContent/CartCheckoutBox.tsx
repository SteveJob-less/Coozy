import Tooltip from "./Tooltip";

const CartCheckoutBox = () => {

    const handleCheckout = () => {
        console.log("CHECKOUT BTN CLICKED");
    }
    
    return (
        <div className="text-white p-5 flex flex-col h-fit grow checkout-box w-[30%] bg-[#00000033] rounded border border-gray-400">
            <h2 className="text-3xl font-semibold text-center">Order Summary</h2>
            <div className="flex flex-col w-full px-4 py-2 my-3 text-xl">
                <div className="flex justify-between w-full px-1 py-2 border-b border-gray-300">
                    <span className="mx-0">Subtotal</span>
                    <span className="mx-0">$0</span>
                </div>
                <div className="flex justify-between w-full px-1 py-2 border-b border-gray-300">
                    <span className="flex flex-row mx-0">Tax estimate <Tooltip tip={`This price "${0}" excludes 12% VAT; subtotal = price + (price * 12%)`} /> </span>
                    <span className="mx-0">$0</span>
                </div>
                <div className="flex justify-between w-full px-1 py-2 border-b border-gray-300">
                    <span className="flex flex-row mx-0">Shipping estimate <Tooltip tip="Mininum fee: $30, addtional $5 / Product Unit" /> </span>
                    <span className="mx-0">$0</span>
                </div>
                <div className="flex self-end justify-between w-full py-2 text-2xl font-semibold">
                    <span className="mx-0">Order total</span>
                    <span className="mx-0">$0</span>
                </div>
            </div>
            <button onClick={handleCheckout} className="w-full tracking-widest bg-[#C2B280] hover:bg-[#a99a6f] p-2 text-3xl border border-transparent hover:border-white rounded focus-visible:border-white">Checkout</button>
        </div>
    );
};

export default CartCheckoutBox;