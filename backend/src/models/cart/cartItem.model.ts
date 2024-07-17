import { DataTypes, Model } from "sequelize";
import db from "../../../config/db";
import Cart from "./cart.model";

type CartItemAttributes = {
    id: number;
    userId: number;
    productId: number;
    cartId: number;
    quantity: number;
    createdAt: Date;
    updatedAt: Date;
};

type CartItemCreationAttributes = Omit<CartItemAttributes, "id" | "createdAt" | "updatedAt">;

class CartItem extends Model<CartItemAttributes, CartItemCreationAttributes> {}

const defineCartItem = db.define<CartItem, CartItemAttributes>("cartItem", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "users",
            key: "id",
        },
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "products",
            key: "id",
        },
    },
    cartId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: "cart",
            key: "id",
        },
    },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
});

Cart.hasMany(defineCartItem, { onDelete: "cascade" });
defineCartItem.belongsTo(Cart);

export default defineCartItem;