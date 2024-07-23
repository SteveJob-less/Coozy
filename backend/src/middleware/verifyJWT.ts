import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";


const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) return res.status(401).json({ 
        success: false, 
        code: 401, 
        message: "Unauthorized to do this request",
    });
    console.log(authHeader);

    const token = authHeader.split(' ')[1];

    jwt.verify(
        token, 
        process.env.JWT_SECRET ?? "",
        (err, decoded) => {
            if (err) return res.status(403).json({ 
                success: false, 
                code: 403, 
                message: "Invalid token" 
            }) 

            next();
        }
    );
};

export default verifyToken;