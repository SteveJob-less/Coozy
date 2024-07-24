import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response } from "express";
import { generateTokens } from "../utils/jwt";
import cookieOptions from "../../config/cookieOptions";

const handleRefreshToken = (req: Request, res: Response) => {
    const refreshToken = req.cookies.refreshToken;
    console.log("refreshToken:", refreshToken);

    if (!refreshToken) {
        return res.status(401).json({ 
            success: false, 
            code: 401, 
            message: "Unauthorized: No refresh token provided",
        });
    }

    try {
        const decoded = jwt.verify(
            refreshToken,
            process.env.JWT_SECRET ?? "",
        ) as JwtPayload;
        
        const userId = decoded.userId;

        const { 
            accessToken: newAccessToken, 
            refreshToken: newRefreshToken, // Refresh the refreshToken everytime accessToken expires
        } = generateTokens(userId);

        res.cookie("refreshToken", newRefreshToken, cookieOptions); // Always have fresh refreshToken every request

        return res.status(200).json({ 
            accessToken: newAccessToken,
            code: 200,
            message: "Refresh token successfully",
        });
    } catch (error) {
        console.error("Error verifying refresh token:", error);
        
        return res.status(403).json({
            success: false,
            code: 403,
            message: "Invalid refresh token",
        });
    }
};

export default handleRefreshToken;