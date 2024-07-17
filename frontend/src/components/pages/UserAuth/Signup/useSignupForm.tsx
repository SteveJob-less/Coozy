import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod"


const useSignupForm = () => {
    
    // Define the signup schema using zod
    const signupSchema = z.object({
        Firstname: z.string().min(2, { message: "Firstname must be at least 2 characters long" }),
        Lastname: z.string().min(2, { message: "Lastname must be at least 2 characters long" }),
        Email: z.string().min(1, { message: "Email is required" }).email({ message: "Invalid email address" }),
        Password: z.string().min(1, { message: "Password is required" }),
        ConfirmPassword: z.string(),
    }).refine((data) => (data.Password === data.ConfirmPassword && data.Password.length >= 8), { 
        message: "Passwords do not match" ,
        path: ["ConfirmPassword"],
    }).refine((data) => /^[a-zA-Z]+$/.test(data.Firstname), {
        message: "Firstname must only contain letters",
        path: ['Firstname'],
    }).refine((data) => /^[a-zA-Z]+$/.test(data.Lastname), {
        message: "Lastname must only contain letters",
        path: ['Lastname'],
    });

    // Input field default values: use for development only
    const defaultValues = {
        Firstname: "steve",
        Lastname: "test",
        Email: "steve@test.yes",
        Password: "steve1234",
        ConfirmPassword: "steve1234",
    };

    // Use the "useForm" hook with the "zodResolver" and default values
    const { 
        register,                                   // function: useForm register method
        handleSubmit,                               // function: Handle form submission
        formState: { errors, isSubmitting },        // function: Access form state: errors, status
        setError,                                   // function: Set error manually for backend validation response
    } = useForm<z.infer<typeof signupSchema>>({
        defaultValues: defaultValues,
        resolver: zodResolver(signupSchema),
    });



    // Return the necessary values for the component
    return { 
        register, 
        handleSubmit, 
        errors, 
        isSubmitting, 
        setError, 
        signupSchema,
    };

}

export default useSignupForm;