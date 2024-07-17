import { UseFormRegister } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type InputTextFieldProps = {
    register: UseFormRegister<any>;
    placeholder: string;
    label: string;
    errMessage?: string;
};


const InputTextField = ({ register, placeholder, label, errMessage }: InputTextFieldProps) => {

    return (
        <div className="relative pb-4 input-field">
            <Label className="text-[16px] tracking-widest text-slate-100/70 font-semibold" htmlFor={label}>{label}</Label>
            <Input 
                {...register(label)}
                id={label} 
                type="text" 
                placeholder={placeholder}
                className="text-xl tracking-wider text-white placeholder:text-slate-300/30" 
            />
        {errMessage && (
            <span className={`${label}-error text-red-500 text-sm font-semibold px-1 absolute -bottom-1`}>{errMessage}</span>
        )}
        </div>
    );
};

export default InputTextField;