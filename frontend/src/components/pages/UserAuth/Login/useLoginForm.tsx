import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const useLoginForm = () => {
    // Define the login schema using zod
    const loginSchema = z.object({
        Email: z.string().min(1, { message: "Email cannot be empty" }).email("Email address is invalid"),
        Password: z.string().min(1, { message: "Password cannot be empty" }),
    });

    // Input field default values: use for development only
    const defaultValues = {
        Email: "steve1@test.yes",
        Password: "steve1234"
    };

    // Use the "useForm" hook with the "zodResolver" and default values
    const { 
        register,                               // function: useForm register method
        handleSubmit,                           // function: Handle form submission
        formState: { errors, isSubmitting },    // function: Access form state: errors and status
        setError                                // function: Set error manually for backend validation response
    } = useForm<z.infer<typeof loginSchema>>({  
        defaultValues: defaultValues,
        resolver: zodResolver(loginSchema),
    });

    // Return the necessary values for the component
    return { 
        register, 
        handleSubmit, 
        errors, 
        isSubmitting, 
        setError, 
        loginSchema,
    };
};   

export default useLoginForm