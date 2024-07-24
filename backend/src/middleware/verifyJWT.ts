import jwt, { JwtPayload } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

export type ExtendedRequest = Request & { user?: JwtPayload };

const verifyJWT = (req: ExtendedRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) return res.status(401).json({ 
        success: false, 
        code: 401, 
        message: "Unauthorized: No authorization header provided",
    });

    const accessToken = authHeader.split(' ')[1];

    try {
        const decodedAccessToken = jwt.verify(
            accessToken, 
            process.env.JWT_SECRET ?? "",
        ) as JwtPayload;

        req.user = decodedAccessToken;
        
        next();
    } catch (error) {
        console.error("Error verifying JWT:", error);

        if (error instanceof jwt.JsonWebTokenError) {
            return res.status(401).json({
                success: false,
                code: 401,
                message: "Unauthorized: Access token is expired",
            });
        }

        return res.status(403).json({ 
            success: false, 
            code: 403, 
            message: "Invalid tokensss",
        });
    }
};

export default verifyJWT;