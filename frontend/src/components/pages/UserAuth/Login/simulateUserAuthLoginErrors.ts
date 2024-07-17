// This Util is for development testing only
// Simulates error edge cases for backend user login API.
// This approach might not be suitable for production environments where
// a more deterministic error simulation strategy is needed.

// Returns error to a field input randomly
export type SimulatedErrorResponse = {
    code: number;
    error: {
        field: string;
        message: string;
    };
};

const simulateLoginError = async (): Promise<SimulatedErrorResponse | null> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // 0.3 (30%) chance of error
    if(Math.random() < 0.3) {       
        // Incorrect Password Input
        if(Math.random() < 0.2) {
            console.log("Server: Incorrect password");
            throw ({ code: 401, error: { field: "Password", message: "Incorrect password" } });
        };
        
        // Empty password field error
        if(Math.random() < 0.2) {
            console.log("Server: Password can't be empty");
            throw ({ code: 400, error: { field: "Password", message: "Password field can't be empty" } });
        };
        
        // Incorrect Email Input
        if(Math.random() < 0.2) {
            console.log("Server: Incorrect email");
            throw ({ code: 404, error: { field: "Email", message: "Incorrect email" } });
        };
        
        // Empty email field input
        if(Math.random() < 0.2) {
            console.log("Server: Email can't be empty");
            throw ({ code: 400, error: { field: "Email", message: "Email field can't be empty" } });

        };
        
        console.log("Server: Unexpected error occurred");
        throw ({ code: 500, error: { field: "root", message: "500 Internal Server Error, Unexpected error occurred!" } });
    };
        
    return null;
};

export { simulateLoginError }