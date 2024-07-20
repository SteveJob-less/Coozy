import { User } from "../../models/user";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const loginUser = async (req: Request, res: Response) => {
    try {
        const { Email, Password } = req.body;
    
        const user = await User.findOne({ where: { email: Email } });

        if (!user) {
            return res.status(404).json({ success: false, message: "Invalid email" });
        };
    
        // Utilized the getDataValue() method from sequelize instance to get the value
        const userPassword = user.getDataValue("password");

        const isPasswordValid = await bcrypt.compare(Password, userPassword);
    
        if (!isPasswordValid) {
            return res.status(401).json({ success: false, message: "Password doesn't match" });
        };
    
        // Utilized the getDataValue() method from sequelize instance to get the value
        const userId = user.getDataValue("id");

        const token = jwt.sign({ userId: userId }, process.env.JWT_SECRET ?? "", { expiresIn: "1h" });
    
        res.status(200).json({ success: true, token });
    } catch (error) {
        console.error("Error during login:", error);

        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export default loginUser;