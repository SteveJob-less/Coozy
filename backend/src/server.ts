import app from "./app";
import "reflect-metadata";
import { checkDatabaseConnection } from "../config/db";

const PORT = process.env.PORT || 2323;

(async () => {
    try {
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
        
        const isConnected = await checkDatabaseConnection();

        if (!isConnected) throw new Error("Database connection failed.") 
            
    } catch (error) {
        console.error("Error starting server:", error);
    }
})();
