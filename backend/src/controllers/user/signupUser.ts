import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../../models";

const signupUser = async (req: Request, res: Response) => {
    try {
        const { Firstname, Lastname, Email, Password } = req.body;

        const existingUser = await User.findOne({ where: { email: Email } });

        if (existingUser) {
            return res.status(409).json({ 
                success: false, 
                code: 409,
                message: "User already exists" 
            });
        }

        const hashedPassword = await bcrypt.hash(Password, 10);

        await User.create({
            firstname: Firstname,
            lastname: Lastname,
            email: Email,
            address: "",
            password: hashedPassword,
        });

        res.status(201).json({ 
            success: true, 
            code: 201, 
            message: "User created successfully" 
        });
    } catch (error: any) {
        console.error("Error during signup:", error);

        res.status(500).json({ 
            success: false, 
            code: 500,
            message: "Internal server error" 
        });
    }
};

export default signupUser;