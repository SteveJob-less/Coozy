import InputPasswordField from "@/components/reusable/InputPasswordField";
import InputTextField from "@/components/reusable/InputTextField";
import { Button } from "@/components/ui/button";
import useSignupForm from "./useSignupForm";
import { z } from "zod";
import { useEffect, useState } from "react";
import signup from "@/api/user/signup";

type SignupFormProps = {
    handleSwitchForm: (action: "Login") => void;
};

const SignupForm = ({ handleSwitchForm }: SignupFormProps) => {
    const [formResult, setFormResult] = useState<{ prompt?: string, isSuccess?: boolean } | undefined>(undefined);

    const {
        register,
        handleSubmit,
        errors,
        setError,
        isSubmitting,
        signupSchema,
    } = useSignupForm();

    const onSubmit = async (data: z.infer<typeof signupSchema>) => {
        try {
            const response = await signup(data);
            
            if (response && !response.success) {
                setError("Email", { message: response.message })

                return;
            }
            
            setFormResult({prompt: response?.message, isSuccess: response?.success});
        } catch (error) {
            console.error("Signup error:", error);
            
            setFormResult({prompt: "Cannot connect to the server. Please try again later.", isSuccess: false}); // Triggered when onSubmit without server connection
        }
    };

    useEffect(() => {
        if (formResult) {
            const showPrompt = setTimeout(() => {
                setFormResult(undefined);
            }, 5000);
            
            return () => {
                clearTimeout(showPrompt);
            };
        }
    }, [formResult]);
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="relative grid signup-form">
            {formResult && (
                <span className={`absolute p-3 text-lg font-semibold text-center ${formResult.isSuccess ? "text-green-300 border border-green-600 bg-green-200/10":"text-red-200 border border-red-600 bg-red-300/10"} rounded-lg -top-48`}>{formResult.prompt}</span>
            )}
            <InputTextField register={register} label="Firstname" placeholder="john" errMessage={errors.Firstname?.message} />
            <InputTextField register={register} label="Lastname" placeholder="doe" errMessage={errors.Lastname?.message} />
            <InputTextField register={register} label="Email" placeholder="johndoe@email.com" errMessage={errors.Email?.message} />
            <InputPasswordField register={register} label="Password" placeholder="Password" errMessage={errors.Password?.message}/>
            <InputPasswordField register={register} label="ConfirmPassword" placeholder="Re-type password" errMessage={errors.ConfirmPassword?.message}/>
            <div className="flex items-center justify-center px-8 mb-2 -mt-2 text-slate-500 h-fit">
                <span>
                    Already have an account?
                    <Button 
                        variant="link" 
                        onClick={() => handleSwitchForm("Login")}
                        className="px-2 text-[18px] text-blue-600 font-semibold hover:text-blue-800 py-0"
                        >
                        Login
                    </Button>
                </span>
            </div>
            <Button disabled={isSubmitting} className="w-full py-5 text-xl font-bold tracking-widest border border-transparent hover:border-slate-400 hover:bg-slate-700 font-[gilroy-bold]">Signup</Button>
        </form>
    );
};

export default SignupForm;