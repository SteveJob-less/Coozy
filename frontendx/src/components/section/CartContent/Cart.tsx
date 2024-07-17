import CartCheckoutBox from "../../molecules/CartContent/CartCheckoutBox";
import CartProductContainer from "../../molecules/CartContent/CartProductContainer";

const Cart = () => {
    return (
        <section className="flex flex-row w-full gap-10 p-5 grow">
            <CartProductContainer />
            <CartCheckoutBox />
        </section>
    );
};

export default Cart;