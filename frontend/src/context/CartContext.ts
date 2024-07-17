import { Cart } from "@/api/products/fetchCart";
import { createContext, useContext } from "react";

type CartContext = {
    cart: Cart | null | undefined;
};

export const CartContext = createContext<Cart | undefined>(undefined);

export const  useCartContext = () => {
    const context = useContext(CartContext);

    if (context === undefined) throw new Error("useCartContext must be used within a CartProvider");

    return context;
};