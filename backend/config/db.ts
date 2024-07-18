import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const db = new Sequelize(
    process.env.DB_NAME ?? "", 
    process.env.DB_USER ?? "", 
    process.env.DB_PASSWORD ?? "",
    { 
        host: process.env.DB_HOST ?? "", 
        dialect: "mysql" 
    }
);

export const checkDatabaseConnection = async () => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
        return true;
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        return false;
    };
};

export default db;