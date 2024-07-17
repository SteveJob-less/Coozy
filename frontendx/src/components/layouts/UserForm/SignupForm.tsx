import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm} from "react-hook-form";
import {  z } from "zod";
import { useEffect, useState } from "react";

// import userSignup from "../../services/userSignup";
import returnErrorMessage from "../../../utils/getErrorMessage";
import SwitchFormClickable from "../../molecules/UserForm/SwitchFormClickable";
import FormInputField from "../../molecules/UserForm/FormInputField";
import ButtonSubmit from "../../molecules/UserForm/BottunSubmit";

type FormFields = z.infer<typeof signupFormSchema>
type SignupFormProps = {
    handleFormChange: () => void;
}

const signupFormSchema = z.object({
    firstname: z.string().min(2, "Firstname must be at least 2 characters long").refine((value) => value.match(/^[a-zA-Z]+$/), "Firstname must only contain letters"),
    lastname: z.string().min(2, "Lastname must be at least 2 characters long").refine((value) => value.match(/^[a-zA-Z]+$/), "Lastname must only contain letters"),
    email: z.string().email("Invalid email"),
    password: z.string().min(8, "Password should be 8 characters long"),
    confirm: z.string(),
}).refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
});

const SignupForm = ({ handleFormChange }: SignupFormProps) => {
    const { register, setError, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormFields>({ resolver: zodResolver(signupFormSchema) });
    const [showConfirmPass, setShowConfirmPass] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const fields = ["firstname", "lastname", "email", "password", "confirm"];

    const onSubmit: SubmitHandler<FormFields> = async(data) => {
        try {
            if(Math.random() < 0.1) {
                setError("email", { message: "This email is already taken" });
                throw new Error("This email is already taken");
            }
            if(Math.random() < 0.1) {
                setError("root", { message: "Unexpected error occurred"});
                throw new Error("Unexpected error occurred");
            }
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log("submit this data:", data);
            console.log("submitting...");
            // const result = await userSignup(data);
        } catch(error: any) {
            console.error("Signup Form Submission Error:", error.message);
        }
    };

    useEffect(() => {
        document.title = "Signup";
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="text-center text-white shadow-outline text-lg w-[410px] z-[1] bg-[#C2B280] border px-10 rounded-xl py-5">
        {errors.root && (
            <span className="text-red-500">Unexpected Error. Pleast try again.</span>
        )}
            <h1 className="mb-6 text-5xl font-bold">Signup</h1>
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
                form={{ name: "Login", q: "Already have an account? " }} 
            />
            <ButtonSubmit action={"Signup"} isSubmitting={isSubmitting} />
        </form>
    );
};

export default SignupForm;