const cookieOptions = {
    // Don't forget to set this to true if using HTTPS
    secure: false, 
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
};

export default cookieOptions;