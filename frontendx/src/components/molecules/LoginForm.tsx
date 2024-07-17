import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import FormInputField from "./FormInputField";
import getErrorMessage from "../../utils/getErrorMessage";

const loginFormSchema = z.object({
    email: z.string().email("Invalid email format"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
});

type LoginFormProps = {
    handleFormChange: () => void;
}

type FormFields = z.infer<typeof loginFormSchema>

const LoginForm = ({ handleFormChange }: LoginFormProps) => {
    const fields = ["email", "password"];
    const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<FormFields>({ resolver: zodResolver(loginFormSchema) });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);

    const onSubmit: SubmitHandler<FormFields> = async(data) => {
        try {
            // const result = loginUser();
            // To simulate Error: "This email is already token", with 10% error chance
            if(Math.random() < 0.1) {
                setError("email", { message: "This email is already taken" });
                console.log("This email is already taken");
                return;
            }
            if(Math.random() < 0.1) {
                setError("root", { message: "Unexpected error occurred"});
                console.log("Unexpected error occurred");
                return;
            }
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log(data);
        } catch(error) {
            console.error(error);
        }
    }
    
    useEffect(() => {
        console.log("Login Form");
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="shadow-outline text-lg w-[410px] z-[1] text-black bg-gray-800 bg-opacity-40 border-2 border-gray-200 border-opacity-50 px-10 rounded-xl py-5">
        {errors.root && (
            <span className="text-red-500">Unexpected Error. Pleast try again.</span>
        )}
            <h1 className="mb-6 text-5xl font-bold text-gray-800">Login</h1>
        {fields.map((field) => (
            <FormInputField 
                key={field}
                fieldName={field}
                register={register}
                errorPrompt={getErrorMessage(errors, field)}
                showState={field === "password"? showPassword: field === "confirm" ? showConfirmPass: undefined}
                toggle={field === "password"? setShowPassword: field === "confirm"? setShowConfirmPass: undefined}
            /> 
        ))}
            <p className="mb-3 text-sm">
                Don't have an account yet? 
                <span onClick={handleFormChange} className="italic font-semibold cursor-pointer hover:underline hover:text-gray-800"> Signup here.</span>
            </p>
            <button 
                type="submit" 
                className={`px-3 py-1 w-full text-xl font-semibold text-white ${isSubmitting? "bg-[#9fd5ec] disabled": "bg-[#6ecaf2]"} rounded-md hover:bg-[#9fd5ec]`}
            >
                    {isSubmitting? "Loading...": "Login"}
            </button>
        </form>
    );
};

export default LoginForm;