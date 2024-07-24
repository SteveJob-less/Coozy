import { Request, Response } from "express";
import { generateTokens } from "../../utils/jwt";
import cookieOptions from "../../../config/cookieOptions";
import bcrypt from "bcrypt";
import { User } from "../../models";

const loginUser = async (req: Request, res: Response) => {
    try {
        const { Email, Password } = req.body;
    
        const user = await User.findOne({ where: { email: Email } });
     
        if (!user) {
            return res.status(404).json({ 
                success: false, 
                code: 404, 
                message: "Email not found" 
            });
        };
    
        // Utilized the getDataValue(columnName) method from sequelize instance to get the value in any column
        const userPassword = user.getDataValue("password");

        const isPasswordValid = await bcrypt.compare(Password, userPassword);
    
        if (!isPasswordValid) {
            return res.status(401).json({ 
                success: false, 
                code: 401, 
                message: "Wrong password" 
            });
        };
    
        // Utilized the getDataValue() method from sequelize instance to get the value
        const userId = user.getDataValue("id");
        
        const { accessToken, refreshToken } = generateTokens(userId);

        res.cookie("refreshToken", refreshToken, cookieOptions);

        res.status(200).json({ 
            success: true, 
            code: 200, 
            message: "Login successful", 
            accessToken,
        });
    } catch (error) {
        console.error("Error during login:", error);

        res.status(500).json({
            success: false, 
            code: 500, 
            message: "Internal server error" 
        });
    }
};

export default loginUser;