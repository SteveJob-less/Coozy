import Cart from "../section/CartContent/Cart";

const CartContent = () => {
    return (
        <main className="lg:h-[92dvh] flex flex-col justify-start items-center w-[100dvw] max-w-[1400px]">
            <div className="flex justify-between w-full px-5 py-4 text-4xl tracking-wide border-b-2 border-gray-200 text-start cart-heading">
                <span className="mx-0">My Cart</span>
            </div>
            <Cart />
        </main>
    );
};

export default CartContent;