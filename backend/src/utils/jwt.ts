import jwt from "jsonwebtoken";

const generateTokens = (userId: number) => {
    const accessToken = jwt.sign(
        { userId }, 
        process.env.JWT_SECRET ?? "", 
        { expiresIn: "5m" }
    );

    const refreshToken = jwt.sign(
        { userId }, 
        process.env.JWT_SECRET ?? "", 
        { expiresIn: "1d" }
    );

    return { accessToken, refreshToken };
};

export { generateTokens };