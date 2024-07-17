import InputPasswordField from "@/components/reusable/InputPasswordField";
import InputTextField from "@/components/reusable/InputTextField";
import { Button } from "@/components/ui/button";
import useSignupForm from "./useSignupForm";
import { SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { simulateSignupError, SimulatedErrorResponse } from "./simulateUserAuthSignupError";

type SignupFormProps = {
    handleSwitchForm: (action: "Login") => void;
};

const SignupForm = ({ handleSwitchForm }: SignupFormProps) => {

    const {
        register,
        handleSubmit,
        errors,
        isSubmitting,
        setError,
        signupSchema,
    } = useSignupForm();

    const onSubmit: SubmitHandler<z.infer<typeof signupSchema>> = async (data) => {
        try {
            const result = await simulateSignupError();
            
            if(!result) {
                console.log("Signup successful", data);
                return;
            };

            console.log("Input Field error:", errors);
        } catch(error) {
            const { code, error: { field, message } } = error as SimulatedErrorResponse;
            setError(field as any, { message });
            console.error(`Simulated error: ${code}`, error);
        };
    };
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="relative grid signup-form">
            {errors.root?<span id="root-error" className="absolute p-3 text-lg font-semibold text-center text-red-600 border border-red-700 rounded-lg bg-red-100/60 -top-48">{errors.root?.message}</span> : null}
            <InputTextField register={register} label="Firstname" placeholder="john" errMessage={errors.Firstname?.message} />
            <InputTextField register={register} label="Lastname" placeholder="doe" errMessage={errors.Lastname?.message} />
            <InputTextField register={register} label="Email" placeholder="steve@test.yes" errMessage={errors.Email?.message} />
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