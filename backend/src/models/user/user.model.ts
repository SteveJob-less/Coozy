import { DataTypes, Model } from "sequelize";
import db from "../../../config/db";

type UserAttributes = {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    address: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
};

type UserCreationAttributes = Pick<UserAttributes, Exclude<keyof UserAttributes, 'id' | 'createdAt' | 'updatedAt'>>;
class User extends Model<UserAttributes, UserCreationAttributes>{}

const defineUser = db.define<User, UserAttributes>("users", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    firstname: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
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

export default defineUser;