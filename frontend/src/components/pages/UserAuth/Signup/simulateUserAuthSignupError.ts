// This Util is for development testing only
// Simulates error edge cases for backend user signup API.
// This approach might not be suitable for production environments where
// a more deterministic error simulation strategy is needed.

export type SimulatedErrorResponse = {
    code: number;
    error: {
        field: string;
        message: string;
    };
};

const simulateSignupError = async (): Promise<SimulatedErrorResponse | null> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // 0.3 (30%) chance of error
    if(Math.random() < 0.9) {
        const randomNumber = Math.floor(Math.random() * (3)) + 1;
    
        // Generate random field error
        if(randomNumber === 1) {
            const fields = ["Firstname", "Lastname", "Email", "Password"];
            const randomedIndex = Math.floor(Math.random() * fields.length);
            
            console.log(`Server: ${fields[randomedIndex]} can't be empty`);
            throw ({ code: 400, error: { field: fields[randomedIndex], message: `${fields[randomedIndex]} field can't be empty` } });
            
        };
    
        // Email not available error
        if(randomNumber === 2) {
            console.log("Server: This email is already taken");
            throw ({ code: 409, error: { field: "Email", message: "This email is already taken" } });
        };
        
        // Generic Error
        if(randomNumber === 3) {
            console.log("Server: Unexpected error occurred");
            throw ({ code: 500, error: { field: "root", message: "500 Internal Server Error, Unexpected error occurred!" } });
        };
    
    }
    return null;
}

export { simulateSignupError };