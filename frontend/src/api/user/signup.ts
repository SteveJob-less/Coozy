import axios from "axios";

type SignupInputs = {
    Firstname: string;
    Lastname: string;
    Email: string;
    Password: string;
    ConfirmPassword: string;
};

type SignupResponse = {
    success: boolean;
    code: number;
    message: string; 
};

export const signup = async (data: SignupInputs): Promise<SignupResponse | undefined> => {
    try {
        // Get the necessary fields from data 
        const { ConfirmPassword, ...restData } = data;

        const response = await axios.post("http://localhost:2323/user/signup", restData);

        // Unexpected error
        if (response.status !== 201) {
            return { 
                success: false, 
                code: response.status,
                message: "An unexpected error occurred." 
            };
        }
        
        console.log("User created successfully:", response.data.message);
        return { 
            success: true, 
            code: response.status, 
            message: response.data.message 
        };
    } catch (error: any) {
        console.error("Error during signup:"+ error.response.status, error.response.data);

        // Returned when email already existed 
        if (error.response.status >= 400) { 
            return { 
                success: false, 
                code: error.response.status, 
                message: error.response.data.message 
            };
        } 
    }
};

export default signup;