import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import returnErrorMessage from "../../../utils/getErrorMessage";
import SwitchFormClickable from "../../molecules/UserForm/SwitchFormClickable";
import FormInputField from "../../molecules/UserForm/FormInputField";
import ButtonSubmit from "../../molecules/UserForm/BottunSubmit";

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
        document.title = "Login";
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="shadow-outline text-center text-lg w-[410px] z-[1] bg-[#C2B280] border px-10 rounded-xl py-5">
        {errors.root && (
            <span className="text-red-500">Unexpected Error. Pleast try again.</span>
        )}
            <h1 className="mb-6 text-5xl font-bold text-white">Login</h1>
        {fields.map((field) => (
            <FormInputField 
                key={field}
                fieldName={field}
                register={register}
                errorPrompt={returnErrorMessage(errors, field)}
                showState={field === "password"? showPassword: field === "confirm" ? showConfirmPass: undefined}
                toggle={field === "password"? setShowPassword: field === "confirm"? setShowConfirmPass: undefined}
            /> 
        ))}
            <SwitchFormClickable 
                handleFormChange={handleFormChange} 
                form={{name: "Signup", q: "Don't have an account yet? "}}
            />
            <ButtonSubmit action={"Login"} isSubmitting={isSubmitting} />
        </form>
    );
};

export default LoginForm;