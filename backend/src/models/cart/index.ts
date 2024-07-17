import Cart from "./cart.model";
import CartItem from "./cartItem.model";

Cart.hasMany(CartItem);
CartItem.belongsTo(Cart);

export { Cart, CartItem };