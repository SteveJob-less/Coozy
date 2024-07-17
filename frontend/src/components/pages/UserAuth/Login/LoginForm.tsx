import { SimulatedErrorResponse, simulateLoginError } from "./simulateUserAuthLoginErrors";
import InputPasswordField from "@/components/reusable/InputPasswordField";
import InputTextField from "@/components/reusable/InputTextField";
import useLoginForm from "./useLoginForm";
import { Button } from "@/components/ui/button";
import { SubmitHandler } from "react-hook-form";
import { z } from "zod";

type LoginFormProps = {
    handleSwitchForm: (action: "Signup") => void;
};

const LoginForm = ({ handleSwitchForm }: LoginFormProps) => {

    const { 
        register, 
        handleSubmit, 
        errors, 
        isSubmitting, 
        setError, 
        loginSchema 
    } = useLoginForm();

    const onSubmit: SubmitHandler<z.infer<typeof loginSchema>> = async (data) => {
        try {
            const result = await simulateLoginError(); // for simulating backend error (development purpose)
            
            if(!result) {
                console.log("Login successful", data);
                return;
            }

            console.log("Input Field error:", errors);
        } catch(error) {
            const { code, error: { field, message } } = error as SimulatedErrorResponse;
            setError(field as any, { message });
            console.error(`Simulated error: ${code}`, error);
        };
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="relative grid login-form">
            {errors.root?<span id="root-error" className="absolute p-3 text-lg font-semibold text-center text-red-600 border border-red-700 rounded-lg bg-red-100/60 -top-48">{errors.root?.message}</span> : null}
            <InputTextField register={register} label="Email" placeholder="johndoe@mail.com" errMessage={errors.Email?.message} />
            <InputPasswordField register={register} label="Password" placeholder="Password" errMessage={errors.Password?.message} />
            <div className="flex items-center justify-center px-8 mb-2 -mt-2 text-slate-500">
                <span>
                    Don't have an account?
                    <Button 
                        variant="link" 
                        onClick={() => handleSwitchForm("Signup")}
                        className="px-2 text-[18px] text-blue-600 font-semibold hover:text-blue-800 py-0"
                        >
                        Signup
                    </Button>   
                </span>
            </div>
            <Button disabled={isSubmitting} className="w-full py-5 text-xl font-bold tracking-widest border border-transparent hover:border-slate-400 hover:bg-slate-700 font-[gilroy-bold]">Login</Button>
        </form>
    );
};

export default LoginForm;