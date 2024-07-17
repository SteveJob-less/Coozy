import { Sequelize } from "sequelize";
import dbConfig from "./dbConfig";

const { host, user, password, database } = dbConfig;

const db = new Sequelize(database, user, password, { host, dialect: "mysql" });

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